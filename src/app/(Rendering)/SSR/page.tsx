import SSR from "@/components/rendering/SSR";
import React from "react";

function SSRPage() {
  return (
    <div>
      <h1>SSR 페이지 렌더링입니다.</h1>
      <SSR />
    </div>
  );
}

export default SSRPage;
