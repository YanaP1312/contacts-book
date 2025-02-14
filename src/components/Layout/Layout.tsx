import { FC, ReactNode, Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import s from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={s.layoutWraper}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
