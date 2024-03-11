import SSG from "@/components/rendering/SSG";
import React from "react";

function SSGPage() {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="bg-indigo-100 ... w-48">SSG 페이지 렌더링입니다.</h1>
      <br />
      <SSG />
    </div>
  );
}

export default SSGPage;
