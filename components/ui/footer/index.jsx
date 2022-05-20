import React from "react";
import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
// #afd7fb
function Footer() {
  const color = useColorModeValue("#afd7fb", "#2a4365");
  const colorTxt = useColorModeValue("#013b79", "gray.300");
  const colorBg = useColorModeValue("white", "gray.700");

  return (
    <Box marginTop={{ base: 16, lg: 0 }} paddingTop={2}>
      <Box bottom={2} h="100%">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={color}
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Box>
      <Stack
        direction={{ base: "column-reverse", lg: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "center", lg: "end" }}
        bg={color}
        paddingInline="6rem"
        paddingBottom={{ base: 2, lg: 4 }}
        height={{ base: 180, lg: 100 }}
        w="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        gap={16}
      >
        <Stack flex={1} fontSize="0.78rem" justifyContent="end" alignItems={{ base: "center", lg: "start" }}>
          <Text margin="0 !important" w="160px" borderRadius={5} p={1} color={colorTxt} bg={colorBg} textAlign="center">
            Matias Sanchez © 2022
          </Text>
        </Stack>
        <Stack flex={1} direction="row" justifyContent={{ base: "center", lg: "end" }} alignItems="center">
          <Link
            _hover={{ color: "#7190ff" }}
            transition="all .4s ease-in-out"
            href="https://www.linkedin.com/in/matias-sanchez-454152182/"
            target="_blank"
          >
            <AiOutlineLinkedin size={25} />
          </Link>
          <Link
            _hover={{ color: "#7190ff" }}
            transition="all .4s ease-in-out"
            href="https://github.com/matiassanchez12"
            target="_blank"
          >
            <AiFillGithub size={25} />
          </Link>
          <Link
            _hover={{ color: "#7190ff" }}
            transition="all .4s ease-in-out"
            href="https://github.com/matiassanchez12"
            target="_blank"
          >
            <AiFillMail size={25} />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
