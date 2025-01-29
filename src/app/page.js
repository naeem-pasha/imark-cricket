"use client";
import { NewsSection } from "@/components/news-section";
import { FeaturedVideos } from "@/components/featured-videos";
import { NewsArticle } from "@/components/new-artical";
import ScoreCards from "@/components/ScoreCards";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 ">
        <ScoreCards />
        <NewsArticle />
      </div>
      <div className="lg:col-span-4 space-y-6">
        <NewsSection />
        {/* <FeaturedVideos /> */}
      </div>
    </div>
  );
}
