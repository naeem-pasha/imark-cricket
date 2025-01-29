"use client";

import { TeamLineupSkeleton } from "@/components/SkletonComponent/TeamSquadSkeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { useEffect, useState } from "react";

function TeamLineup({ teams }) {
  const renderTeamSection = (players, sectionTitle, isLeftTeam, bgColor) => {
    return (
      <div className={`relative p-4 ${bgColor} rounded-lg`}>
        <h3 className="text-sm font-medium mb-4 bg-secondary mx-auto w-full text-center">
          {sectionTitle}
        </h3>
        <div className="space-y-3">
          {players?.map((player, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 ${
                isLeftTeam ? "" : "flex-row-reverse"
              }`}
            >
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarImage
                  src={player.image || "/placeholder.svg"}
                  alt={player.name}
                />
                <AvatarFallback>
                  {player.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div
                className={`flex-1 text-sm ${
                  isLeftTeam ? "text-left" : "text-right"
                }`}
              >
                <div className="font-medium">{player.name}</div>
                {player.role && (
                  <div className="text-xs text-gray-500">{player.role}</div>
                )}
              </div>
              <div
                className={`absolute ${
                  isLeftTeam ? "right-0" : "left-0"
                } top-0 bottom-0 w-px bg-gray-200`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-1 max-w-6xl">
      <div className="grid grid-cols-2 gap-px bg-gray-200">
        <div className="space-y-px">
          {renderTeamSection(
            teams?.team1?.playerDetails,
            teams?.team1?.name,
            true,
            "bg-[#e8f5e9]"
          )}
          {/* {renderTeamSection(
            teams.newZealand.bench,
            "Bench",
            true,
            "bg-[#e8f5e9]"
          )}
          {renderTeamSection(
            teams.newZealand.supportStaff,
            "Support Staff",
            true,
            "bg-[#e8f5e9]"
          )} */}
        </div>
        <div className="space-y-px">
          {renderTeamSection(
            teams?.team2?.playerDetails,
            teams?.team2?.name,
            false,
            "bg-[#fce4ec]"
          )}
          {/* {renderTeamSection(
            teams.sriLanka.bench,
            "Bench",
            false,
            "bg-[#fce4ec]"
          )}
          {renderTeamSection(
            teams.sriLanka.supportStaff,
            "Support Staff",
            false,
            "bg-[#fce4ec]"
          )} */}
        </div>
      </div>
    </div>
  );
}

const teamData = {
  newZealand: {
    playing: [
      { name: "Tim Robinson" },
      { name: "Rachin Ravindra" },
      { name: "Mark Chapman" },
      { name: "Glenn Phillips" },
      { name: "Daryl Mitchell" },
      { name: "Mitchell Hay", role: "wk" },
      { name: "Michael Bracewell" },
      { name: "Mitchell Santner", role: "c" },
      { name: "Zakary Foulkes" },
      { name: "Matt Henry" },
      { name: "Jacob Duffy" },
    ],
    bench: [{ name: "Nathan Smith" }, { name: "Borne Lister" }],
    supportStaff: [
      { name: "Gary Stead" },
      { name: "Luke Ronchi" },
      { name: "Shane Jurgensen" },
    ],
  },
  sriLanka: {
    playing: [
      { name: "Pathum Nissanka" },
      { name: "Kusal Mendis", role: "wk" },
      { name: "Kusal Perera" },
      { name: "Avishka Fernando" },
      { name: "Sahan Arachchige" },
      { name: "Wanindu Hasaranga" },
      { name: "Dasun Shanaka" },
      { name: "Maheesh Theekshana" },
      { name: "Binura Fernando" },
      { name: "Nuwan Thushara" },
    ],
    bench: [{ name: "Kamindu Mendis" }, { name: "Matheesha Pathirana" }],
    supportStaff: [{ name: "Dinesh Chandimal" }, { name: "Upendra ter Bell" }],
  },
};

export default function SquardTab({ id }) {
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
  if (loading) return <TeamLineupSkeleton />;
  if (error) return <p>Error: {error.message}</p>;

  const DataTeam = {
    team1: matchData?.matchInfo?.team1,
    team2: matchData?.matchInfo?.team2,
  };

  return <TeamLineup teams={DataTeam} />;
}
