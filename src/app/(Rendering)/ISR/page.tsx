import React from "react";

async function ISRPage() {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 10,
    },
  });
  const data = await response.json();

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="bg-indigo-100 ... w-48">ISR 페이지 렌더링입니다.</h1>
      <br />
      <div>
        <p>fact : {data.fact}</p>
        <p>length : {data.length}</p>
      </div>
    </div>
  );
}

export default ISRPage;
