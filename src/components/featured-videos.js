import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import Image from "next/image";

export function FeaturedVideos() {
  const videos = [
    {
      title: "Recap 2024: T20 World Cup high | Bumrah & Mandhana's masterclass",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      title: "India lose Boxing Day Test after 14 years! Parthiv Patel reacts",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
  ];

  return (
    <Card className="bg-white">
      <div className="p-4 border-b">
        <h2 className="font-bold text-lg">FEATURED VIDEOS</h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {videos.map((video, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={320}
                  height={180}
                  className="rounded w-full"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-sm font-medium mt-2 line-clamp-2">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
