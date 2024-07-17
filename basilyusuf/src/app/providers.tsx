// components/Providers.tsx
'use client';

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <NextTopLoader />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
