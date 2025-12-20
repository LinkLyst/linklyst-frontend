import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import React from "react";

const SearchHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:px-8 sm:py-4 ">
      <div className="flex  items-center gap-3 flex-1 max-w-lg">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <Input
            placeholder="Search.."
            className="pl-9 bg-zinc-900 border-zinc-800 text-sm text-zinc-200 
                       placeholder:text-zinc-500 focus-visible:ring-1 
                       focus-visible:ring-zinc-600"
          />
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md
                     border border-zinc-800 text-zinc-400
                     hover:bg-zinc-800 hover:text-white transition"
          aria-label="Filter"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </button>
      </div>

      <Button className="sm:w-40 w-full">Add Link</Button>
    </div>
  );
};

export default SearchHeader;
