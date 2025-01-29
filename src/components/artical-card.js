"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import ImageById from "./ImageById";
import { timeAgo } from "@/lib/utils";

export function ArticleCard({ article }) {
  if (!article.story) {
    return;
  }

  const TimeAgo = timeAgo(article?.story?.pubTime);
  return (
    <Card className="bg-white overflow-hidden hover:shadow-md transition-shadow duration-200">
      <Link href={`/news-detail/${article?.story?.id}`}>
        {/* Tournament Header */}
        <div className="px-4 py-3 border-b border-[#e3e3e3]">
          <span className="text-[13px] text-[#666666] font-medium tracking-tight">
            {article?.story?.context}
          </span>
        </div>

        {/* Main Content */}
        <div className="group cursor-pointer">
          {/* Image Container */}
          <div className="relative aspect-[16/9] overflow-hidden">
            {/* <Image
            src={img}
            alt={"not foutn"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          /> */}
            <ImageById
              id={article?.story.coverImage.id}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill={true}
              priority={true}
            />
          </div>

          {/* Article Content */}
          <div className="p-4">
            <h2 className="text-[18px] md:text-[20px] font-bold text-[#222222] leading-tight mb-3 group-hover:text-[#2760aa] transition-colors">
              {article?.story?.hline}
            </h2>
            <hr />
            <p className="text-[14px] text-[#666666] leading-[1.5] mb-2">
              {article?.story?.intro}
              <br />
            </p>
            <p className="float-right text-[14px] text-[#666666] leading-[1.5] ">
              {TimeAgo}
            </p>

            {/* {article.relatedArticle && (
            <Link
              href={article.relatedArticle.link}
              className="inline-block text-[14px] text-[#2760aa] hover:underline leading-tight"
            >
              {article.relatedArticle.title}
            </Link>
          )} */}
          </div>
        </div>
      </Link>
    </Card>
  );
}
