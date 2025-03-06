"use client";

import { useState, useEffect } from "react";
import { MatchHeader } from "@/components/match-header";
import { ScorecardTabs } from "./../components/scorecard-tabs";
import axios from "axios";
import { ScoreDetialSkeleton } from "@/components/SkletonComponent/ScoreDetailSkeleton";

export default function Page({ params }) {
  const [matchData, setMatchData] = useState(null); // State to store API response
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track any errors

  useEffect(() => {
    const fetchMatchData = async () => {
      setLoading(true);
      const { id } = await params;
      try {
        const options = {
          method: "GET",
          url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}/hscard`,
          headers: {
            "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY_CRICBUZZ}`,
            "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
          },
          params: {
            t: new Date().getTime(), // Add a timestamp to bypass cache
          },
        };
        const response = await axios.request(options);
        setMatchData(response.data); // Store the API response in state
      } catch (err) {
        setError("Failed to fetch match data"); // Set an error message if the request fails
        console.error(err);
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };

    fetchMatchData();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) {
    return <ScoreDetialSkeleton />;
  }
  console.log(matchData.scoreCard[0]);
  if (!matchData.scoreCard[0]) {
    return (
      <>
        <MatchHeader matchHeader={matchData?.matchHeader} />
        <h1 className="flex justify-center items-center">
          match is not started yet
        </h1>
      </>
    );
  }
  return (
    <main className="min-h-screen bg-gray-50">
      <MatchHeader matchHeader={matchData?.matchHeader} />
      <div className="container mx-auto px-4 py-6">
        {loading && <p>Loading match data...</p>} {/* Show loading state */}
        {error && <p className="text-red-500">{error}</p>}{" "}
        {/* Show error state */}
        {matchData && <ScorecardTabs matchData={matchData} />}{" "}
        {/* Pass matchData to ScorecardTabs */}
      </div>
    </main>
  );
}
