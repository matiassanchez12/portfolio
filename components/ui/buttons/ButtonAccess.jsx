import React from "react";
import { Link as LinkChakra, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

function ButtonAccess({ children, isTarget, name, title }) {
  return (
    <>
      {isTarget ? (
        <LinkChakra as={Link} to={name} display="flex" color="gray.200" zIndex={20} justifyContent="center">
          <Text
            fontSize={{ base: ".625rem", md: ".610rem" }}
            position="absolute"
            transition=".4s"
            fontWeight={500}
            opacity={1}
            transform="translateY(28px)"
          >
            {title}
          </Text>
          {children}
        </LinkChakra>
      ) : (
        <LinkChakra as={Link} to={name} display="flex">
          <Text
            fontSize={{ base: ".625rem", md: ".610rem" }}
            position="absolute"
            fontWeight={500}
            transition=".4s"
            transform="translateY(50px)"
            opacity={0}
            color="gray.200"
          >
            {title}
          </Text>
          {children}
        </LinkChakra>
      )}
    </>
  );
}

export default ButtonAccess;
