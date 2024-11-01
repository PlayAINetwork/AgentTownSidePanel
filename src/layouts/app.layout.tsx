import {  Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <Stack >
     
        <Outlet />
    </Stack>
  );
};
