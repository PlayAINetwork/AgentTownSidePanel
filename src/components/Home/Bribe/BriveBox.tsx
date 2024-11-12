import { Grid, Stack, Text, useToast } from "@chakra-ui/react";
import { assets } from "../../../assets";
import { useState } from "react";
import SelectBox from "../../Input/SelectBox";

import BriveCard from "./BriveCard";
import InputTeb from "../../Input/Input";
import Btn from "../../Buttons/Btn";
import { useWriteContract } from "wagmi";
import { HOST_CONTRACT } from "../../../contracts/host.contract.abi";
import { parseEther } from "viem";
import useGetAgents from "../../../hooks/useGetAgents";
import { useMutation } from "@tanstack/react-query";
import useAxiosPrivate from "../../../hooks/usePrivateAxios";
import { useAppKitAccount } from "@reown/appkit/react";
import { waitForTransactionReceipt } from "wagmi/actions";
import { evm_config } from "../../Providers/EvmWalletProvider";
import { useAppCtx } from "../../../contexts/app.context";

const BriveBox = () => {
  const [selectedFromAgent, setSelectedFromAgent] = useState(null);
  const [selecteTodAgent, setSelectedToAgent] = useState(null);
  const axiosPrivate = useAxiosPrivate();
  const { address, isConnected } = useAppKitAccount();
  const { setDisableAction,disableAction} = useAppCtx();

  const [promt, setPromt] = useState<any>(null);
  const { writeContractAsync } = useWriteContract();
  const { agentList } = useGetAgents();
  const toast = useToast();

  console.log(selectedFromAgent);
  const Cards = [
    {
      id: 1001,
      image: assets.LOGOS.logo,
      tittle: "Attack",
      amount: "200k $POD",
      tokens: 200000,
      type: "attack",
    },
    // {
    //   id: 1002,
    // tokens: 200000,

    //   image: assets.LOGOS.logo,
    //   tittle: "KICK",
    //   amount: "200k $POD",
    // },
    {
      id: 1003,

      image: assets.LOGOS.logo,
      tittle: "Dance",
      amount: "100k $POD",
      tokens: 100000,
      type: "dance",
    },
    {
      id: 1004,

      image: assets.LOGOS.logo,
      tittle: "Influence",
      amount: "300k $POD",
      tokens: 300000,
      type: "influence",
    },
  ];

  const [card, setCard] = useState<any>({
    id: 1001,
    image: assets.LOGOS.logo,
    tittle: "Attack",
    amount: "200k $POD",
    tokens: 200000,

    type: "attack",
  });

  const { mutate: Bribe } = useMutation({
    mutationFn: (variables: {}) => {
      const res = axiosPrivate.post(`/bribe`, variables);
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
      console.error(err);
      toast({
        title: "Bribe failed",
        description: "Something went wrong!",
        position: "top",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    setDisableAction(false)

    },
  });

  const payBribe = async () => {
    setDisableAction(true)
    if (
      card?.id === 1001 &&
      card?.id === 1003 &&
      card?.id === 1004 &&
      selectedFromAgent == null
    ) {
      toast({
        title: "select From  agent",

        position: "top",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    } else if (card?.id === 1001 && selecteTodAgent == null) {
      toast({
        title: "select To  agent",

        position: "top",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    } else if (card?.id === 1004 && promt === null) {
      toast({
        title: "Enter Promte",

        position: "top",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }

    try {
      const transaction: any = await writeContractAsync({
        abi: HOST_CONTRACT.ABI,
        address: HOST_CONTRACT.ADDRESS as `0x${string}`,
        functionName: "transfer",
        args: [import.meta.env.VITE_BANK, parseEther(card?.tokens?.toString())],
      });

      const res = await transaction;
      console.log("res", res);

      if (res) {
        const receipt = await waitForTransactionReceipt(evm_config, {
          hash: res,
        });

        if (receipt) {
          const veriable: any = {
            action: card?.type,
            txnHash: res,
            senderWallet: address,
            amount: card?.tokens,
            agentId: selectedFromAgent,
          };
          if (card?.type === "attack") veriable.targetAgentId = selecteTodAgent;
          else if (card?.type === "influence")
            veriable.prompt = promt;

          Bribe(veriable);
        }
      }
    } catch (error) {
      toast({
        title: "Transaction failed. Please try again.",
        description: "Something went wrong!",
        position: "top",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error("Transaction error:", error);
    } finally{
    setDisableAction(false)


    }
  };

  return (
    <Stack justifyContent={"space-between"} h={"100%"}>
      <Stack gap={4}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} rowGap={8} pt={4}>
          {Cards?.map((item) => (
            <BriveCard item={item} card={card} setCard={setCard} />
          ))}
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} rowGap={8} pt={4}>
          {card?.id === 1004 ? null : (
            <Stack>
              <Text fontWeight={800}>Bribe to</Text>

              <SelectBox
                placeholder={"From Agent"}
                set={setSelectedFromAgent}
                align="center"
              >
                {agentList?.map((agent: any) => (
                  <option key={agent.wallet} value={agent.id}>
                    {agent.name}
                  </option>
                ))}
              </SelectBox>
            </Stack>
          )}

          {card?.id === 1001 ? (
            <Stack>
              <Text fontWeight={800}>Action to</Text>

              <SelectBox
                placeholder={"To Agent"}
                set={setSelectedToAgent}
                align="center"
              >
                {agentList?.map((agent: any) => (
                  <option key={agent.wallet} value={agent.id}>
                    {agent.name}
                  </option>
                ))}
              </SelectBox>
            </Stack>
          ) : null}
        </Grid>
        {card?.id === 1004 ? (
          <Stack gap={2}>
            <SelectBox set={setSelectedFromAgent} placeholder={"select agent"}>
              {agentList?.map((agent: any) => (
                <option key={agent.wallet} value={agent.id}>
                  {agent.name}
                </option>
              ))}
            </SelectBox>
            <InputTeb setInputValue={setPromt} inputvalue={promt} />
          </Stack>
        ) : null}
      </Stack>
      {isConnected ? <Btn cta={payBribe} isDisable={disableAction}>Pay to Bribe</Btn> : null}
    </Stack>
  );
};

export default BriveBox;
