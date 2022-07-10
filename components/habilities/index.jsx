import React from "react";
import { Box, Grid, GridItem, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Context } from "../../provider/Provider.js";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useTranslation } from "next-i18next";
import habilities from "./langs.js";

function Habilities() {
  const { setCurrentTarget } = React.useContext(Context);
  const { t } = useTranslation("habilities");
  const { ref, inView } = useInView({
    threshold: 0.2,
    trackVisibility: true,
    delay: 100,
  });
  const animation = useAnimation();
  const colorSubtitle = useColorModeValue("blackAlpha.900", "gray.200");
  const colorTitle = useColorModeValue("#1775cc", "#afd7fb");
  const bgCard = useColorModeValue("#dee6ff", "#25315a");
  const colorCard = useColorModeValue("#00507e", "blue.100");

  React.useEffect(() => {
    animation.start({ y: 0, opacity: 0 });
  }, []);

  React.useEffect(() => {
    if (inView) {
      setCurrentTarget(3);
      animation.start({
        y: 20,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  }, [inView, animation, setCurrentTarget]);

  return (
    <motion.div animate={animation}>
      <Stack h={{ base: "150vh", lg: "100vh" }} id="Habilidades" ref={ref} gap={6}>
        <Stack textAlign="center">
          <Text fontSize="1rem" letterSpacing=".5px" color={colorSubtitle}>
            {t("subtitle")}
          </Text>
          <Text fontSize="1.33rem" letterSpacing=".6px" color={colorTitle} margin="0 !important">
            {t("title")}
          </Text>
        </Stack>
        <Stack w="100%" h="100%" paddingTop={10}>
          <Stack direction="row" flexFlow="row wrap" justifyContent="center" alignItems="center" gap={{ base: 6, md: 4 }}>
            {habilities.map((habilitie, index) => (
              <Stack
                key={index}
                bg={bgCard}
                borderRadius={6}
                p={6}
                minH={{ base: 220, lg: 350 }}
                w="280px"
                maxW="100%"
                justifyContent="center"
                alignItems="center"
                gap={8}
                boxShadow="rgb(0 0 0 / 20%) 0px 2px 4px 2px"
                margin="0 !important"
              >
                <Text fontSize="lg" color={colorCard} display="flex" direction="row" alignItems="center" gap={2}>
                  {habilitie.title}
                  <Box as="span" color={colorCard}>
                    {habilitie.icon}
                  </Box>
                </Text>
                <Stack minH={150}>
                  <Grid templateColumns="repeat(2, minmax(110px, 130px))" gap={4}>
                    {habilitie.technologies.map((tech, index) => (
                      <GridItem as={Stack} key={index} alignItems="center" direction="row" gap={2}>
                        <Box color="blue.300">
                          <BsFillPatchCheckFill />
                        </Box>
                        <Stack alignItems="center">
                          <Text fontSize="sm"> {tech}</Text>
                        </Stack>
                      </GridItem>
                    ))}
                  </Grid>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
}

export default Habilities;
