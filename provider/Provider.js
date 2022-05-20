import React from "react";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";

const Context = React.createContext({ currentTarget: 0, setCurrentTarget: () => {} });

const Provider = ({ children }) => {
  const [currentTarget, setCurrentTarget] = React.useState(0);

  return (
    <Context.Provider value={{ currentTarget, setCurrentTarget }}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </Context.Provider>
  );
};

export { Context };

export default Provider;
