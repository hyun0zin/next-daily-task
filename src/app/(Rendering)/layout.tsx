import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex items-center justify-center">
      <div className="p-4 m-4 selection:border-solid border-4 border-indigo-600 ... rounded-3xl w-1/2 ">
        {children}
      </div>
    </section>
  );
}

export default layout;
