import { Flex, Image, Stack, Text, WrapItem } from "@chakra-ui/react";
import Btn from "../../Buttons/Btn";
import { assets } from "../../../assets";
import { healtList } from "../../../DB";
import { useAppCtx } from "../../../contexts/app.context";

const HealthBox = () => {
  return (
    <Stack gap={4}>
      {healtList?.map((list) => (
        <HealthItem data={list} />
      ))}
    </Stack>
  );
};

const HealthItem = ({ data }: { data: any }) => {
  console.log(data);
  const {  setSelectedReviveItem } = useAppCtx();

  return (
    <Flex justifyContent={"space-between"} align={"center"}>
      <Flex align={"center"} gap={2}>
        <WrapItem>
          <Image src={assets.ICONS.icon_Profile} />
        </WrapItem>
        <Stack gap={2} fontFamily={"secondary"}>
          <Text fontSize={"md"} fontWeight={500} lineHeight={"100%"}>
            {data?.title}
          </Text>
          <Flex gap={1.5}>
            <Image src={assets.ICONS.icon_hartfill} />
            <Image src={assets.ICONS.icon_hartfill} />
            <Image src={assets.ICONS.icon_hartfill} />
            <Image src={assets.ICONS.icon_hart} />
            <Image src={assets.ICONS.icon_hart} />
            <Image src={assets.ICONS.icon_hart} />
          </Flex>
        </Stack>
      </Flex>
      <Stack>
        <Stack align={"center"} justify={"center"}>
          {data?.btn ? (
            <Btn
              px={2}
              fontSize={"12px"}
              // color={"rgba(29, 155, 240, 1)"}
              cta={() => setSelectedReviveItem(data)}
            >
              Revive
            </Btn>
          ) : null}
        </Stack>
      </Stack>
    </Flex>
  );
};

export default HealthBox;
