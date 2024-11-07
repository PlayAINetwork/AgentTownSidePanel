import { Flex, Stack, Text } from "@chakra-ui/react";

import CLIPARTS from "../../../assets/clipart";
import { brandColors } from "../../../theme/app.theme";

const BriveCard = ({ item, card, setCard }:{item:any; card:any; setCard:any}) => {
  return (
    <Stack position={"relative"}>
      <Flex
        gap={0}
        h={"auto"}
        position={"absolute"}
        w={"100%"}
        top={card?.id === item?.id ? -1.5 : 0}
        left={card?.id === item?.id ? -1.5 : 0}
        transition={"all .3s"}
      >
        <CLIPARTS.BoxLeftCard
          fill={card?.id === item?.id ? "#1D9BF0" : "#D9D9D9"}
        />

        <Stack
          bg={card?.id === item?.id ? "#1D9BF0" : "#D9D9D9"}
          cursor={"pointer"}
          gap={3}
          w={"100%"}
          // h={"auto"}
          onClick={() => setCard(item)}
          alignItems={"center"}
          justify={"center"}
        >
          <Stack gap={2} textAlign={"center"}>
            <Text fontSize={"lg"} fontWeight={800} lineHeight={"100%"}>
              {item?.tittle}
            </Text>
            <Text fontWeight={700} lineHeight={"100%"}>
              {item?.amount}{" "}
            </Text>
          </Stack>
        </Stack>
        <CLIPARTS.BoxRightCard
          fill={card?.id === item?.id ? "#1D9BF0" : "#D9D9D9"}
        />
      </Flex>
      <Flex gap={0} h={"auto"}>
        <CLIPARTS.BoxLeftCard fill={brandColors.stroke} />

        <Stack
          cursor={"pointer"}
          gap={3}
          w={"100%"}
          // h={"auto"}
          onClick={() => setCard(item)}
          alignItems={"center"}
          bg={brandColors.stroke}
          justify={"center"}
        >
          <Stack gap={2} textAlign={"center"}>
            <Text fontSize={"lg"} fontWeight={800} lineHeight={"100%"}>
              {item?.tittle}
            </Text>
            <Text fontWeight={700} lineHeight={"100%"}>
              {item?.amount}{" "}
            </Text>
          </Stack>
        </Stack>
        <CLIPARTS.BoxRightCard fill={brandColors.stroke} />
      </Flex>
    </Stack>
  );
};

export default BriveCard;
