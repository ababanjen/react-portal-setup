import React from "react";
import { withSelector } from "@hoc";
import { useSelector } from "react-redux";
const DashboardPage = ({ ...props }) => {
  const test = useSelector(state => {
    console.log({state});
    return {
      users: state.userLayout.users
    }
  })
  console.log({test});
  return <>Welcome to your Dashboard</>;
};

export default withSelector(DashboardPage);
