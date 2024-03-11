import React, { cache } from "react";
import type { RandomCat } from "@/types/RandomCat";

const SSG = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "force-cache",
  });
  const data = await response.json();
  // console.log(data);

  return (
    <div>
      <p>fact : {data.fact}</p>
      <p>length : {data.length}</p>
    </div>
  );
};

export default SSG;
