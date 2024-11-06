import { Grid, Img, Stack, Text } from '@chakra-ui/react'
import { assets } from '../../../assets'
import { brandColors } from '../../../theme/app.theme'
import { useState } from 'react'
import SelectBox from '../../Input/SelectBox'

const BriveBox = () => {

  const Cards=[
    {
      id:1001,
      image:assets.LOGOS.logo,
      tittle:"Hit Ax",
      amount:"100k"
    },
    {
      id:1002,

      image:assets.LOGOS.logo,
      tittle:"Hit Ax",
      amount:"100k"
    },
    {
      id:1003,

      image:assets.LOGOS.logo,
      tittle:"Hit Ax",
      amount:"100k"
    },
    {
      id:1004,

      image:assets.LOGOS.logo,
      tittle:"Hit Ax",
      amount:"100k"
    },
  ]

  const [card, setCard] = useState<any>(null)
  return (
    <Stack gap={4}>

<Grid templateColumns='repeat(2, 1fr)' gap={4}>

  {
    Cards?.map((item)=>(
      <Stack bg={ card?.id === item?.id ? brandColors.primary700   : brandColors.primary200} cursor={"pointer"} gap={3}  p={4}  onClick={()=>setCard(item)} borderRadius={"lg"} alignItems={"center"} justify={"center"}>
      <Img src={item?.image} w={"70px"} />
      <Stack gap={0} textAlign={"center"}>
  
      <Text fontSize={"lg"} fontWeight={800} lineHeight={"100%"}>{item?.tittle}</Text>
      <Text fontWeight={700} lineHeight={"100%"}>{item?.amount} </Text>
      </Stack>
  
  
    </Stack>
    ))
  }
 <SelectBox placeholder={"From Agent"}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </SelectBox>
        <SelectBox placeholder={"To Agent"}>

          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </SelectBox>


</Grid>



        </Stack>
  )
}

export default BriveBox