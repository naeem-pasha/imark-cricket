import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

export function MatchHeader({ matchHeader }) {
  if (!matchHeader) return <p>loading</p>;
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        {!matchHeader && <Skeleton className="container mx-auto px-4 py-4" />}
        <h1 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
          {matchHeader?.team1?.name} vs {matchHeader?.team2?.name},{" "}
          {matchHeader?.matchDescription} - Live Cricket Score
        </h1>
        <div className="text-sm text-gray-600">
          Series: {matchHeader?.seriesDesc}| Format: T20 | Venue: Bellerive
          Oval, Hobart | Toss: {matchHeader?.tossResults?.tossWinnerName}
        </div>
      </div>
    </div>
  );
}
