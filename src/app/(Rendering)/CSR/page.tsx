import CSR from "@/components/rendering/CSR";
import React from "react";

function CSRPage() {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="bg-indigo-100 ... w-48">CSR 페이지 렌더링입니다.</h1>
      <br />
      <CSR />
    </div>
  );
}

export default CSRPage;
