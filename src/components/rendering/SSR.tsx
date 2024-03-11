import React from "react";

const SSR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
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

export default SSR;
