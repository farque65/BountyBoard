import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://moonshotcollective.space/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img src="https://drive.google.com/uc?id=1HNe3l9ti91lWWM5dB8sjblh56O9lQ0qo" alt="Gitcoin Community Logo" />
        </a>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/joinchat/Qt4WsU6Rrjk5ODlh"
            className="ml-3 text-gray-500"
          >
            <img src="https://drive.google.com/uc?id=1PruXs4puIxgSxwleM4bejlSWU5LaAwVh" alt="Telegram Icon" />
          </a>
        </span>
      </div>
    </footer>
  );
}
