import React from "react";

import { Button } from "antd";

import Link from "next/link";

import Router from "next/router";

const IndexPage = () => {
  function handleClick() {
    Router.push({
      pathname: "/second/demo",
      query: { id: 2 },
    });
  }

  return (
    <>
      <div>
        <Link href="/demo?id=1">
          <Button>antd button</Button>
        </Link>
        <br />
        <Button onClick={handleClick}>next/router button</Button>
      </div>
    </>
  );
};

export default IndexPage;
