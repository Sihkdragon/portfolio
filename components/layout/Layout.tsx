import React from "react";

const Layout = ({ children }: React.ReactNode) => {
  return <main className="container">{children}</main>;
};

export default Layout;
