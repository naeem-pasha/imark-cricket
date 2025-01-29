"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import image from "@/components/Screenshot from 2024-08-21 12-03-50.png";
import axios from "axios";
import { useEffect, useState } from "react";
import ImageById from "@/components/ImageById";
import { NewsDetailSkeleton } from "@/components/SkletonComponent/NewsDetialSkeleton";
import Head from "next/head";

export default function ArticlePage({ params }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Unwrapping `params`
        const { id } = await params;

        caches;
        const options = {
          method: "GET",
          url: `https://cricbuzz-cricket.p.rapidapi.com/news/v1/detail/${id}`,
          headers: {
            "x-rapidapi-key":
              "9ca2f5b645msh76c71a94a12a605p104281jsn5c6153e5d097",
            "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        setData(response?.data);
      } catch (error) {
        setError("Failed to fetch news details. Please try again later.");
        console.error("Error fetching news details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  if (loading) {
    return <NewsDetailSkeleton />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Destructuring data for easy access
  const { headline, intro, content, coverImage, context } = data || {};

  return (
    <>
      <article className="max-w-3xl mx-auto px-4 py-3">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>{context}</span>
        </nav>

        {/* Title */}
        <h1 className="text-2xl font-bold leading-tight mb-4">{headline}</h1>

        {/* Social Share */}
        <div className="flex gap-2 mb-6">
          <Button variant="outline" size="sm" className="gap-2">
            <Facebook className="w-4 h-4 text-blue-500" />
            Share
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Twitter className="w-4 h-4 text-blue-500" />
            Tweet
          </Button>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] mb-6">
          <ImageById
            fill={true}
            priority={true}
            className={"object-cover rounded-lg"}
            id={coverImage?.id}
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground text-sm mb-4">{intro}</p>
          {content?.length > 0 &&
            content.map((c, i) => (
              <p className="py-4" key={i}>
                {c.content?.contentValue}
              </p>
            ))}

          <Separator className="my-8" />

          <div className="text-sm text-muted-foreground">
            <p>© 2025 Cricket News. All rights reserved.</p>
          </div>
        </div>
      </article>
    </>
  );
}
