import { Skeleton } from "@/components/ui/skeleton";

export function ScoreCardSkeleton() {
  return (
    <div className="overflow-x-auto h-fit flex scrollbar-hide">
      {Array(9)
        .fill("")
        .map((_, i) => (
          <Skeleton key={i} className="h-52 min-w-80 mx-3" />
        ))}
    </div>
  );
}
