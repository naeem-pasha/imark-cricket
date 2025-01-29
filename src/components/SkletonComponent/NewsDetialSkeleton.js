import { Skeleton } from "@/components/ui/skeleton";

export function NewsDetailSkeleton() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-3">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Skeleton className="h-4 w-24" />
      </div>

      {/* Title */}
      <div className="mb-4">
        <Skeleton className="h-6 w-3/4" />
      </div>

      {/* Social Share */}
      <div className="flex gap-2 mb-6">
        <Skeleton className="h-8 w-20 rounded-md" />
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>

      {/* Featured Image */}
      <div className="relative aspect-[16/9] mb-6">
        <Skeleton className="h-full w-full rounded-lg" />
      </div>

      {/* Article Content */}
      <div className="prose prose-gray max-w-none">
        <div className="text-muted-foreground text-sm mb-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mt-2" />
        </div>
        {Array(3)
          .fill("")
          .map((_, i) => (
            <Skeleton key={i} className="h-5 w-full my-2" />
          ))}

        <div className="my-8">
          <Skeleton className="h-0.5 w-full" />
        </div>

        <div className="text-sm text-muted-foreground">
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </article>
  );
}
