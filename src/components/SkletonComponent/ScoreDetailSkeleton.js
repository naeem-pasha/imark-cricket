import { Skeleton } from "@/components/ui/skeleton";

export function ScoreDetialSkeleton() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Match Header Skeleton */}
      <div className="bg-white shadow-sm p-4">
        <Skeleton className="h-6 w-1/3 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-6">
        {/* Tabs Skeleton */}
        <div className="flex gap-4 mb-6">
          {Array(4)
            .fill("")
            .map((_, i) => (
              <Skeleton key={i} className="h-10 w-28 rounded-md" />
            ))}
        </div>

        {/* Content Area Skeleton */}
        <div className="space-y-4">
          {Array(3)
            .fill("")
            .map((_, i) => (
              <Skeleton key={i} className="h-20 w-full rounded-md" />
            ))}
        </div>
      </div>
    </main>
  );
}
