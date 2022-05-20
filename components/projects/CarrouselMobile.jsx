import React from "react";
import { Img, Stack, Link, Text, Button, useColorModeValue } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import ChakraCarousel from "../ui/carrousel";

function CarrouselMobile({ projects }) {
  const backgroundCard = useColorModeValue("white", "hsl(240deg 51% 57% / 61%)");
  const borderCard = useColorModeValue("1.3px solid #0373d8", "none");
  const borderMiniCard = useColorModeValue("1px solid hsl(240deg 82% 54%)", "1px solid #04b6ff");
  const colorMiniCard = useColorModeValue("#0373d8", "#82d5f7");

  return (
    <ChakraCarousel gap={32}>
      {projects.map((project, index) => (
        <Stack
          key={index}
          borderRadius="10px"
          bg={backgroundCard}
          border={borderCard}
          w="450px"
          maxW="100%"
          transition="all .3s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
          transform="scale(1)"
        >
          <Stack position="relative">
            <Img src={project.img} alt="img" borderRadius="12px" p={2} height={160} w="100%" objectFit="cover" />
            <Stack position="absolute" w="100%" h="100%" direction="row" alignItems="center" justifyContent="center" gap={2}>
              <Link href={project.urlRepo} target="_blank" _hover={{ outline: "none" }}>
                <Button backgroundColor="#0b5184" color="white" _hover={{ backgroundColor: "#22699d", color: "#afd7fb" }}>
                  <Text fontSize=".8rem" marginRight={1}>
                    Github
                  </Text>
                  <BsGithub size={15} />
                </Button>
              </Link>
              <Link href={project.urlDeploy} target="_blank" _hover={{ outline: "none" }}>
                <Button backgroundColor="#0b5184" color="white" _hover={{ backgroundColor: "#22699d", color: "#afd7fb" }}>
                  <Text fontSize=".8rem" marginRight={1}>
                    Web
                  </Text>
                  <FiExternalLink size={15} />
                </Button>
              </Link>
            </Stack>
          </Stack>
          <Stack p={2} gap={3} minH={120}>
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
        </Stack>
      ))}
    </ChakraCarousel>
  );
}

export default CarrouselMobile;
