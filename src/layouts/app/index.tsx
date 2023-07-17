import { FC } from "react";
import { Outlet } from "react-router";

const AppLayout: FC = () => {
  return (
    <>
      <aside>nav</aside>
      <Outlet />
    </>
  );
};

export default AppLayout;
