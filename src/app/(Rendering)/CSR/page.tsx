"use client";

import { RandomCat } from "@/types/RandomCat";
import React, { useEffect, useState } from "react";

function CSRPage() {
  const [cat, setCat] = useState<RandomCat | null>(null);

  useEffect(() => {
    const fetchCat = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const data = await response.json();
      setCat(data);
    };
    fetchCat();
  }, []);

  if (!cat) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="bg-indigo-100 ... w-48">CSR 페이지 렌더링입니다.</h1>
      <br />
      <div>
        <p>fact : {cat.fact}</p>
        <p>length : {cat.length}</p>
      </div>
    </div>
  );
}

export default CSRPage;
