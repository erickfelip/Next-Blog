import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer>
      <div className="Container">
        <hr />
        <p>Contact me</p>
        <div className="Buttons">
          <Link
            href="https://www.linkedin.com/in/erick-felipe-141311215/"
            passHref
          >
            <a>
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </a>
          </Link>
          <Link href="https://github.com/erickfelip" passHref>
            <a>
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
          </Link>
          <Link href="https://t.me/Erickfelipe44" passHref>
            <a>
              <FontAwesomeIcon icon={["fab", "telegram"]} size="2x" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
