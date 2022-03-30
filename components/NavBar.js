import React from "react";
import Link from "next/link";

export function NavBar() {
  return (
    <nav className="navBar">
      <div className="container">
        <Link href="/">
          <a className="title">Erick Castro</a>
        </Link>

        <ul>
          <li>
            <Link href="/posts">
              <a>All posts</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
