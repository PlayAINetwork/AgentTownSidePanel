import { Flex, Stack, Text } from '@chakra-ui/react'
import { useAppCtx } from '../../../contexts/app.context';
import { trimWords } from '../../../lib/app.fun';


const GlobalChatBox = () => {
  const { globalMessages} =
  useAppCtx();
  return (
    <Stack  >


{globalMessages.map((message:any) => (
        
<Flex  align={"center"} gap={2}>
<Text fontWeight={700} fontSize={"md"} >            {trimWords(message?.name, 4)}:</Text>
<Text fontSize={"sm"} fontWeight={400}> {message?.message}</Text>
</Flex>
        ))}
       
       
    </Stack>
  )
}

export default GlobalChatBox