"use client";

import React, { useEffect, useState } from "react";
import type { RandomCat } from "@/types/RandomCat";

const CSR = () => {
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
    <div>
      <p>fact : {cat.fact}</p>
      <p>length : {cat.length}</p>
    </div>
  );
};

export default CSR;
