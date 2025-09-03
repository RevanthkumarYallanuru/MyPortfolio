import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const Layout = () => {
  return (
    <div className="min-h-screen animated-bg">
      <Navigation />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
};