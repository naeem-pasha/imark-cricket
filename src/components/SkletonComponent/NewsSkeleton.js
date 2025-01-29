import { Skeleton } from "@/components/ui/skeleton";

export function NewSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-5 max-w-[1200px] mx-auto">
      {Array(9)
        .fill("")
        .map((_, i) => (
          <Skeleton key={i} className="h-52 w-full " />
        ))}
    </div>
  );
}
