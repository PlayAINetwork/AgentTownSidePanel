import {
  ButtonProps,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { ReactNode, useMemo } from "react";
import CLIPARTS from "../../assets/clipart";
import { brandColors } from "../../theme/app.theme";

const labels = {
  "change-wallet": "Change wallet",
  connecting: "Connecting ...",
  "copy-address": "Copy address",
  copied: "Copied",
  disconnect: "Disconnect",
  "has-wallet": "Connect",
  "no-wallet": "CONNECT  WALLET",
} as const;

export function SolWalletConnectBtn() {
  const { setVisible: setModalVisible } = useWalletModal();
  const { buttonState, onConnect, publicKey } =
    useWalletMultiButton({
      onSelectWallet() {
        setModalVisible(true);
      },
    });





  const content = useMemo(() => {
    if (publicKey) {
      const base58 = publicKey.toBase58();
      return base58.slice(0, 4) + ".." + base58.slice(-4);
    } else if (buttonState === "connecting" || buttonState === "has-wallet") {
      return labels[buttonState];
    } else {
      return labels["no-wallet"];
    }
  }, [buttonState, labels, publicKey]);

  return (
    <Stack
      // border={"1.5px solid var(--primary)"}
      // borderRadius={"lg"}
      w={"full"}
      gap={0}
      position={"relative"}
      onClick={() => {
        switch (buttonState) {
          case "no-wallet":
            setModalVisible(true);
            break;
          case "has-wallet":
            if (onConnect) {
              onConnect();
            }
            break;
          case "connected":
            // setMenuOpen((prev) => {
            //   return !prev;
            // });
            break;
        }
      }}
    >
      {" "}
      {/* <Button
        gap={1.5}
        variant={"secondary"}
        w={"full"}
        border={"none"}
        fontSize={".8rem"}
        {...btnSX}
        borderRadius={"0"}
        borderBottom={
          menuOpen && publicKey ? "1px solid var(--primary)" : "none"
        }
        size={"sm"}
      >
        {walletIcon ? (
          <Image src={walletIcon} alt="sds" boxSize={iconSize ?? 5} />
        ) : (
          <Image
            src={assets.LOGOS.logo_solana}
            alt="solana_wallet"
            boxSize={iconSize ?? 5}
          />
        )}
        { content}
        {connectedSolAddress && (
          <Flex ml={"auto"} alignItems={"center"} gap={2}>
            
            {publicKey ? (
              !copied ? (
                <Image
                  src={assets.ICONS.icon_copy}
                  alt=""
                  onClick={async (e) => {
                    e.stopPropagation();
                    await navigator.clipboard.writeText(publicKey.toBase58());
                    setCopied(true);
                    setTimeout(() => setCopied(false), 500);
                  }}
                  boxSize={4}
                />
              ) : (
                <Box>
                  <Text
                    fontSize={".7rem"}
                    fontFamily={"var(--ff-subtitle)"}
                       css={{ textTransform: 'uppercase' }}
                  >
                    Copied
                  </Text>
                </Box>
              )
            ) : null}
          </Flex>
        )}
      </Button> */}
     
        
        <Flex gap={0}
         cursor={"pointer"}
         position={"absolute"}
         w={"99%"}
         left={1}
         bottom={-1}
         // right={-2}
         zIndex={-10}
        
        >
          <Stack>
            <CLIPARTS.BoxLeftFill h="100%" w="13px" />
          </Stack>
          <Stack
            px={4}
            w={"100%"}
            borderY={`4px solid ${brandColors.stroke}`}
            h={"auto"}
            align={"center"}
            justify={"center"}
            bg={brandColors.secondary}
          >
            {
              <Text
                fontWeight={800}
                css={{ textTransform: "uppercase" }}
                fontSize={".9rem"}
                color={brandColors.white}
              >
                {" "}
                {content}
              </Text>
            }
          </Stack>
          <CLIPARTS.BoxRightFill h="100%" w="13px" />
        </Flex>

     
        {/* <Box

          zIndex={-1}
          pos={"absolute"}
          w={"99%"}
         left={1}
          borderY={`4px solid ${brandColors.stroke}`}
          h={"100%"}
          bg={brandColors.secondary}
          clipPath={
            " polygon(98.21% 100%, 100% 65.79%, 100% 25.29%, 97.21% 0%, 2.71% 0%, 0% 25.29%, 0% 73.79%, 2.71% 100%);"
          }
        ></Box> */}
        <Flex gap={0} w={"99%"}>
          <Stack>
            <CLIPARTS.BoxLeftFill h="100%" w="13px" />
          </Stack>
          <Stack
            px={4}
            w={"100%"}
            borderY={`4px solid ${brandColors.stroke}`}
            h={"auto"}
            align={"center"}
            justify={"center"}
            bg={brandColors.secondary}
          >
            {
              <Text
                fontWeight={800}
                css={{ textTransform: "uppercase" }}
                fontSize={".9rem"}
                color={brandColors.white}
              >
                {" "}
                {content}
              </Text>
            }
          </Stack>
          <CLIPARTS.BoxRightFill h="100%" w="13px" />
        </Flex>
      </Stack>
  
  );
}

export const MenuBNT = ({
  children,
}: {
  children: ReactNode;
  sx?: ButtonProps;
}) => {
  return (
    // <Button
    //   p={0}
    //   size={"sm"}
    //   variant={"secondary"}
    //      css={{ textTransform: 'uppercase' }}
    //   fontSize={"xs"}
    //   border={0}
    //   borderRadius={"none"}
    //   flex={1}
    //   _hover={{
    //     color: "var(--secondary)",
    //     bg: "var(--bg)",
    //   }}
    //   {...sx}
    // >
    //   {children}
    // </Button>

    <Stack
      // onClick={cta}
      cursor={"pointer"}
      position={"relative"}
    >
      <Flex gap={0} position={"absolute"}>
        <CLIPARTS.LeftSideBtn h="100%" w="13px" />
        <Stack
          px={4}
          h={"auto"}
          align={"center"}
          justify={"center"}
          bg={"#E4D5CE"}
        >
          {
            <Text
              fontWeight={700}
              css={{ textTransform: "uppercase" }}
              fontSize={".9rem"}
            >
              {" "}
              {children}
            </Text>
          }
        </Stack>
        <CLIPARTS.RightSideBtn h="100%" w="13px" />
      </Flex>
    </Stack>
  );
};
