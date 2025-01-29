import { Trophy, Plus } from "lucide-react";
import { Button } from "./ui/button";

export function QuickAccess() {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 py-2 text-sm  overflow-x-scroll md:overflow-hidden">
          <div className="font-semibold">Quick Access</div>
          <Button
            variant={"outline"}
            className="flex items-center gap-1 text-blue-600 cursor-pointer"
          >
            <Trophy className="h-4 w-4" />
            BGT 2024-25
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-1 text-blue-600 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            See Plans
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-1 text-blue-600 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18h6v-1.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            Team Pakistan
          </Button>
        </div>
      </div>
    </div>
  );
}
