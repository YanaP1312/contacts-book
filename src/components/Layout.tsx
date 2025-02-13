import { FC, ReactNode, Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
