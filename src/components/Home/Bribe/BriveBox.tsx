import {  Grid, Stack, Text } from "@chakra-ui/react";
import { assets } from "../../../assets";
import { useState } from "react";
import SelectBox from "../../Input/SelectBox";

import BriveCard from "./BriveCard";

const BriveBox = () => {
  const Cards = [
    {
      id: 1001,
      image: assets.LOGOS.logo,
      tittle: "KICK",
      amount: "200k $POD",
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
      tittle: "KICK",
      amount: "200k $POD",
    },
    {
      id: 1004,

      image: assets.LOGOS.logo,
      tittle: "KICK",
      amount: "200k $POD",
    },
  ];

  const [card, setCard] = useState<any>(null);
  return (
    <Stack gap={4}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} rowGap={8}>
        <Stack>
          <Text fontWeight={800}>Bribe to</Text>

          <SelectBox placeholder={"From Agent"} align="center">
            <option value="option1">MOG</option>
            <option value="option2">GOAT</option>
          </SelectBox>
        </Stack>
        <Stack>
          <Text fontWeight={800}>Action to</Text>

          <SelectBox placeholder={"To Agent"} align="center">
            <option value="option1">MOG </option>
            <option value="option2">GOAT </option>
          </SelectBox>
        </Stack>
        {Cards?.map((item) => (
         <BriveCard item={item}  card={card} setCard={setCard}/>
        ))}
      </Grid>
    </Stack>
  );
};

export default BriveBox;
