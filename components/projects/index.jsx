import React from "react";
import { Grid, GridItem, Img, Stack, Text, Link, useMediaQuery, useColorModeValue, Button } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Context } from "../../provider/Provider.js";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import CarrouselMobile from "./CarrouselMobile";
import { projects } from "./projects";
import { useTranslation } from "next-i18next";

function Projects() {
  const { setCurrentTarget } = React.useContext(Context);
  const { t } = useTranslation("projects");
  const { ref, inView } = useInView({
    threshold: 0.2,
    trackVisibility: true,
    delay: 200,
  });
  const animation = useAnimation();
  const [isMobile] = useMediaQuery("(max-width: 56em)");
  const colorSubtitle = useColorModeValue("blackAlpha.900", "gray.200");
  const colorTitle = useColorModeValue("#1775cc", "#afd7fb");
  const backgroundCard = useColorModeValue("white", "hsl(240deg 51% 57% / 61%)");
  const borderCard = useColorModeValue("1.3px solid #0373d8", "none");
  const borderMiniCard = useColorModeValue("1px solid hsl(240deg 82% 54%)", "1px solid #04b6ff");
  const colorMiniCard = useColorModeValue("#0373d8", "#82d5f7");

  React.useEffect(() => {
    if (inView) {
      setCurrentTarget(2);
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
      <Stack h={{ base: "80vh", lg: "125vh" }} id="Proyectos" ref={ref} gap={8} marginBottom={10}>
        <Stack textAlign="center">
          <Text fontSize="1rem" letterSpacing=".5px" color={colorSubtitle}>
            {t("subtitle")}
          </Text>
          <Text fontSize="1.33rem" letterSpacing=".6px" color={colorTitle} margin="0 !important">
            {t("title")}
          </Text>
        </Stack>
        <Stack flex={1} flexDirection={{ base: "column", xl: "row" }} gap={4}>
          {isMobile ? (
            <CarrouselMobile projects={projects} />
          ) : (
            <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" templateRows="repeat(auto-fit, 300px)" w="100%" gap={6}>
              {projects.map((project, index) => (
                <GridItem
                  key={index}
                  borderRadius="10px"
                  bg={backgroundCard}
                  border={borderCard}
                  transition="all .3s ease-in-out"
                  _hover={{ transform: "scale(1.05)" }}
                  transform="scale(1)"
                >
                  <Stack position="relative">
                    <Img src={project.img} alt="img" borderRadius="12px" p={2} height={170} w="100%" objectFit="cover" />
                    <Stack position="absolute" w="100%" h="100%" direction="row" alignItems="center" justifyContent="center" gap={2}>
                      <Link href={project.urlRepo} target="_blank" _hover={{ outline: "none" }}>
                        <Button
                          w="6.5rem"
                          backgroundColor="#0b5184"
                          color="white"
                          _hover={{ backgroundColor: "#22699d", color: "#afd7fb" }}
                        >
                          <Text fontSize=".8rem" marginRight={1}>
                            Github
                          </Text>
                          <BsGithub size={15} />
                        </Button>
                      </Link>
                      <Link href={project.urlDeploy} target="_blank" _hover={{ outline: "none" }}>
                        <Button
                          w="6.5rem"
                          backgroundColor="#0b5184"
                          color="white"
                          _hover={{ backgroundColor: "#22699d", color: "#afd7fb" }}
                        >
                          <Text fontSize=".8rem" marginRight={1}>
                            Web
                          </Text>
                          <FiExternalLink size={15} />
                        </Button>
                      </Link>
                    </Stack>
                  </Stack>
                  <Stack p={2} gap={3}>
                    <Text textAlign="center">{project.name}</Text>
                    <Stack direction="row" justifyContent="center" flexFlow="row wrap" gap={1}>
                      {project.technologies.map((tech, index) => (
                        <Stack
                          key={index}
                          justifyContent="center"
                          borderRadius={4}
                          fontSize={13}
                          p={1}
                          color={colorMiniCard}
                          h="24px"
                          border={borderMiniCard}
                        >
                          <Text>{tech}</Text>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </GridItem>
              ))}
            </Grid>
          )}
        </Stack>
      </Stack>
    </motion.div>
  );
}

export default Projects;
