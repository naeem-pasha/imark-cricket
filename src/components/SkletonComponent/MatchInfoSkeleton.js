import { Skeleton } from "@/components/ui/skeleton";

export function MatchInfoSkeleton() {
  return (
    <div className="container mx-auto p-2 space-y-6 max-w-3xl">
      <div className="space-y-4">
        {/* Table Skeleton */}
        <div className="border rounded-md p-4 space-y-4">
          {Array(7)
            .fill("")
            .map((_, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between space-y-2"
              >
                <Skeleton className="h-4 w-24" /> {/* Left label */}
                <Skeleton className="h-4 w-48" /> {/* Right value */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
