import { Box } from "@chakra-ui/react";
import React from "react";

function Indicator({ index }) {
  const translate = `translateX(calc(63.4px * ${index}))`;
  return (
    <Box
      transform={translate}
      as="svg"
      position="absolute"
      left="13px"
      fill="hsl(240deg 100% 68%)"
      transition=".4s"
      bottom="0"
      width="94px"
      height="56px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="47" cy="28" rx="24" ry="28" />
      <path d="M24 20C24 20 28 55.9999 48 56L0 55.9997C18 55.9998 24 20 24 20Z" />
      <path d="M70 20C70 20 66 55.9999 46 56L94 55.9997C76 55.9998 70 20 70 20Z" />
    </Box>
  );
}

export default Indicator;
