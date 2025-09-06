"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const TIMEOUT = 1000;

export const Background = () => {
  const src = "https://www.youtube.com/watch?v=ZvPem5XYBrU";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, TIMEOUT);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactPlayer
      className={cn(
        "pointer-events-none fixed top-0 left-0 aspect-video min-h-screen w-screen select-none transition-opacity duration-1000",
        visible ? "opacity-60" : "opacity-0"
      )}
      config={{
        youtube: {
          disablekb: 1,
        },
      }}
      controls={false}
      height="100%"
      loop
      muted
      playing
      src={src}
      width="100%"
    />
  );
};
