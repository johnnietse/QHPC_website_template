"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1E293B", // match bg-surface
            color: "#f8fafc",
            border: "1px solid #334155", // match border-border
          },
        }}
      />
    </ReactLenis>
  );
}
