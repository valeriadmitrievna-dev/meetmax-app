import { FC } from "react";
import { Outlet } from "react-router";
import Header from "../components/header";

const isAuth = false;

const CommonLayout: FC = () => {
  return (
    <>
      <Header isAuth={isAuth} />
      <Outlet />
    </>
  );
};

export default CommonLayout;
