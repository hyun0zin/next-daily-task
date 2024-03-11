import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav>
      <Link className="m-4" href="/SSG">
        SSG
      </Link>
      <Link className="m-4" href="/ISR">
        ISR
      </Link>
      <Link className="m-4" href="/SSR">
        SSR
      </Link>
      <Link className="m-4" href="/CSR">
        CSR
      </Link>
    </nav>
  );
}

export default Nav;
