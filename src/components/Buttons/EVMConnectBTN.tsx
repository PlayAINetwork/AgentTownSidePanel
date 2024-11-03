import { Flex, Stack, Text } from '@chakra-ui/react';
import CLIPARTS from '../../assets/clipart';
import { brandColors } from '../../theme/app.theme';
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import { trimWords } from '../../lib/app.fun';
import { useState } from 'react';

const EVMConnectBTN = () => {
    const { open } = useAppKit();
    const { address  } = useAppKitAccount()
  const [hover, setHover] = useState(false)

  return (
    <Stack
    cursor={"pointer"}
    // border={"1.5px solid var(--primary)"}
    // borderRadius={"lg"}
    w={"full"}
    gap={0}
    position={"relative"}
    onClick={() => {
        open();
      }}

      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
  >
    {" "}
   
   
      
      <Flex gap={0}
       cursor={"pointer"}
       position={"absolute"}
       w={"99%"}
       left={hover?1:0}
       bottom={hover?-1:0}
       // right={-2}
       zIndex={-10}
      
      >
        <Stack>
          <CLIPARTS.BoxLeftFill h="100%" w="13px" />
        </Stack>
        <Stack
          px={4}
          w={"100%"}
          borderY={`4px solid ${brandColors.stroke}`}
          h={"auto"}
          align={"center"}
          justify={"center"}
          bg={brandColors.secondary}
        >
          {
            <Text
              fontWeight={800}
              css={{ textTransform: "uppercase" }}
              fontSize={".9rem"}
              color={brandColors.white}
            >
              {" "}
              {
        //       loginInitiated
        // ? "Connecting . . ."
        // : 
        address
        ? trimWords(address,6)
        : "Connect Wallet"}
            </Text>
          }
        </Stack>
        <CLIPARTS.BoxRightFill h="100%" w="13px" />
      </Flex>

   
      
      <Flex gap={0} w={"99%"}>
        <Stack>
          <CLIPARTS.BoxLeftFill h="100%" w="13px" />
        </Stack>
        <Stack
          px={4}
          w={"100%"}
          borderY={`4px solid ${brandColors.stroke}`}
          h={"auto"}
          align={"center"}
          justify={"center"}
          bg={brandColors.secondary}
        >
          {
            <Text
              fontWeight={800}
              css={{ textTransform: "uppercase" }}
              fontSize={".9rem"}
              color={brandColors.white}
            >
              {" "}
              { address
        ? trimWords(address,6)
        : "Connect Wallet"}
          
            </Text>
          }
        </Stack>
        <CLIPARTS.BoxRightFill h="100%" w="13px" />
      </Flex>
    </Stack>
  )
}

export default EVMConnectBTN