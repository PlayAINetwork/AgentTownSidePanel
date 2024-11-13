import { Flex, Progress, Stack, Text, useToast } from "@chakra-ui/react";
import { brandColors } from "../../../theme/app.theme";
import Btn from "../../Buttons/Btn";
import { useAppCtx } from "../../../contexts/app.context";
import InputGropedTab from "../../Input/InputGropedTab";
import { useState } from "react";
import { useWriteContract } from "wagmi";
import { parseEther } from "viem";
import { HOST_CONTRACT } from "../../../contracts/host.contract.abi";
import { useAppKitAccount } from "@reown/appkit/react";
import { useMutation } from "@tanstack/react-query";
import useAxiosPrivate from "../../../hooks/usePrivateAxios";
import { waitForTransactionReceipt } from "wagmi/actions";
import { evm_config } from "../../Providers/EvmWalletProvider";
import millify from "millify";
const Revive = () => {
  const { selectedRevaiveItem, setSelectedReviveItem ,setDisableAction,disableAction} = useAppCtx();
  const [amount, setAmount] = useState<any>(null);
  const { writeContractAsync } = useWriteContract();
  const toast = useToast();
  const axiosPrivate = useAxiosPrivate();

  const { address } = useAppKitAccount();

  const { mutate: Rivive } = useMutation({
    mutationFn: (variables: {}) => {
      const res = axiosPrivate.post(`/revive`, variables);
      return res;
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        position: "top",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    setDisableAction(false)

    },
    onError: (err) => {
    setDisableAction(false)

      console.error(err);
      toast({
        title: "Rivive failed",
        description: "Something went wrong!",
        position: "top",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const revive = async () => {

    try {
    setDisableAction(true)

      const transaction: any = await writeContractAsync({
        abi: HOST_CONTRACT.ABI,
        address: HOST_CONTRACT.ADDRESS as `0x${string}`,
        functionName: "transfer",
        args: [import.meta.env.VITE_BANK, parseEther(amount.toString())],
      });

      const res = await transaction;
      if (res) {


        const receipt = await waitForTransactionReceipt(evm_config, {
          hash: res, // Use the hash from the transaction object
        });
        if (receipt) {
          Rivive({
            txnHash: res,
            senderWallet: address,
            amount: amount,
            agentId: 1,
          });
          setAmount(null);
          setSelectedReviveItem({});

        }
      
      }
      console.log(transaction);
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
      boxShadow={" 3px 3px 0px 0px rgba(30, 52, 69, 1);"}
    >
      <Text mb={3} fontWeight={800} textTransform={"uppercase"}>
        Revive {selectedRevaiveItem?.name}
      </Text>
      <Stack gap={2}>
        <Progress
          fill={brandColors.secondary}
          bg={brandColors.primary200}
          size="lg"
          value={((selectedRevaiveItem?.revivalPool / selectedRevaiveItem?.goalAmount) * 100)}
        />
        <Flex justify={"space-between"}>
          <Text fontWeight={700}>{millify(selectedRevaiveItem?.revivalPool)} left</Text>
          <Text fontWeight={700}>{millify(selectedRevaiveItem?.goalAmount)} to revive</Text>
        </Flex>
      </Stack>
      <Flex gap={2} mt={4}>
        <Flex flex={1}>
          <InputGropedTab set={setAmount} value={amount} />
        </Flex>
        <Stack flex={1}>
          <Btn cta={revive} isDisable={disableAction}>Add to Revive</Btn>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Revive;
