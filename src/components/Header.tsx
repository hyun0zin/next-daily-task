import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div
      className="p-4 h-24 flex flex-col
    justify-center items-center bg-indigo-100"
    >
      <Link href="/" className="text-3xl p-2 w-max">
        HEADER
      </Link>
    </div>
  );
}

export default Header;
