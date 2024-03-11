import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className=" p-4 border-b-2 ">
      <Link className="m-4 text-xl" href="/SSG">
        SSG
      </Link>
      <Link className="m-4 text-xl" href="/ISR">
        ISR
      </Link>
      <Link className="m-4 text-xl" href="/SSR">
        SSR
      </Link>
      <Link className="m-4 text-xl" href="/CSR">
        CSR
      </Link>
    </nav>
  );
}

export default Nav;
