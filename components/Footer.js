import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer>
      <div className="Container">
        <hr />
        <p>Contact me</p>
        <div className="Buttons">
          <a
            href="https://www.linkedin.com/in/erick-felipe-141311215/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x" />
          </a>
          <a
            href="https://github.com/erickfelip"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} size="1x" />
          </a>
          <a href="https://t.me/Erickfelipe44" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={["fab", "telegram"]} size="1x" />
          </a>
        </div>
      </div>
    </footer>
  );
}
