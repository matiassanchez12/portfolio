import React from "react";
import Form from "../ui/form/Form";
import { Stack, Text, Tooltip, useToast, useColorModeValue } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Context } from "../../provider/Provider.js";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "next-i18next";

function Contact() {
  const { setCurrentTarget } = React.useContext(Context);
  const { t } = useTranslation("contact");
  const { ref, inView } = useInView({
    threshold: 0.2,
    trackVisibility: true,
    delay: 200,
  });
  const animation = useAnimation();
  const toast = useToast();
  const colorSubtitle = useColorModeValue("blackAlpha.900", "gray.200");
  const colorTitle = useColorModeValue("#1775cc", "#afd7fb");
  const colorCard = useColorModeValue("#131a31", "gray.300");
  const bgCard = useColorModeValue("#d4d9f7", "#25315a");

  // #d4d9f7
  React.useEffect(() => {
    if (inView) {
      setCurrentTarget(4);
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

  const handleClick = () => {
    navigator.clipboard.writeText("matias.sanchez.0097@gmail.com");
    toast({
      title: t("message-copy"),
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <motion.div animate={animation}>
      <Stack h={{ base: "100vh", lg: "65vh" }} id="Contacto" gap={6} ref={ref} paddingTop={6}>
        <Stack textAlign="center">
          <Text fontSize="1rem" letterSpacing=".5px" color={colorSubtitle}>
            {t("subtitle")}
          </Text>
          <Text fontSize="1.33rem" letterSpacing=".6px" color={colorTitle} margin="0 !important">
            {t("title")}
          </Text>
        </Stack>
        <Stack flex={1} direction="row" justifyContent="center" gap={6} flexFlow="row wrap">
          <Stack gap={1} direction={{ base: "row", lg: "column" }}>
            <Stack borderRadius={5} bg={bgCard} direction="row" alignItems="center" p={3} gap={3}>
              <FaMapMarkerAlt size={20} />
              <Stack>
                <Text fontSize="0.8rem">{t("address")}</Text>
                <Text fontSize="0.7rem" color={colorCard} fontWeight={400}>
                  Buenos Aires, Argentina
                </Text>
              </Stack>
            </Stack>
            <Stack borderRadius={5} bg={bgCard} direction="row" alignItems="center" p={3} gap={3}>
              <MdEmail size={20} />
              <Stack>
                <Text fontSize="0.8rem">Email</Text>
                <Tooltip hasArrow label="Copy" fontSize=".7rem" bg="gray.300" color="black">
                  <Text
                    fontSize="0.7rem"
                    color={colorCard}
                    transition="all .3s ease-in-out"
                    fontWeight={400}
                    _hover={{ cursor: "pointer", color: "gray.400" }}
                    onClick={handleClick}
                  >
                    matias.sanchez.0097@gmail.com
                  </Text>
                </Tooltip>
              </Stack>
            </Stack>
          </Stack>
          <Form />
        </Stack>
      </Stack>
    </motion.div>
  );
}

export default Contact;
