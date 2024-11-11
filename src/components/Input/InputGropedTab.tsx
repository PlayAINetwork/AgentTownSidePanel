import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import CLIPARTS from "../../assets/clipart";
import { brandColors } from "../../theme/app.theme";

const InputGropedTab = ({set,value}:{set:any,value:number|string}) => {
  return (
    <Flex gap={0} w={"100%"}>
      <Stack>
        <CLIPARTS.BoxLeft h="100%" w="12px" />
      </Stack>
      <Stack
        w={"100%"}
        borderY={`4px solid ${brandColors.stroke}`}
        h={"auto"}
        align={"center"}
        justify={"center"}
      >
        <InputGroup>
          <InputRightElement pointerEvents="none" w={"4rem"}>
            <Text fontWeight={800}> $host</Text>
          </InputRightElement>
          <Input
            border={"none"}
            px={1}
            value={value}
            fontWeight={800}
            type="number"
            placeholder="00"
            onChange={(e)=>set(e.target.value)}
          />
        </InputGroup>
     
      </Stack>
      <CLIPARTS.BoxRight h="100%" w="12px" />
    </Flex>
  );
};

export default InputGropedTab;
