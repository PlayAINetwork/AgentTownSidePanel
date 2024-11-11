import { Flex, Select, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import CLIPARTS from "../../assets/clipart";
import { brandColors } from "../../theme/app.theme";

const SelectBox = ({
  children,
  placeholder,
  align,
  set
}: {
  children: ReactNode;
  placeholder?: string;
  align?:any
  set?:any
}) => {
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
        <Select
          placeholder={placeholder ?? "Select option"}
          border={"none"}
          fontWeight={800}
          fontSize={"sm"}
          textAlign={align ?? "start"}
          onChange={(e)=>set(e.target.value)}
        >
          {children}
        </Select>
      </Stack>
      <CLIPARTS.BoxRight h="100%" w="12px" />
    </Flex>
  );
};

export default SelectBox;
