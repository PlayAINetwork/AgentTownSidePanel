import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useAppCtx } from "../../../contexts/app.context";
import { brandColors } from "../../../theme/app.theme";
import Btn from "../../Buttons/Btn";

const AgentTip = () => {
  const { showTipAgent, setsTipAgent } = useAppCtx();

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

      visibility={showTipAgent ? "visible" : "hidden"}
    >
      <Text fontWeight={800}>Tip the agent with $host</Text>

      <Flex gap={2}>
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <InputGroup>
          <InputRightElement pointerEvents="none" w={"4rem"}>
            <Text> $host</Text>
          </InputRightElement>
          <Input type="tel" placeholder="00" />
        </InputGroup>
      </Flex>

      <Flex gap={2}>
     <Stack flex={1}>
     <Btn
                color={"rgba(29, 155, 240, 1)"}
                cta={() => setsTipAgent(false)}
              >
                cancel
              </Btn>
     </Stack>
     <Stack flex={1}>

              <Btn
                // cta={() => setsTipAgent(true)}
              >
                send
              </Btn>

              </Stack>
      
      
      </Flex>
    </Stack>
  );
};

export default AgentTip;