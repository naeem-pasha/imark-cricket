"use client";

import { useEffect, useState } from "react";
import { ArticleCard } from "./artical-card";
import { NewSkeleton } from "./SkletonComponent/NewsSkeleton";
import axios from "axios";

const STATIC_ARTICLES = [
  {
    tournament: "VIJAY HAZARE TROPHY 2024-25",
    title: "Abhishek-Prabhsimran record stand powers Punjab to massive win",
    subtitle:
      "At 17 years and 168 days, Ayush Mhatre became the youngest player to register a 150-plus score in Men's List A cricket.",
    image: "/placeholder.svg?height=400&width=600",
    relatedArticle: {
      title: "Hardik Pandya to play in Vijay Hazare Trophy from Saturday",
      link: "#",
    },
  },
  {
    tournament: "INDIA TOUR OF SOUTH AFRICA, 2024",
    title: "Bumrah's six-fer puts India in command on Day 2",
    subtitle:
      "The pacer recorded his best figures in Test cricket as South Africa were bowled out for 176",
    image: "/placeholder.svg?height=400&width=600",
    relatedArticle: {
      title: "Match Report: India vs South Africa, 2nd Test, Day 2",
      link: "#",
    },
  },
  // Add more static articles here as fallback
];

export function NewsArticle() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const options = {
      method: "GET",
      url: "https://cricbuzz-cricket.p.rapidapi.com/news/v1/index",
      headers: {
        "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY_CRICBUZZ}`,
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setArticles(response.data?.storyList || []);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setError(true);
      setArticles(STATIC_ARTICLES); // Fallback to static articles
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <NewSkeleton />;

  if (error && articles.length === 0) {
    return <p className="text-red-500 text-center">Failed to load articles.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-5 max-w-[1200px] mx-auto">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
}
