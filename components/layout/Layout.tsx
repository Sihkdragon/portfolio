import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen bg-cyan-900 py-8">
      <section className="container h-[90vh] bg-white ">{children}</section>
    </main>
  );
};

export default Layout;
