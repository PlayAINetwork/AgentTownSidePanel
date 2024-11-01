import { Flex, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react'
import CLIPARTS from '../../assets/clipart'
import { brandColors } from '../../theme/app.theme'

const InputGropedTab = () => {
  return (
    <Flex gap={0}
    
    w={"100%"}
    >
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
            <Text
              fontWeight={800}
            
            > $host</Text>
          </InputRightElement>
          <Input
              border={"none"}
       px={1}
       fontWeight={800}
          
          type="number" placeholder="00" />
        </InputGroup>
       {/* <Input
       w={"100%"}
       px={1}
   
              borderColor={brandColors.stroke}
              border={"none"}
              fontWeight={800}
              // type={show ? 'text' : 'password'}
              placeholder="Enter your message "
            /> */}
      </Stack>
      <CLIPARTS.BoxRight h="100%" w="12px" />
    </Flex>
  )
}

export default InputGropedTab