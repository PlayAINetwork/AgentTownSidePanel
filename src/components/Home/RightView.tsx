import {
  Button,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Stack,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { assets } from "../../assets";
import TabBtn from "../Buttons/TabBtn";
import { category } from "../../DB";
import { brandColors } from "../../theme/app.theme";
import AgentTip from "./Global/AgentTip";
import { useAppCtx } from "../../contexts/app.context";
import GlobalChatBox from "./Global/GlobalChatBox";
import TerminalBox from "./Terminal/TerminalBox";
import HealthBox from "./Health/HealthBox";
import {  useEffect, useState } from "react";
import InputTeb from "../Input/Input";
import Btn from "../Buttons/Btn";
import { convertTokeneformatEther, trimWords } from "../../lib/app.fun";
import Revive from "./Health/Revive";
import { useAppKitAccount } from "@reown/appkit/react";
import EVMConnectBTN from "../Buttons/EVMConnectBTN";
import BriveBox from "./Bribe/BriveBox";
import useGetTokenBalance from "../../hooks/token/useGetTokenBalance";
import Cookies from "js-cookie";

const RightView = () => {
  const { address, isConnected } = useAppKitAccount();
  const { tokenBalance } = useGetTokenBalance();
  const { disconnectUser } = useAppCtx();

  const {
    showTipAgent,
    setsTipAgent,
    sectionType,
    setSectionType,
    selectedRevaiveItem,
    setGlobalMessages,
    globalMessages,
    updateJwt
  } = useAppCtx();
  const jwt = Cookies.get("token");


  useEffect(() => {
    if (isConnected && jwt) {
      updateJwt(jwt);
     
    }
  }, [isConnected]);

  const [inputvalue, setInputValue] = useState("");
  const handleSend = () => {
    if (inputvalue.trim()) {
      setGlobalMessages([
        ...globalMessages,
        { name: address, message: inputvalue },
      ]);
      setInputValue(""); // Clear the input after sending
    }
  };

  return (
    <Flex
      border={`0.5px solid ${brandColors.stroke}`}
      gap={4}
      w={"30%"}
      h={"100%"}
      // bg={"rgba(249, 249, 249, 1)"}
      flexDir={"column"}
      // px={4}
      // py={4}
    >
      <Flex
        w={"100%"}
        justify={"space-between"}
        align={"center"}
        bg={"brand.primary700"}
        p={4}
        py={5}
        boxShadow={` 3px 3px 0px 0px ${brandColors.stroke};`}
      >
        <Image src={assets.LOGOS.logo} w={"130px"} />
        {isConnected ? (
          <Popover>
            <PopoverTrigger>
              <WrapItem cursor={"pointer"}>
                <Image src={assets.ICONS.icon_Profile} />

                {/* <Avatar name="Dan Abrahmov" src={walletIcon} /> */}
              </WrapItem>
            </PopoverTrigger>
            <Portal>
              <PopoverContent
                w={"max-content"}
                p={3}
                bg={brandColors.primary700}
              >
                <PopoverArrow />
                <Stack>
                  <Text color={brandColors.stroke} fontWeight={700}>
                    {trimWords(address?.toString(), 6)}
                  </Text>
                  <Btn cta={disconnectUser} fontSize="14px">
                    Disconnect
                  </Btn>
                </Stack>
              </PopoverContent>
            </Portal>
          </Popover>
        ) : null}
      </Flex>

      <Stack w={"100%"} overflow={"scroll"} className="hideScrolbar">
        <Flex w={"max-content"} gap={4} overflow={"scroll"} py={2} px={4}>
          {category?.map((type) => (
            <TabBtn
              isActive={sectionType === type}
              cta={() => setSectionType(type)}
            >
              {type}
            </TabBtn>
          ))}
        </Flex>
      </Stack>
      <Stack flex={1} overflow={"auto"} px={4} pb={2}>
        {sectionType == "bribe" ? (
          <BriveBox />
        ) : (
          <Stack
            h={"100%"}
            overflow={"auto"}
            p={4}
            bg={brandColors.primary100}
            boxShadow={" 3px 3px 0px 0px rgba(30, 52, 69, 1);"}
          >
            {sectionType == "global" ? (
              <GlobalChatBox />
            ) : sectionType == "health" ? (
              <HealthBox />
            ) : sectionType == "terminal" ? (
              <TerminalBox />
            ) : null}
          </Stack>
        )}
      </Stack>

      <Stack pos={"relative"} px={4} pb={2}>
        {isConnected && showTipAgent && sectionType == "global" ? (
          <AgentTip />
        ) : null}
        {isConnected &&
        sectionType == "health" &&
        selectedRevaiveItem?.title ? (
          <Revive />
        ) : null}

        {isConnected && sectionType == "global" ? (
          <Flex w={"100%"} gap={1} align={"center"}>
            <Stack flex={2}>
              <InputTeb inputvalue={inputvalue} setInputValue={setInputValue} />
            </Stack>
            <Stack flex={1}>
              <Btn cta={() => handleSend()}>send</Btn>
            </Stack>
            {!showTipAgent && sectionType == "global" ? (
              <Stack flex={1}>
                <Btn
                  color={"rgba(29, 155, 240, 1)"}
                  cta={() => setsTipAgent(true)}
                >
                  Tip
                </Btn>
              </Stack>
            ) : null}

            {/* <Button w={"max-content"} h={"100%"} size="sm" onClick={() => ""}>
              send
            </Button> */}
          </Flex>
        ) : null}
        {!isConnected ? <EVMConnectBTN /> : null}

        <Flex justify={"space-between"} fontFamily={"secondary"}>
          <Flex align={"center"} gap={0}>
            <Text fontSize={"sm"} fontWeight={500} textTransform={"uppercase"}>
              $host: ${tokenBalance?.data ?convertTokeneformatEther(tokenBalance?.data):0}
            </Text>
          </Flex>

          <Button variant={"text"} fontSize={"sm"} fontWeight={500}>
            Learn More{" "}
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default RightView;
