import React from "react";

import { Button } from "antd";

export default function Demo() {

  const [count, setCount] = React.useState(0);


  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <Button onClick={handleClick}>click me {count} times</Button>
    </>
  );
}
