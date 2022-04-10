import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavBar() {
  return (
    <nav className="navBar">
      <div className="container">
        <div className="home">
          <Link href="/" passHref>
            <FontAwesomeIcon icon={["fa", "house"]} size="2x" color="white" />
          </Link>
        </div>
        <Link href="/posts" passHref>
          <button type="button" className="allPosts">
            All posts
          </button>
        </Link>
      </div>
    </nav>
  );
}
