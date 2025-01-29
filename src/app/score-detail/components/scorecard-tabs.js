"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BattingScorecard } from "./batting-card";
import { BowlingScorecard } from "./balling-scorecard";
import MatchDetail from "./MatchInfo";
import SquardTab from "./SquardTab";
import ShortLiveScore from "./ShortLiveScore";
import MatchInfo from "./MatchInfo";

export function ScorecardTabs({ matchData }) {
  return (
    <Tabs defaultValue="scorecard" className="w-full ">
      <TabsList className="w-full justify-start border-b overflow-auto rounded-none h-auto p-0 bg-transparent">
        <TabsTrigger
          value="scorecard"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent px-4 py-2 text-sm font-medium"
        >
          Scorecard
        </TabsTrigger>

        <TabsTrigger
          value="Match-Info"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent px-4 py-2 text-sm font-medium"
        >
          Match Info
        </TabsTrigger>

        <TabsTrigger
          value="squads"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent px-4 py-2 text-sm font-medium"
        >
          Squads
        </TabsTrigger>
      </TabsList>
      <TabsContent value="scorecard" className="mt-4">
        <div className="space-y-6">
          <ShortLiveScore data={matchData} />
        </div>
      </TabsContent>
      <TabsContent value="Match-Info" className="mt-4">
        <div className="space-y-6">
          <MatchInfo id={matchData.matchHeader?.matchId} />
        </div>
      </TabsContent>
      <TabsContent value="squads" className="mt-4">
        <div className="space-y-6">
          <SquardTab id={matchData.matchHeader?.matchId} />
        </div>
      </TabsContent>
    </Tabs>
  );
}
