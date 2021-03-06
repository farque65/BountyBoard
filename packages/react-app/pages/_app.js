import "../styles/global.css";
import "antd/dist/antd.css";
import React, { useEffect, useRef } from "react";
import { Web3Provider } from "../helpers/Web3Context";
import { Header } from "../components";
import { DevUI, Account } from "../components";
import { Menu, Affix } from "antd";
import Link from "next/link";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

const targetNetwork = "localhost";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const prevTheme = useRef("light");

  const themes = {
    dark: `/css/dark-theme.css`,
    light: `/css/light-theme.css`,
  };

  useEffect(() => {
    prevTheme.current = window.localStorage.getItem("theme");
  }, []);

  const StyledMenu = styled(Menu)`
    height: 100%;
    border-width: 0px;
  `;

  return (
    <Web3Provider network={targetNetwork}>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme.current}>
        <Header />
        {/* <DevUI /> */}

        <Affix>
          <Menu style={{ textAlign: "left", padding: 10 }} selectedKeys={[router.asPath]} mode="horizontal">
            <Menu.Item key="/">
              <Link href="/">
                <a>Home</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/issues">
              <Link href="/issues">
                <a>Dev Issues</a>
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="/issues">
                <Link href="/issues">
                  <a>Design Issues</a>
                </Link>
              </Menu.Item> */}
            {/* <Menu.Item key="/yourcollectibles">
                <Link href="/yourcollectibles">
                  <a>YourCollectibles</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="/transfers">
                <Link href="/transfers">
                  <a>Transfers</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="/ipfsup">
                <Link href="/ipfsup">
                  <a>IPFS Upload</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="/ipfsdown">
                <Link href="/ipfsdown">
                  <a>IPFS Download</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="/debugcontracts">
                <Link href="/debugcontracts">
                  <a>Debug Contracts</a>
                </Link>
              </Menu.Item> */}
          </Menu>
          <div style={{ textAlign: "right", right: 0, top: 0, padding: 10 }}>
            <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
              <DevUI />
            </div>
          </div>
        </Affix>

        <Component {...pageProps} />
      </ThemeSwitcherProvider>
    </Web3Provider>
  );
}

export default MyApp;
