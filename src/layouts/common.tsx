import { FC } from "react";
import { Outlet } from "react-router";

const CommonLayout: FC = () => {
  return (
    <>
      <header>header</header>
      <Outlet />
    </>
  );
};

export default CommonLayout;
