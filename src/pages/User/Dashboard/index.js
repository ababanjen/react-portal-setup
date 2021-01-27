import React from "react";
import { withSelector } from "@hoc";
import { useSelector } from "react-redux";
const DashboardPage = ({ ...props }) => {
  const { users } = useSelector((state) => {
    return {
      users: state.userLayout.users,
    };
  });
  return <>Welcome to your Dashboard</>;
};

export default withSelector(DashboardPage);
