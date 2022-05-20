import React from "react";
import { Stack } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineFileText } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import ButtonAccess from "../buttons/ButtonAccess";
import Indicator from "../buttons/Indicator";
import { Context } from "../../../provider/Provider.js";
import { useTranslation } from "next-i18next";

function Nav() {
  const { currentTarget } = React.useContext(Context);
  const { t } = useTranslation("common");

  return (
    <Stack
      direction="row"
      bg="rgb(199 181 255 / 13%)"
      overflow="hidden"
      p="1.5rem .5rem"
      w="388px"
      h="68px"
      backdropFilter="blur(15px)"
      maxW="100%"
      boxShadow="0 8px 32px hsla(231, 44%, 45%, .2)"
      borderRadius={6}
      gap="2rem"
      justifyContent="center"
      position="fixed"
      transform={{ base: "scale(0.8)", md: "scale(0.9)", lg: "scale(1.1)" }}
      margin="auto"
      bottom="1.6rem"
      left="0"
      right={0}
      zIndex={20}
    >
      <ButtonAccess isTarget={currentTarget === 0} title={t("home")} name="Inicio">
        <AiOutlineHome size="1.5rem" />
      </ButtonAccess>
      <ButtonAccess isTarget={currentTarget === 1} title={t("about")} name="Sobre mí">
        <AiOutlineUser size="1.5rem" />
      </ButtonAccess>
      <ButtonAccess isTarget={currentTarget === 2} title={t("projects")} name="Proyectos">
        <BsBook size="1.5rem" />
      </ButtonAccess>
      <ButtonAccess isTarget={currentTarget === 3} title={t("habilities")} name="Habilidades">
        <AiOutlineBook size="1.5rem" />
      </ButtonAccess>
      <ButtonAccess isTarget={currentTarget === 4} title={t("contact")} name="Contacto">
        <AiOutlineFileText size="1.5rem" />
      </ButtonAccess>
      <Indicator index={currentTarget} />
    </Stack>
  );
}

export default Nav;
