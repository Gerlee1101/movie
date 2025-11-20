import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const WatchButton = () => {
  return (
    <Button className="w-fit pl-4 pr-4 pt-2 pb-2 rounded-[6px] bg-muted flex text-secondary-foreground mt-15 hover:bg-secondary/80">
      <Play />
      <p className="pl-3">Watch Trailer </p>
    </Button>
  );
};
