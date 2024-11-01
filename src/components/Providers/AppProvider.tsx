import { ChakraProvider } from "@chakra-ui/react";
import useChakraTheme from "../../theme/app.theme";
import { AppContextProvider } from "../../contexts/app.context";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppContextProvider>
      <ChakraProvider theme={useChakraTheme().theme}>{children}</ChakraProvider>
    </AppContextProvider>
  );
};

export default AppProvider;
