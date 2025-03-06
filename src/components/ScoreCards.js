"use client";

import React, { useEffect, useRef, useState } from "react";
import { MatchCard } from "./match-card";
import axios from "axios";
import { ScoreCardSkeleton } from "./SkletonComponent/ScoreCardSkeleton";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const ScoreCards = () => {
  const [allSeriesMatches, setAllSeriesMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scrollState, setScrollState] = useState({
    leftVisible: false,
    rightVisible: true,
  });
  const containerRef = useRef(null);

  const endpoints = {
    live: "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live",
    recent: "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent",
  };

  const headers = {
    "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY_CRICBUZZ}`,
    "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
  };

  useEffect(() => {
    getAllMatches();
  }, []);

  const getAllMatches = async () => {
    try {
      const [liveResponse, recentResponse] = await Promise.all([
        axios.get(endpoints.live, { headers }),
        axios.get(endpoints.recent, { headers }),
      ]);

      const liveMatches =
        liveResponse?.data?.typeMatches?.flatMap((matchType) =>
          matchType.seriesMatches.filter((i) => !i?.adDetail)
        ) || [];

      const recentMatches =
        recentResponse?.data?.typeMatches?.flatMap((matchType) =>
          matchType.seriesMatches.filter((i) => !i?.adDetail)
        ) || [];

      setAllSeriesMatches([...liveMatches, ...recentMatches]);
    } catch (error) {
      console.error("Error fetching matches:", error);
      setError("Failed to load matches. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const updateScrollVisibility = () => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setScrollState({
      leftVisible: scrollLeft > 0,
      rightVisible: scrollLeft + clientWidth < scrollWidth,
    });
  };

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (loading) {
    return <ScoreCardSkeleton />;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="relative mt-3">
      {/* Scroll Buttons */}
      <ScrollButton
        direction="left"
        onClick={scrollLeft}
        isVisible={scrollState.leftVisible}
      />
      <ScrollButton
        direction="right"
        onClick={scrollRight}
        isVisible={scrollState.rightVisible}
      />

      {/* Card Container */}
      <div
        ref={containerRef}
        className="overflow-x-auto h-fit flex scrollbar-hide"
        onScroll={updateScrollVisibility}
      >
        <div className="flex flex-nowrap w-full">
          {allSeriesMatches.map((match, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{ minWidth: "300px", maxWidth: "400px" }}
            >
              <MatchCard match={match} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ScrollButton = ({ direction, onClick, isVisible }) => {
  if (!isVisible) return null;

  return (
    <button
      onClick={onClick}
      className={`absolute ${direction === "left" ? "left-0" : "right-0"} 
        top-1/2 transform -translate-y-1/2 z-50 bg-transparent p-2 
        rounded-full backdrop-blur-md text-gray-600 hover:text-black`}
    >
      {direction === "left" ? (
        <ChevronLeftIcon size={24} />
      ) : (
        <ChevronRightIcon size={24} />
      )}
    </button>
  );
};

export default ScoreCards;
