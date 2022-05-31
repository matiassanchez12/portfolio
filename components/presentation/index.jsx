import React from "react";
import {
  Avatar,
  Box,
  Button,
  Image,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineLinkedin, AiFillGithub, AiOutlineDownload } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Context } from "../../provider/Provider.js";
import { useTranslation } from "next-i18next";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function Presentation() {
  const { setCurrentTarget } = React.useContext(Context);
  const { t, i18n } = useTranslation("presentation");
  const { colorMode, toggleColorMode } = useColorMode();
  const [language, setLanguage] = React.useState("es");
  const color = useColorModeValue("hsl(231, 71%, 51%)", "hsl(231, 69%, 80%)");

  const { ref, inView } = useInView({
    threshold: 0.2,
    trackVisibility: true,
    delay: 200,
  });
  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      setCurrentTarget(0);
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: -40,
        opacity: 0,
      });
    }
  }, [inView, animation, setCurrentTarget]);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <motion.div ref={ref} layout animate={animation} exit={{ opacity: 0 }} initial={{ y: -40, opacity: 0 }}>
      <Stack h="100vh" justifyContent="start" id="Inicio">
        <Stack justifyContent="end" direction="row" position="relative" top={4}>
          <Button w="60px" onClick={toggleColorMode} _focus={{ boxShadow: "none" }}>
            {colorMode === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
          </Button>
          <Menu>
            <MenuButton width="60px" as={Button} _focus={{ boxShadow: "none" }}>
              <Image boxsize="2rem" borderRadius="full" src={`/${language}.svg`} alt="selected" mr="12px" />
            </MenuButton>
            <MenuList minW="60px" width="60px">
              <MenuItem minH="48px" onClick={() => handleChangeLanguage("es")}>
                <Image boxsize="2rem" borderRadius="full" src="/es.svg" alt="es" mr="12px" />
              </MenuItem>
              <MenuItem minH="48px" onClick={() => handleChangeLanguage("en")}>
                <Image boxsize="2rem" borderRadius="full" src="/en.svg" alt="en" mr="12px" />
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
        <Stack justifyContent="center" minH={500} gap={4}>
          <Stack alignItems="center">
            <Box>
              <Avatar
                backgroundColor="transparent"
                p={1}
                border="2px solid #007eeb"
                boxSizing="content-box"
                size="2xl"
                src="/00.jpeg"
              />
            </Box>
          </Stack>
          <Stack alignItems="center" gap={4}>
            <Stack textAlign="center">
              <Text fontSize={{ base: "1.3rem", lg: "1.6rem" }} fontWeight="500" marginTop="0 !important">
                Matias Sanchez
              </Text>
              <Text fontSize={{ base: "1rem", lg: "1.1rem" }} color={color} margin="0 !important">
                {t("role")}
              </Text>
            </Stack>
            <Stack direction="row">
              <ChakraLink
                _hover={{ color: "#7190ff" }}
                transition="all .4s ease-in-out"
                href="https://www.linkedin.com/in/matias-sanchez-454152182/"
                target="_blank"
              >
                <AiOutlineLinkedin size={25} />
              </ChakraLink>
              <ChakraLink
                _hover={{ color: "#7190ff" }}
                transition="all .4s ease-in-out"
                href="https://github.com/matiassanchez12"
                target="_blank"
              >
                <AiFillGithub size={25} />
              </ChakraLink>
            </Stack>
          </Stack>
          <Stack alignItems="center">
            <ChakraLink textDecoration="none" _hover={{ textDecoration: "none" }} href="/Matias-Sanchez-Developer.pdf" target="_blank">
              <Button>
                <Text fontSize="smaller" marginRight={2}>
                  {t("download")}
                </Text>
                <AiOutlineDownload />
              </Button>
            </ChakraLink>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
}

export default Presentation;
