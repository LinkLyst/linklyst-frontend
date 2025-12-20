"use client";

import React, { useState } from "react";
import SearchHeader from "../web/search-header/SearchHeader";

const Header = () => {
  const [active, setActive] = useState<"my" | "feed">("my");

  return (
    <>
      <header className="border-b border-zinc-800 bg-primary">
        <div className="flex max-w-xl mx-auto">
          {/* Following */}
          <button
            onClick={() => setActive("my")}
            className={`flex-1 py-4 text-center text-sm font-medium transition-all duration-200
            ${
              active === "my"
                ? "text-white border-b-2 border-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            My Links
          </button>

          {/* Feed */}
          <button
            onClick={() => setActive("feed")}
            className={`flex-1 py-4 text-center text-sm font-medium transition-all duration-200
            ${
              active === "feed"
                ? "text-white border-b-2 border-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Feed
          </button>
        </div>
      </header>
      <SearchHeader />
    </>
  );
};

export default Header;
