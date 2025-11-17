import { Play } from "lucide-react";

export const WatchButton = () => {
  return (
    <div className="w-fit pl-4 pr-4 pt-2 pb-2 rounded-[6px] bg-gray-100 flex text-black mt-15">
      <Play />
      <p className="pl-3">Watch Trailer </p>
    </div>
  );
};
