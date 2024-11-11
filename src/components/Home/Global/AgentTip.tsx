import { Flex, Stack, Text } from "@chakra-ui/react";
import { useAppCtx } from "../../../contexts/app.context";
import { brandColors } from "../../../theme/app.theme";
import Btn from "../../Buttons/Btn";
import InputGropedTab from "../../Input/InputGropedTab";
import SelectBox from "../../Input/SelectBox";
import { useBalance, useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";
import { useState } from "react";
import { agentList } from "../../../DB";

const AgentTip = () => {
  const { showTipAgent, setsTipAgent } = useAppCtx();
  const { sendTransaction } = useSendTransaction();
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [amount, setAmount] = useState<any>(null);
  const [statusMessage, setStatusMessage] = useState("");

 

  const result = useBalance({
    address: "0xefE27b866c771f37e204A7dCD10Ed70490Dc1939"
  });

  console.log(result, "dfd", selectedAgent);

  const sendTip = async () => {
    setStatusMessage(""); // Clear previous message
    try {
      const transaction:any = await sendTransaction({
        to: selectedAgent,
        value: parseEther(amount.toString())
      });
      
      // Wait for transaction confirmation
if(transaction?.hash){

  const { isLoading, isSuccess, isError } = useWaitForTransactionReceipt({
    hash: transaction.hash, // The transaction hash from sendTransaction
  });

  if (isLoading) {
    setStatusMessage("Transaction in progress...");
  }

  if (isSuccess) {
    setStatusMessage("Transaction successful!");
  }

  if (isError) {
    setStatusMessage("Transaction failed. Please try again.");
  }
}
      // await transaction.wait();
      // setStatusMessage("Transaction successful!");
    } catch (error) {
      setStatusMessage("Transaction failed. Please try again.");
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
          {agentList?.map((agent) => (
            <option key={agent.wallet} value={agent.wallet}>
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
          <Btn cta={() => sendTip()}>
            send
          </Btn>
        </Stack>
      </Flex>

      {statusMessage && (
        <Text color={statusMessage.includes("successful") ? "green.500" : "red.500"}>
          {statusMessage}
        </Text>
      )}
    </Stack>
  );
};

export default AgentTip;