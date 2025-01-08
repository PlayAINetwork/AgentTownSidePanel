import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { assets } from "../../../assets";
import Btn from "../../Buttons/Btn";
import { useWallet } from "@solana/wallet-adapter-react";

const Drops = () => {
      const { connected } = useWallet();
    
  return (
    <Stack justify={"space-between"} h={"100%"}>
      <Stack gap={0} flex={1} h={"100%"}>
        <Flex w={"100%"} justify={"space-between"} alignItems={"center"}>
          <Flex gap={2}>
            <Stack position={"relative"}>
              <Image src={assets.ICONS.icon_Profile_gray} />
              <Stack
                position={"absolute"}
                w={"100%"}
                h={"100%"}
                display={"flex"}
                justify={"center"}
                alignItems={"center"}
              >
                <Text
                  fontFamily={"secondary"}
                  fontWeight={"400"}
                  fontSize={"lg"}
                  textTransform={"uppercase"}
                >
                  5m
                </Text>
              </Stack>
            </Stack>
            <Stack gap={0} justify={"center"}>
              <Text
                fontFamily={"secondary"}
                fontWeight={"500"}
                textTransform={"uppercase"}
                lineHeight={"100%"}
              >
                Drop 1:
              </Text>
              <Text fontFamily={"body"} fontWeight={"800"}>
                AgentRogue
              </Text>
            </Stack>
          </Flex>

          <Stack
            cursor={"pointer"}
            onClick={() => window.open("https://x.com/0xRogueAgent", "_black")}
          >
            <Image src={assets.ICONS.icon_x} />
          </Stack>
        </Flex>
        <Stack ml={"25px"} w={"4px"} h={"60px"} bg={"rgba(30, 52, 69, 1)"} />

        <Flex gap={2}>
          <Stack position={"relative"}>
            <Image src={assets.ICONS.icon_Profile_gray} />
            <Stack
              position={"absolute"}
              w={"100%"}
              h={"100%"}
              display={"flex"}
              justify={"center"}
              alignItems={"center"}
            >
              <Text
                fontFamily={"secondary"}
                fontWeight={"400"}
                fontSize={"lg"}
                textTransform={"uppercase"}
              >
                10m
              </Text>
            </Stack>
          </Stack>
          <Stack gap={0} justify={"center"} filter={"blur(8px)"}>
            <Text
              fontFamily={"secondary"}
              fontWeight={"500"}
              textTransform={"uppercase"}
              lineHeight={"100%"}
            >
              Drop 2:
            </Text>
            <Text fontFamily={"body"} fontWeight={"800"}>
              xxxx xx xxRRR
            </Text>
          </Stack>
        </Flex>
        <Stack ml={"25px"} w={"4px"} h={"60px"} bg={"rgba(30, 52, 69, 1)"} />

        <Flex gap={2}>
          <Stack position={"relative"}>
            <Image src={assets.ICONS.icon_Profile_gray} />
            <Stack
              position={"absolute"}
              w={"100%"}
              h={"100%"}
              display={"flex"}
              justify={"center"}
              alignItems={"center"}
            >
              <Text
                fontFamily={"secondary"}
                fontWeight={"400"}
                fontSize={"lg"}
                textTransform={"uppercase"}
              >
                15m
              </Text>
            </Stack>
          </Stack>
          <Stack gap={0} justify={"center"} filter={"blur(8px)"}>
            <Text
              fontFamily={"secondary"}
              fontWeight={"500"}
              textTransform={"uppercase"}
              lineHeight={"100%"}
            >
              Drop 3:
            </Text>
            <Text fontFamily={"body"} fontWeight={"800"}>
              xxxx xx xxRRR
            </Text>
          </Stack>
        </Flex>
        <Stack ml={"25px"} w={"4px"} h={"60px"} bg={"rgba(30, 52, 69, 1)"} />

        <Flex gap={2}>
          <Stack position={"relative"}>
            <Image src={assets.ICONS.icon_Profile_gray} />
            <Stack
              position={"absolute"}
              w={"100%"}
              h={"100%"}
              display={"flex"}
              justify={"center"}
              alignItems={"center"}
            >
              <Text
                fontFamily={"secondary"}
                fontWeight={"400"}
                fontSize={"lg"}
                textTransform={"uppercase"}
              >
                20m
              </Text>
            </Stack>
          </Stack>
          <Stack gap={0} justify={"center"} filter={"blur(8px)"}>
            <Text
              fontFamily={"secondary"}
              fontWeight={"500"}
              textTransform={"uppercase"}
              lineHeight={"100%"}
            >
              Drop 4:
            </Text>
            <Text fontFamily={"body"} fontWeight={"800"}>
              xxxx xx xxRRR
            </Text>
          </Stack>
        </Flex>
      </Stack>

      <Stack>
        <Stack>
          <Text fontWeight={700} fontSize={"md"}>
            Every milestone unlocks exclusive $TOPDAWG Drop for the agent
            communities.
          </Text>
        </Stack>
        {
            connected?
            <Btn cta={() => window.open("https://pump.fun/", "_blenck")}>
            BUY $TOPDWAG
          </Btn>
          :null
        }
       
      </Stack>
    </Stack>
  );
};

export default Drops;
