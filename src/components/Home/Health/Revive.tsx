import {
  Flex,
  Progress,

  Stack,
  Text,
} from "@chakra-ui/react";
import { brandColors } from "../../../theme/app.theme";
import Btn from "../../Buttons/Btn";
import { useAppCtx } from "../../../contexts/app.context";
import InputGropedTab from "../../Input/InputGropedTab";

const Revive = () => {
  const {  selectedRevaiveItem } = useAppCtx();

  return (
    <Stack
      //   pos={"absolute"}
      w={"100%"}
      // bg={brandColors.bg}
      bg={brandColors.primary100}
      zIndex={1}
      top={"-150px"}
      left={0}
      border={`1px solid ${brandColors.stroke}`}
      // borderRadius={"15px"}
      p={4}
      boxShadow={" 3px 3px 0px 0px rgba(30, 52, 69, 1);"}

      //   visibility={showTipAgent ? "visible" : "hidden"}
    >
      <Text mb={3} fontWeight={800}>Revive {selectedRevaiveItem?.title}</Text>
      <Stack gap={2}>
        {/* <Slider aria-label="slider-ex-4" defaultValue={30}>
          <SliderTrack bg={brandColors.primary200} h={6}>
            <SliderFilledTrack bg={brandColors.secondary}  />
          </SliderTrack>
          <SliderThumb boxSize={6} borderRadius={0}>
          </SliderThumb>
        </Slider> */}
          <Progress fill={brandColors.secondary} bg={brandColors.primary200} size='lg' value={20} />
        <Flex justify={"space-between"}>
          <Text fontWeight={700}>99k left</Text>
          <Text fontWeight={700}>1m to revive</Text>
        </Flex>
      </Stack>
      <Flex gap={2} mt={4}>
        <Flex flex={1}>
        <InputGropedTab  />
        </Flex>
        <Stack flex={1}>
          <Btn>Add to Revive</Btn>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Revive;
