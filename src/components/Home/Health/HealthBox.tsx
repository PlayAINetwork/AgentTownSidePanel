import {  Flex, Image, Stack, Text, WrapItem } from "@chakra-ui/react";
import Btn from "../../Buttons/Btn";
import { assets } from "../../../assets";


const HealthBox = () => {
  return (
    <Stack gap={4}>
        <HealthItem/>
        <HealthItem/>
        <HealthItem/>

     
    </Stack>
  );
};

const HealthItem = () => {
    return (
     
        <Flex justifyContent={"space-between"} align={"center"}>
          <Flex align={"center"} gap={2}>
            <WrapItem>
            <Image src={assets.ICONS.icon_Profile}  />

            </WrapItem>
            <Stack gap={2} fontFamily={"secondary"}>
              <Text fontSize={"md"} fontWeight={500} lineHeight={"100%"}>
                GOAT_Sentient
              </Text>
              <Flex gap={1.5}>
                <Image src={assets.ICONS.icon_hartfill}  />
                <Image src={assets.ICONS.icon_hartfill}  />
                <Image src={assets.ICONS.icon_hartfill}  />
                <Image src={assets.ICONS.icon_hart}  />
                <Image src={assets.ICONS.icon_hart}  />
                <Image src={assets.ICONS.icon_hart}  />


              </Flex>
            </Stack>
          </Flex>
          <Stack>
          <Stack align={"center"} justify={"center"}>
          <Btn
          px={2}
          fontSize={"12px"}
                // color={"rgba(29, 155, 240, 1)"}
                // cta={() => setsTipAgent(true)}
              >
                Revive
              </Btn>
          </Stack>
          </Stack>
        </Flex>
  
    );
  };


export default HealthBox;
