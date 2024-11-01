import { brandColors } from '../../theme/app.theme'
import { Flex, Input, Stack } from '@chakra-ui/react'
import CLIPARTS from '../../assets/clipart'

const InputTeb = () => {
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
       <Input
       w={"100%"}
       px={1}
   
              borderColor={brandColors.stroke}
              border={"none"}
              fontWeight={800}
              // type={show ? 'text' : 'password'}
              placeholder="Enter your message "
            />
      </Stack>
      <CLIPARTS.BoxRight h="100%" w="12px" />
    </Flex>

            
           
  )
}

export default InputTeb