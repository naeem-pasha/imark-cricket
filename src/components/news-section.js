"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { timeAgo } from "@/lib/utils";

export function NewsSection() {
  const [news, setNews] = useState([]);

  // Fetch news from API
  const fetchNews = async () => {
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
      if (!response) return;
      const stories = response.data.storyList
        .filter((item) => item.story) // Filter only story objects
        .map((item) => ({
          title: item.story.hline,
          description: item.story.intro,
          image: `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${item.story.coverImage.id}/i.jpg`,
          time: timeAgo(Number(item.story.pubTime)),
        }));
      setNews(stories);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // Fetch news on component mount
  useEffect(() => {
    fetchNews();
  }, []);
  console.log(news);
  return (
    <Card className="bg-white">
      <div className="p-4 border-b">
        <h2 className="font-bold text-lg">LATEST NEWS</h2>
      </div>
      <div className="divide-y">
        {news.map((item, i) => (
          <div key={i} className="p-4 hover:bg-gray-50  cursor-pointer">
            <h3 className="font-medium hover:underline text-sm leading-snug mb-1">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            )}

            <div className="text-xs text-gray-500">{item.time}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
