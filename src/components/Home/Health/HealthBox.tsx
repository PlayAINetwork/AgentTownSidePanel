import { Flex, Image, Skeleton, Stack, Text, WrapItem } from "@chakra-ui/react";
import Btn from "../../Buttons/Btn";
import { agentImages } from "../../../DB";
import { useAppCtx } from "../../../contexts/app.context";
import CLIPARTS from "../../../assets/clipart";
import useGetAgents from "../../../hooks/useGetAgents";
import { brandColors } from "../../../theme/app.theme";

const HealthBox = () => {
  const { agentList,agentListLoding } = useGetAgents();

  return (
    <Stack pos={"relative"} h={"100%"}>
 <Stack
     pos={"absolute"}
     w={"100%"}
     h={"100%"}
    zIndex={12}
    align={"center"}
    justify={"center"}
     >
<Text
         fontWeight={800}
         // css={{ textTransform: "uppercase" }}
         fontSize={"md"}
         whiteSpace={"nowrap"}
       >
         {" "}
         Coming Soon
       </Text>
     </Stack>
    <Stack gap={4}
     filter={"blur(6px)"}
    >

      {
      agentListLoding?
      <>
      <Skeleton  w={"100%"} h={14} color={brandColors.primary400}/>
      <Skeleton  w={"100%"} h={14} color={brandColors.primary400}/>
      <Skeleton  w={"100%"} h={14} color={brandColors.primary400}/>
      <Skeleton  w={"100%"} h={14} color={brandColors.primary400}/>

      </>


      :
      agentList?.map((list:any, key:number) => (
        <HealthItem data={list} key={key}/>
      ))}
    </Stack>

    </Stack>

  );
};

const HealthItem = ({ data}: { data: any }) => {
  console.log(data);
  const {  setSelectedReviveItem } = useAppCtx();
const components = [1, 2, 3, 4, 5];

const imageUrl = agentImages.find((d)=> d.id == data?.id)
  return (
    <Flex justifyContent={"space-between"} align={"center"}>
      <Flex align={"center"} gap={2}>
        <WrapItem>
          <Image src={imageUrl?.image} objectFit={"cover"} w={14} h={14} borderRadius={"50%"} />
        </WrapItem>
        <Stack gap={2} fontFamily={"secondary"}>
          <Text fontSize={"md"} fontWeight={500} lineHeight={"100%"}>
            {data?.name}
          </Text>
          <Flex gap={1.5}>
            {
              components?.map((c)=>(

                <CLIPARTS.Hart   isActive={data.health/ 4 >= c ? true:false } />
              ))
            }
        

           
          </Flex>
        </Stack>
      </Flex>
      <Stack>
        <Stack align={"center"} justify={"center"}>
          {data?.health <=0 ? (
            <Btn
              px={"5.5px"}
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
