import SSR from "@/components/rendering/SSR";
import React from "react";

function SSRPage() {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="bg-indigo-100 ... w-48">SSR 페이지 렌더링입니다.</h1>
      <br />
      <SSR />
    </div>
  );
}

export default SSRPage;
