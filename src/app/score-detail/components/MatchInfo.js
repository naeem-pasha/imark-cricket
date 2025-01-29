"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { formatDate, formatTime } from "@/lib/utils";
import { MatchInfoSkeleton } from "@/components/SkletonComponent/MatchInfoSkeleton";

export default function MatchInfo({ id }) {
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch match data
    const fetchMatchData = async () => {
      const options = {
        method: "GET",
        url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`, // Use dynamic ID
        headers: {
          "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY_CRICBUZZ}`,
          "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setMatchData(response.data); // Store data in state
        setLoading(false); // Mark loading as complete
      } catch (err) {
        setError(err); // Handle errors
        setLoading(false);
      }
    };

    if (id) {
      fetchMatchData();
    }
  }, [id]); // Re-run if the `id` prop changes

  // Handle loading and error states
  if (loading) return <MatchInfoSkeleton />;
  if (error) return <p>Error: {error.message} </p>;

  const matchinfo = matchData?.matchInfo;
  const timeString = matchinfo?.matchStartTimestamp;
  const date = formatDate(timeString);
  const time = formatTime(timeString);

  return (
    <div className="container mx-auto p-2 space-y-6 max-w-3xl">
      <div className="space-y-4">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="w-30 font-medium">Match</TableCell>
              <TableCell>
                {matchinfo.team1.shortName} VS {matchinfo.team2.shortName} ,
                {matchinfo?.matchDescription} , {matchinfo?.series.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Date</TableCell>
              <TableCell>{date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Time</TableCell>
              <TableCell>{time}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Venue</TableCell>
              <TableCell>
                {matchinfo.venue?.city} - {matchinfo.venue?.country}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Umpires</TableCell>
              <TableCell>
                {matchinfo?.umpire1.name} {matchinfo?.umpire2?.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Third Umpire</TableCell>
              <TableCell>{matchinfo?.umpire3.name || "Not Availble"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Match Referee</TableCell>
              <TableCell>
                {matchinfo?.referee?.name || "Not Availble"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* <div className="space-y-6">
          <div>
            <h2 className="text-base font-semibold mb-2">New Zealand Squad</h2>
            <hr />
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Playing</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {match.teams.newZealand.playing.map((player, idx) => (
                        <div key={idx}>{player}</div>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bench</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {match.teams.newZealand.bench.map((player, idx) => (
                        <div key={idx}>{player}</div>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Support Staff</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {match.teams.newZealand.supportStaff.map((staff, idx) => (
                        <div key={idx}>{staff}</div>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h2 className="text-base font-semibold mb-2">Sri Lanka Squad</h2>
            <hr />
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Playing</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {match.teams.sriLanka.playing.map((player, idx) => (
                        <div key={idx}>{player}</div>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bench</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {match.teams.sriLanka.bench.map((player, idx) => (
                        <div key={idx}>{player}</div>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Support Staff</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {match.teams.sriLanka.supportStaff.map((staff, idx) => (
                        <div key={idx}>{staff}</div>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div> */}
      </div>
    </div>
  );
}
