"use client";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import ImageById from "./ImageById";

// Helper Component to Render a Team
const TeamInfo = ({ team, score }) => {
  if (!team) return null;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {team.imageId && <ImageById id={team.imageId} className="w-6 h-6" />}
        <span className="font-semibold">
          {team.teamSName || "Unknown Team"}
        </span>
      </div>
      <div className="text-right">
        <span className="font-semibold">{score?.inngs1?.runs || 0}</span>
        {score?.inngs1?.wickets !== 10 && (
          <>
            <span className="font-semibold">
              /{score?.inngs1?.wickets || 0}
            </span>
          </>
        )}
        {score?.inngs2 && (
          <>
            <span className="font-semibold"> & {score?.inngs2?.runs || 0}</span>
            <span className="font-semibold">
              /{score?.inngs2?.wickets || 0}
            </span>
          </>
        )}
        <span className="text-gray-600 text-sm ml-2">
          (
          {score?.inngs2?.overs
            ? score?.inngs2?.overs
            : score?.inngs1?.overs || "0.0"}
          )
        </span>
      </div>
    </div>
  );
};

export function MatchCard({ match }) {
  if (!match?.seriesAdWrapper) return null;

  const series = match.seriesAdWrapper;
  const matchInfo = series.matches[0]?.matchInfo || {};
  const matchScore = series.matches[0]?.matchScore || {};
  console.log(matchInfo.state);

  return (
    <Card className="bg-white mb-4 max-w-[100%] min-w-[300px] flex-basis-[50%] px-2">
      {/* Header Section */}
      <div className="p-3 border-b">
        <div className="flex items-center justify-between w-full  text-xs text-gray-600 mb-2">
          <div className="flex items-center justify-between ">
            <span className="overflow-x-hidden flex">
              {matchInfo.matchDesc || "Match"} •{" "}
              {series.seriesName?.substring(0, 25) || "Series"}
            </span>
            <span className="bg-gray-100 px-1.5 py-0.5 ml=[100%] rounded">
              {matchInfo.matchFormat || "Format"}
            </span>
          </div>
        </div>

        {/* Teams and Scores Section */}
        <div className="space-y-2">
          <TeamInfo team={matchInfo.team1} score={matchScore.team1Score} />
          <TeamInfo team={matchInfo.team2} score={matchScore.team2Score} />
        </div>

        {/* Match Status */}
        <div className="text-sm text-red-500 mt-2">
          {/* {matchInfo.status?.substring(0, 38) || "Status unavailable"} */}
          {/* {matchInfo} */}
          <MatchStatus info={matchInfo} />
        </div>
      </div>

      {/* Links Section */}

      <div className="flex items-center justify-center text-xs border-b">
        <Link
          href={`/score-detail/${matchInfo?.matchId}`}
          className={`px-4 py-2 text-blue-600 hover:bg-gray-50 `}
        >
          {"View Detail"}
        </Link>
      </div>
    </Card>
  );
}

const MatchStatus = ({ info }) => {
  let status = info?.status;
  let state = info?.state;
  return <p className="text-[12px]">{JSON.stringify(status, state)}</p>;
};
