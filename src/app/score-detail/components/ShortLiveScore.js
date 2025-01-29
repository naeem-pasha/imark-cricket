"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BattingScorecard } from "./batting-card";
import { BowlingScorecard } from "./balling-scorecard";
import { converIntoArr } from "@/lib/utils";

export default function CricketScorecard({ data }) {
  if (!data) {
    return <p>No data available</p>;
  }

  const scoreCard = data?.scoreCard;
  const team1Details = scoreCard[0];
  const team2Details = scoreCard[1];

  const getScoreDetails = (teamDetails) => teamDetails?.scoreDetails || {};

  const team1BatDetail = converIntoArr(
    team1Details?.batTeamDetails?.batsmenData
  );
  const team2BatDetail = converIntoArr(
    team2Details?.batTeamDetails?.batsmenData
  );

  const team1BowDetail = converIntoArr(
    team1Details?.bowlTeamDetails?.bowlersData
  );
  const team2BowDetail = converIntoArr(
    team2Details?.bowlTeamDetails?.bowlersData
  );

  const team1Wickets = converIntoArr(team1Details?.wicketsData);
  const team2Wickets = converIntoArr(team2Details?.wicketsData);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Match Header */}
      <Card>
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium">
              <span>{team1Details.batTeamDetails.batTeamShortName} </span>
              {getScoreDetails(team1Details).runs}/
              {getScoreDetails(team1Details).wickets} (
              {getScoreDetails(team1Details).overs})
            </CardTitle>
            {!team2Details && getScoreDetails(team1Details) && (
              <Badge variant="secondary" className="text-sm">
                CRR: {getScoreDetails(team1Details).runRate}
              </Badge>
            )}
          </div>
          {team2Details && (
            <>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium">
                  <span>{team2Details?.batTeamDetails.batTeamShortName} </span>
                  {getScoreDetails(team2Details).runs}/
                  {getScoreDetails(team2Details).wickets} (
                  {getScoreDetails(team2Details).overs})
                </CardTitle>
                <Badge variant="secondary" className="text-sm">
                  CRR: {getScoreDetails(team2Details).runRate}
                </Badge>
              </div>
            </>
          )}

          <div className="space-y-1">
            <p className="text-sm font-medium text-red-500">{data?.status}</p>
            <p className="text-sm text-muted-foreground">
              <b>Partnership:</b>
              {!team2Details ? (
                <PartnerShipView teamDetails={team1Details} />
              ) : (
                <PartnerShipView teamDetails={team2Details} />
              )}
            </p>
          </div>
        </CardHeader>
      </Card>
      {/* Batting Table */}
      {/* <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-[200px]">Batter</TableHead>
                <TableHead className="text-right">R</TableHead>
                <TableHead className="text-right">B</TableHead>
                <TableHead className="text-right">4s</TableHead>
                <TableHead className="text-right">6s</TableHead>
                <TableHead className="text-right">SR</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "D Arcy Short *",
                  runs: 0,
                  balls: 4,
                  fours: 0,
                  sixes: 0,
                  sr: 0,
                },
                {
                  name: "Chris Lynn",
                  runs: 37,
                  balls: 21,
                  fours: 4,
                  sixes: 2,
                  sr: 176.19,
                },
              ].map(({ name, runs, balls, fours, sixes, sr }, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{name}</TableCell>
                  <TableCell className="text-right">{runs}</TableCell>
                  <TableCell className="text-right">{balls}</TableCell>
                  <TableCell className="text-right">{fours}</TableCell>
                  <TableCell className="text-right">{sixes}</TableCell>
                  <TableCell className="text-right">{sr}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card> */}
      {/* Bowling Table */}
      {/* <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-[200px]">Bowler</TableHead>
                <TableHead className="text-right">O</TableHead>
                <TableHead className="text-right">M</TableHead>
                <TableHead className="text-right">R</TableHead>
                <TableHead className="text-right">W</TableHead>
                <TableHead className="text-right">ECO</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "Will Sutherland *",
                  overs: 0.1,
                  maidens: 0,
                  runs: 0,
                  wickets: 0,
                  eco: 0.0,
                },
                {
                  name: "Thomas Stewart Rogers",
                  overs: 2,
                  maidens: 0,
                  runs: 15,
                  wickets: 0,
                  eco: 7.5,
                },
              ].map(({ name, overs, maidens, runs, wickets, eco }, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{name}</TableCell>
                  <TableCell className="text-right">{overs}</TableCell>
                  <TableCell className="text-right">{maidens}</TableCell>
                  <TableCell className="text-right">{runs}</TableCell>
                  <TableCell className="text-right">{wickets}</TableCell>
                  <TableCell className="text-right">{eco}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card> */}
      {/* Recent Balls */}
      {/* <Card>
        <CardContent className="py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-sm">
            <span className="font-medium whitespace-nowrap">Recent:</span>
            <div className="flex flex-wrap gap-1.5">
              {[
                "0",
                "0",
                "6",
                "0",
                "1",
                "1",
                "6",
                "2",
                "2",
                "0",
                "4",
                "0",
                "0",
              ].map((ball, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center justify-center w-6 h-6 rounded ${
                    ball === "6"
                      ? "bg-emerald-100 text-emerald-700"
                      : ball === "4"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-muted"
                  }`}
                >
                  {ball}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card> */}
      {/* first inning */}
      <BattingScorecard
        data={team1BatDetail}
        label={team1Details.batTeamDetails.batTeamName}
        wicketData={team1Wickets}
      />
      <BowlingScorecard
        data={team1BowDetail}
        label={team1Details.bowlTeamDetails.bowlTeamName}
      />
      {/* second inning */}
      <BattingScorecard
        data={team2BatDetail}
        label={team2Details?.batTeamDetails.batTeamName}
        wicketData={team2Wickets}
      />
      <BowlingScorecard
        data={team2BowDetail}
        label={team2Details?.bowlTeamDetails.bowlTeamName}
      />
    </div>
  );
}

const PartnerShipView = ({ teamDetails }) => {
  console.log(teamDetails);
  const partnerShipKey = Object.keys(teamDetails?.partnershipsData || {}).pop();
  return (
    <>
      {" "}
      {teamDetails?.partnershipsData[partnerShipKey]?.totalRuns}(
      {teamDetails?.partnershipsData[partnerShipKey]?.totalBalls})
    </>
  );
};
