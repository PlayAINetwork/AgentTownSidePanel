import { Flex, Stack, Text, useToast } from "@chakra-ui/react";
import { useAppCtx } from "../../../contexts/app.context";
import { brandColors } from "../../../theme/app.theme";
import Btn from "../../Buttons/Btn";
import InputGropedTab from "../../Input/InputGropedTab";
import SelectBox from "../../Input/SelectBox";
import {

  useWriteContract,
} from "wagmi";
import { parseEther } from "viem";
// import { agentList } from "../../../DB";
import { HOST_CONTRACT } from "../../../contracts/host.contract.abi";
import useTip from "../../../hooks/useTip";
import { useAppKitAccount } from "@reown/appkit/react";
import useGetAgents from "../../../hooks/useGetAgents";
import { waitForTransactionReceipt } from "wagmi/actions";
import { evm_config } from "../../Providers/EvmWalletProvider";

const AgentTip = () => {
  const { showTipAgent,setDisableAction,disableAction, setSelectedAgent,setAmount,setsTipAgent ,selectedAgent, amount} = useAppCtx();
  const { writeContractAsync } = useWriteContract();
  const { agentList } = useGetAgents();

  const toast = useToast();
  const { address } = useAppKitAccount();



  const { tip } = useTip();

  console.log(selectedAgent, agentList);

  const sendTip = async () => {
    setDisableAction(true)
    if (selectedAgent === null) {
      toast({
        title: "select your  agent",

        position: "top",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      return false;
    } else if (amount === null || amount === "" || amount === 0) {
      toast({
        title: "enter  valid amount",

        position: "top",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      return false;
    }

    try {
      const transaction: any = await writeContractAsync({
        abi: HOST_CONTRACT.ABI,
        address: HOST_CONTRACT.ADDRESS as `0x${string}`,
        functionName: "transfer",
        args: [import.meta.env.VITE_BANK, parseEther(amount.toString())],
      });

      // Get the provider from wagmi

      const res = await transaction;
      console.log("res", res);

      if (res) {
        const receipt = await waitForTransactionReceipt(evm_config, {
          hash: res, // Use the hash from the transaction object
        });

        if (receipt) {
          console.log(receipt, "receipt");

          const resData: any = await tip({
            txnHash: res,
            senderWallet: address,
            amount: amount,
            agentId: selectedAgent,
          });
          console.log(resData, "dsfd");

          
        }
      }
    } catch (error) {
      setDisableAction(false)
      toast({
        title: "Transaction failed. Please try again.",
        description: "Something went wrong!",
        position: "top",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error("Transaction error:", error);
    }
  };

  return (
    <Stack
      w={"100%"}
      bg={brandColors.primary100}
      zIndex={1}
      top={"-150px"}
      left={0}
      border={`1px solid ${brandColors.stroke}`}
      p={4}
      boxShadow={"3px 3px 0px 0px rgba(30, 52, 69, 1)"}
      visibility={showTipAgent ? "visible" : "hidden"}
    >
      <Text fontWeight={800}>Tip the agent with $host</Text>

      <Flex gap={2}>
        <SelectBox set={setSelectedAgent}>
          {agentList?.map((agent: any) => (
            <option key={agent.id} value={agent.id}>
              {agent.name}
            </option>
          ))}
        </SelectBox>
        <InputGropedTab set={setAmount} value={amount} />
      </Flex>

      <Flex gap={2}>
        <Stack flex={1}>
          <Btn color={"rgba(29, 155, 240, 1)"} cta={() => setsTipAgent(false)}>
            cancel
          </Btn>
        </Stack>
        <Stack flex={1}>
          <Btn  cta={() => sendTip()} isDisable={disableAction}>send</Btn>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default AgentTip;
