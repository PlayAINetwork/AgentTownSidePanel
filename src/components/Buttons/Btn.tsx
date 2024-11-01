import { Flex, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import CLIPARTS from "../../assets/clipart";
import { brandColors } from "../../theme/app.theme";

const Btn = ({ children ,
  cta,
  color,
  fontSize,
  px,

}: { children: ReactNode ,
  cta?: () => void;
  color?:string;
  fontSize?: string;
  px?:string| number;

}) => {
  return (
    <Stack pos={"relative"}
    cursor={"pointer"}
    
    onClick={cta}
    >
      <Flex
        gap={0}
        cursor={"pointer"}
        position={"absolute"}
        w={"100%"}
        left={"2px"}
        bottom={"-3px"}
        // right={-2}
        zIndex={-10}
      >
        <CLIPARTS.BoxLeftFill h="100%" w="13px"  fill={color}/>

        <Stack
          px={px ?? 4}
          w={"100%"}
          borderY={`4px solid ${brandColors.stroke}`}
          h={"auto"}
          align={"center"}
          justify={"center"}
          bg={ color ?? brandColors.secondary}
        >
          {
            <Text
              fontWeight={800}
              css={{ textTransform: "uppercase" }}
              fontSize={fontSize??".9rem"}
              color={brandColors.white}
            >
              {" "}
              {children}
            </Text>
          }
        </Stack>
        <CLIPARTS.BoxRightFill h="100%" w="13px" fill={color} />
      </Flex>

      <Flex gap={0} w={"99%"}>
        <CLIPARTS.BoxLeftFill h="100%" w="13px"  fill={color}/>

        <Stack
          px={px ?? 4}
          w={"100%"}
          borderY={`4px solid ${brandColors.stroke}`}
          h={"auto"}
          align={"center"}
          justify={"center"}
          bg={ color ?? brandColors.secondary}
        >
          {
            <Text
              fontWeight={800}
              css={{ textTransform: "uppercase" }}
              fontSize={fontSize??".9rem"}
              color={brandColors.white}
            >
              {" "}
              {children}
            </Text>
          }
        </Stack>
        <CLIPARTS.BoxRightFill h="100%" w="13px" fill={color} />
      </Flex>
    </Stack>
  );
};

export default Btn;
