import React, { useState, useEffect } from "react";
import { Address, AddressInput, Contract, Meta, Footer, HomeFaq } from "../components";
import { List, Card, Button } from "antd";
import { useContractReader } from "eth-hooks";
import { useEventListener } from "eth-hooks/events";
import { Web3Consumer } from "../helpers/Web3Context";
import Head from "next/head";
import { Collapse } from "antd";
import useSWR from "swr";

const { Panel } = Collapse;

const usefulLinks = [
  {
    text: "🏠 Whole Collective Telegram",
    url: "https://t.me/joinchat/Qt4WsU6Rrjk5ODlh",
  },
  {
    text: "🤝 Recent Arrivals Telegram",
    url: "https://t.me/+xF1gUECfMDE5Y2Mx",
  },
  {
    text: "😎 Moonshot Collective Notion",
    url: "https://gitcoin.notion.site/Moonshot-Collective-e8a5bbb2b6f3494db109849d159e1b51",
  },
];

async function fetcher(...arg) {
  const res = await fetch(...arg);
  console.log("VIEW FETCH ", res);
  return res.json();
}

function Home({ web3 }) {
  const { data, error } = useSWR("/api/github_active_projects", fetcher);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">🚀🌙 First Issues Board</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              This is a resource to find tasks to explore at the Moonshot Collective
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Contribution Guidelines</h2>
                <ul className="list-disc p-2 text-justify">
                  <li>Fork the Project Repository</li>
                  <li>Find an issue with the label Good First Issue</li>
                  <li>Push a Pull Request to the Forked Repository</li>
                </ul>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Projects with Good First Issues</h2>
                <ul className="leading-relaxed text-base text-justify">
                  {data &&
                    data.issues.map((item, i) => (
                      <li key={`${item}_${i}`}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.project_url}
                          className="text-indigo-500 inline-flex text-left md:mb-2 lg:mb-0"
                        >
                          {item.project_name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Useful Links</h2>
                <ul className="leading-relaxed text-base text-justify">
                  {usefulLinks.map((item, i) => (
                    <li key={`${item.text}_${i}`}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.url}
                        className="text-indigo-500 inline-flex text-left md:mb-2 lg:mb-0"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeFaq />
      <Footer />
    </div>
  );
}

export default Web3Consumer(Home);
