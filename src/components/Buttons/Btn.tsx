import { Flex, Stack, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import CLIPARTS from "../../assets/clipart";
import { brandColors } from "../../theme/app.theme";

const Btn = ({ children ,
  cta,
  color,
  fontSize,
  px,
  isDisable= false

}: { children: ReactNode ,
  cta?:  any;
  color?:string;
  fontSize?: string;
  px?:string| number;
  isDisable?: boolean

}) => {
  const [hover, setHover] = useState(false)
  return (
    <Stack pos={"relative"}
    cursor={"pointer"}

    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    opacity={isDisable? .5:1}

    onClick={()=>{isDisable ? null: cta()}}
    >
      <Flex
        gap={0}
        cursor={"pointer"}

        position={"absolute"}
         w={"100%"}
         left={hover?"-2px":0}
         top={hover?"-3px":0}
        //  right={-2}
         zIndex={10}
         transition={"all .3s"}
       
      >
        <CLIPARTS.BoxLeftFill h="100%" w="13px"  fill={color}/>

        <Stack
          px={px ?? "12px"}
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

      <Flex gap={0} w={"99%"}
      
      >
        <CLIPARTS.BoxLeftFill h="100%" w="13px"  fill={ brandColors.stroke}/>

        <Stack
          px={px ?? "12px"}
          w={"100%"}
          borderY={`4px solid ${brandColors.stroke}`}
          h={"auto"}
          align={"center"}
          justify={"center"}
          bg={   brandColors.stroke}
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
        <CLIPARTS.BoxRightFill h="100%" w="13px" fill={ brandColors.stroke} />
      </Flex>
    </Stack>
  );
};

export default Btn;
