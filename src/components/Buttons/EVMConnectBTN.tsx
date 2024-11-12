import { Flex, Stack, Text } from "@chakra-ui/react";
import CLIPARTS from "../../assets/clipart";
import { brandColors } from "../../theme/app.theme";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { trimWords } from "../../lib/app.fun";
import { useCallback, useRef, useState } from "react";
import { useAccountEffect } from "wagmi";
import { signMessage } from "wagmi/actions";
import Cookies from "js-cookie";

import { evm_config } from "../Providers/EvmWalletProvider";
import useWalletConnect from "../../hooks/auth/useWalletConnect";
import { useAppCtx } from "../../contexts/app.context";

const EVMConnectBTN = () => {
  const { open } = useAppKit();
  const { address } = useAppKitAccount();
  const [hover, setHover] = useState(false);
  const isSigningRef = useRef(false);
  const { connectWallet } = useWalletConnect();
  const { disconnectUser } = useAppCtx();
  const TOKEN = Cookies.get("token");

  const generateChallengeMessage = (walletAddress: any) => {
    return `Sign this message to authenticate: ${walletAddress}}`;
  };
  const signWalletConnectMessage = useCallback(
    async (address: any) => {
      if (address) {
        try {
          const message = generateChallengeMessage(address);
          const nonce = 34;

          const mssg_signature = await signMessage(evm_config, {
            message: message,
          });
          if (mssg_signature && nonce && !isSigningRef.current) {
            console.log("signature", mssg_signature);
            isSigningRef.current = true;

            connectWallet({
              walletAddress: address,
              signature: mssg_signature,
            });
          }
        } catch (err) {
          disconnectUser();
          console.log("error linking wallet!", err);
        } finally {
          isSigningRef.current = false;
        }
      }
    },
    [address]
  );

  useAccountEffect({
    onConnect: (user) => {
        if (  (!TOKEN || TOKEN === undefined))
      signWalletConnectMessage(user?.address);
    },
    onDisconnect() {
      console.log('Disconnected!')
      disconnectUser();

    },
  });
  return (
    <Stack
      cursor={"pointer"}
      // border={"1.5px solid var(--primary)"}
      // borderRadius={"lg"}
      w={"full"}
      gap={0}
      position={"relative"}
      onClick={() => {
        open();
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {" "}
      <Flex
        gap={0}
        cursor={"pointer"}
        position={"absolute"}
        w={"100%"}
        right={hover ? 1 : 0}
        top={hover ? "-3px" : 0}
        // right={-2}
        zIndex={10}
        transition={"all .3s"}
      >
        <Stack>
          <CLIPARTS.BoxLeftFill h="100%" w="10px" />
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
              {
                //       loginInitiated
                // ? "Connecting . . ."
                // :
                address ? trimWords(address, 6) : "Connect Wallet"
              }
            </Text>
          }
        </Stack>
        <CLIPARTS.BoxRightFill h="100%" w="10px" />
      </Flex>
      <Flex gap={0} w={"99%"}>
        <Stack>
          <CLIPARTS.BoxLeftFill h="100%" w="10px" />
        </Stack>
        <Stack
          px={4}
          w={"100%"}
          borderY={`4px solid ${brandColors.stroke}`}
          h={"auto"}
          align={"center"}
          justify={"center"}
          bg={brandColors.stroke}
        >
          {
            <Text
              fontWeight={800}
              css={{ textTransform: "uppercase" }}
              fontSize={".9rem"}
              color={brandColors.white}
            >
              {" "}
              {address ? trimWords(address, 6) : "Connect Wallet"}
            </Text>
          }
        </Stack>
        <CLIPARTS.BoxRightFill h="100%" w="10px" />
      </Flex>
    </Stack>
  );
};

export default EVMConnectBTN;
