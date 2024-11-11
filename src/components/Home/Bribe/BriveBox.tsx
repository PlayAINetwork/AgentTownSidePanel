import { Grid, Stack, Text } from "@chakra-ui/react";
import { assets } from "../../../assets";
import { useState } from "react";
import SelectBox from "../../Input/SelectBox";

import BriveCard from "./BriveCard";
import { agentList } from "../../../DB";
import InputTeb from "../../Input/Input";

const BriveBox = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [amount, setAmount] = useState<any>(null);
console.log(selectedAgent)
  const Cards = [
    {
      id: 1001,
      image: assets.LOGOS.logo,
      tittle: "Attack",
      amount: "200k $POD",
      type: "attack",
    },
    {
      id: 1002,

      image: assets.LOGOS.logo,
      tittle: "KICK",
      amount: "200k $POD",
    },
    {
      id: 1003,

      image: assets.LOGOS.logo,
      tittle: "Dance",
      amount: "200k $POD",
    },
    {
      id: 1004,

      image: assets.LOGOS.logo,
      tittle: "Influence",
      amount: "200k $POD",
    },
  ];

  const [card, setCard] = useState<any>({
    id: 1001,
    image: assets.LOGOS.logo,
    tittle: "Attack",
    amount: "200k $POD",
    type: "attack",
  });
  return (
    <Stack gap={4}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} rowGap={8} pt={4}>
        {Cards?.map((item) => (
          <BriveCard item={item} card={card} setCard={setCard} />
        ))}
        {card?.id === 1004 ? null : (
          <Stack>
            <Text fontWeight={800}>Bribe to</Text>

            <SelectBox placeholder={"From Agent"} align="center">
              <option value="option1">MOG</option>
              <option value="option2">GOAT</option>
            </SelectBox>
          </Stack>
        )}

        {card?.id === 1001 ? (
          <Stack>
            <Text fontWeight={800}>Action to</Text>

            <SelectBox placeholder={"To Agent"} align="center">
              <option value="option1">MOG </option>
              <option value="option2">GOAT </option>
            </SelectBox>
          </Stack>
        ) : null}
      </Grid>
      {card?.id === 1004 ? (
        <Stack gap={2}>
          <SelectBox set={setSelectedAgent} placeholder={"select agent"}>
            {agentList?.map((agent) => (
              <option key={agent.wallet} value={agent.wallet}>
                {agent.name}
              </option>
            ))}
          </SelectBox>
          <InputTeb setInputValue={setAmount} inputvalue={amount} />
        </Stack>
      ) : null}
    </Stack>
  );
};

export default BriveBox;
