import ISR from "@/components/rendering/ISR";
import React from "react";

function ISRPage() {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="bg-indigo-100 ... w-48">ISR 페이지 렌더링입니다.</h1>
      <br />
      <ISR />
    </div>
  );
}

export default ISRPage;
