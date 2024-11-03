import {   Flex, Stack, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { brandColors } from "../../theme/app.theme";
import CLIPARTS from "../../assets/clipart";

const TabBtn = ({
  children,
  cta,
  isActive,
}: {
  children: ReactNode;
  cta?: () => void;
  isActive: boolean;
}) => {
  const [hover, setHover] = useState(false)

  return (
    <Stack 
    
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    onClick={cta} cursor={"pointer"} position={"relative"}>
      <Flex
        gap={0}
        position={"absolute"}
        top={hover ? -1 : 0}
        left={hover ? -1.5 : 0}
      >
        <CLIPARTS.LeftSideBtn h="100%" w="10px" color={isActive ?brandColors.primary400: brandColors.primary200} />
        <Stack
          px={4}
          h={"auto"}
          align={"center"}
          justify={"center"}
          bg={isActive ?brandColors.primary400: brandColors.primary200}
        >
          {
            <Text
              color={isActive ? brandColors.text : brandColors.white}
              fontWeight={800}
              css={{ textTransform: "uppercase" }}
              fontSize={".9rem"}
            >
              {" "}
              {children}
            </Text>
          }
        </Stack>
        <CLIPARTS.RightSideBtn h="100%" w="10px" color={isActive ?brandColors.primary400: brandColors.primary200}/>
      </Flex>
      <Flex gap={0}>
        <CLIPARTS.LeftSideBtn h="100%" w="10px" color={brandColors.stroke} />
        <Stack
          px={4}
          h={"auto"}
          align={"center"}
          justify={"center"}
          bg={brandColors.stroke}
        >
          {
            <Text
              color={isActive ? brandColors.text : brandColors.white}
              fontWeight={700}
              css={{ textTransform: "uppercase" }}
              fontSize={".9rem"}
            >
              {" "}
              {children}
            </Text>
          }
        </Stack>
        <CLIPARTS.RightSideBtn color={brandColors.stroke} h="100%" w="10px" />
      </Flex>
    </Stack>

    //   <Button
    //   w={{ base: "100%", md: "auto" }}
    //   variant={"secondary"}
    //   borderRadius={"none"}
    //   background={"none"}
    //   border="none"
    //   onClick={cta}
    //   color={isActive ? brandColors.primary : brandColors.secondary}
    //   css={{ textTransform: "uppercase" }}
    //   fontSize={".9rem"}
    //   transition={".5s ease"}
    //   position={"relative"}
    // >
    //   {children}
    //   <Box
    //     background={isActive ? brandColors.primary : "none"}
    //     width={isActive ? "100%" : "0px"}
    //     pos={"absolute"}
    //     height={"2px"}
    //     bottom={0}
    //     transition={".2s ease"}
    //     left={0}
    //   />
    // </Button>
  );
};

export default TabBtn;
