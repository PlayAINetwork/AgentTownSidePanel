import { Box, Text, VStack } from "@chakra-ui/react";

const ErrorBoundary = () => {
    return (
        <Box
            position={"relative"}
            w="100vw"
            h="100vh"
            backgroundColor={"brand.white"}
        >
            <VStack
                position={"absolute"}
                inset={"0"}
                margin="auto"
                boxSize={"fit-content"}
                padding="1rem 0.75rem"
                rounded={".75rem"}
                bg="brand.bg"
                minW={"max(30%,fit-content)"}
            >
                <Text>Oops</Text>
                <Text>Wrong turn</Text>
            </VStack>
        </Box>
    );
};

export default ErrorBoundary;
