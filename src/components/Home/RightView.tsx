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
import { SolWalletConnectBtn } from "../Buttons/SolConnectBTN";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { category } from "../../DB";
import { brandColors } from "../../theme/app.theme";
import AgentTip from "./Global/AgentTip";
import { useAppCtx } from "../../contexts/app.context";
import GlobalChatBox from "./Global/GlobalChatBox";
import TerminalBox from "./Terminal/TerminalBox";
import HealthBox from "./Health/HealthBox";
import { useMemo, useState } from "react";
import InputTeb from "../Input/Input";
import Btn from "../Buttons/Btn";
import { trimWords } from "../../lib/app.fun";
import Revive from "./Health/Revive";

const RightView = () => {
  const { showTipAgent, setsTipAgent, sectionType, setSectionType ,selectedRevaiveItem,setGlobalMessages, globalMessages} =
    useAppCtx();

  const { setVisible: setModalVisible } = useWalletModal();
  const { buttonState, publicKey, onDisconnect } =
    useWalletMultiButton({
      onSelectWallet() {
        setModalVisible(true);
      },
    });
  const connectedSolAddress = useMemo(() => {
    if (publicKey) {
      return publicKey.toBase58();
    } else return null;
  }, [publicKey]);

  const [inputvalue, setInputValue] = useState('');
  const handleSend = () => {
    if (inputvalue.trim()) {
      setGlobalMessages([...globalMessages, {name:connectedSolAddress ,message:inputvalue}]);
      setInputValue(''); // Clear the input after sending
    }
  };
  return (
    <Flex
      border={`0.5px solid ${brandColors.stroke}`}
      gap={4}
      w={"30%"}
      h={"100%"}
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
        <Image src={assets.LOGOS.logo} w={"80px"} />
        {buttonState === "connected" ? (
          <Popover>
            <PopoverTrigger>
              <WrapItem cursor={"pointer"}>
            <Image src={assets.ICONS.icon_Profile}  />

                {/* <Avatar name="Dan Abrahmov" src={walletIcon} /> */}
              </WrapItem>
            </PopoverTrigger>
            <Portal>
              <PopoverContent w={"max-content"} p={3} bg={brandColors.primary700}>
                <PopoverArrow />
               <Stack>
               <Text color={brandColors.stroke} fontWeight={700}>{trimWords(connectedSolAddress?.toString(), 6)}</Text>
                <Btn
                cta={onDisconnect}
                fontSize="14px"
                >Disconnect</Btn>
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
      </Stack>

      <Stack pos={"relative"} px={4} pb={2}>
        { buttonState === "connected"&& showTipAgent && sectionType == "global" ? <AgentTip /> : null}
        {buttonState === "connected"  && sectionType == "health" && selectedRevaiveItem?.title  ? <Revive /> : null}

        {buttonState === "connected" &&
        (sectionType == "global" || sectionType == "bribe") ? (
          <Flex w={"100%"} gap={1} align={"center"}>
            <Stack flex={2}>
              <InputTeb inputvalue={inputvalue} setInputValue={setInputValue} />
            </Stack>
            <Stack flex={1}>
            <Btn
            cta={()=>handleSend()}
            >send</Btn>

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
        {buttonState !== "connected" ? <SolWalletConnectBtn /> : null}

        <Flex justify={"space-between"} fontFamily={"secondary"}>
          <Flex align={"center"} gap={0}>
            <Text fontSize={"sm"} fontWeight={600} textTransform={"uppercase"}>
              $host: $0.01
            </Text>
          </Flex>

          <Button variant={"text"} fontSize={"sm"} fontWeight={600} >
            Learn More{" "}
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default RightView;
