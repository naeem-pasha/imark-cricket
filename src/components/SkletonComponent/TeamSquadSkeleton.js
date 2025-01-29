import { Skeleton } from "@/components/ui/skeleton";

export function TeamLineupSkeleton() {
  const renderSkeletonSection = (isLeftTeam, bgColor) => {
    return (
      <div className={`relative p-4 ${bgColor} rounded-lg`}>
        <Skeleton className="h-5 w-3/4 mx-auto mb-4" /> {/* Team Name */}
        <div className="space-y-3">
          {Array(11) // Simulate 11 players in a team
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 ${
                  isLeftTeam ? "" : "flex-row-reverse"
                }`}
              >
                <Skeleton className="w-8 h-8 rounded-full" /> {/* Avatar */}
                <div
                  className={`flex-1 ${
                    isLeftTeam ? "text-left" : "text-right"
                  }`}
                >
                  <Skeleton className="h-4 w-2/3" /> {/* Player Name */}
                  <Skeleton className="h-3 w-1/2 mt-1" /> {/* Player Role */}
                </div>
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
          {renderSkeletonSection(true, "bg-[#e8f5e9]")}
        </div>
        <div className="space-y-px">
          {renderSkeletonSection(false, "bg-[#fce4ec]")}
        </div>
      </div>
    </div>
  );
}
