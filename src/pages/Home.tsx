import {
  Flex,
  Image,
  Stack,
} from "@chakra-ui/react";

import RightView from "../components/Home/RightView";

const Home = () => {
 
  return (
    <Stack h={"100vh"}>
      <Flex   h={"100%"}>
        <Stack  w={"70%"}   borderRadius={'lg'}>

          <Image src="https://www.cdmi.in/courses@2x/2D3D-Game-Design.webp"  w={"100%"}  h={"100%"}/>
        </Stack>

        <RightView/>
      </Flex>
    </Stack>
  );
};

export default Home;
