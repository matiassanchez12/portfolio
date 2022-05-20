import React from "react";
import { Button, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Context } from "../../provider/Provider.js";
import { Link } from "react-scroll";
import { useTranslation } from "next-i18next";

function About() {
  const { setCurrentTarget } = React.useContext(Context);
  const { t } = useTranslation("about");
  const { ref, inView } = useInView({
    threshold: 0.2,
    trackVisibility: true,
    delay: 200,
  });
  const animation = useAnimation();
  const colorSubtitle = useColorModeValue("blackAlpha.900", "gray.200");
  const colorTitle = useColorModeValue("#1775cc", "#afd7fb");
  const backgroundBtn = useColorModeValue("hsl(240deg 100% 68%)");
  const colorBtn = useColorModeValue("#5252ff", "hsl(231, 69%, 90%)");

  React.useEffect(() => {
    if (inView) {
      setCurrentTarget(1);
      animation.start({
        y: 20,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) animation.start({ y: 0, opacity: 0 });
  }, [inView, animation, setCurrentTarget]);

  return (
    <motion.div animate={animation}>
      <Stack h="120vh" id="Sobre mí" ref={ref} gap={8} mt={16}>
        <Stack textAlign="center">
          <Text fontSize="1rem" letterSpacing=".5px" color={colorSubtitle}>
            {t("subtitle")}
          </Text>
          <Text fontSize="1.33rem" letterSpacing=".6px" color={colorTitle} margin="0 !important">
            {t("title")}
          </Text>
        </Stack>
        <Stack
          flex={1}
          justifyContent="center"
          direction={{ base: "column", lg: "row" }}
          marginTop={{ base: 0, lg: "4rem !important" }}
          gap={4}
        >
          <Stack flex={{ base: 0, lg: 1 }} alignItems="center">
            <Image
              src="/undraw_designer_re_5v95.svg"
              alt="img-programmer"
              width={{ base: 150, lg: 200 }}
              h={{ base: 150, lg: 200 }}
              zIndex={2}
            />
          </Stack>
          <Stack flex={2} gap={4} textAlign={{ base: "center", lg: "justify" }} alignItems="center">
            <Text fontSize={{ base: ".9rem", lg: "1rem" }} lineHeight={1.7} maxW={650} letterSpacing={1.2}>
              {t("content-1")}
              <br />
              {t("content-2")}
            </Text>
            <Stack alignItems={{ base: "center", lg: "start" }} w="full">
              <Button
                as={Link}
                to="Contacto"
                bg="hsl(240deg 100% 63%)"
                _hover={{ bg: "hsl(240deg 100% 66%)" }}
                cursor="pointer"
                w={40}
                variant="solid"
                color="gray.200"
                fontSize=".9rem"
              >
                {t("btn")}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
}

export default About;
