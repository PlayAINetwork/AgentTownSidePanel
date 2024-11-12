import { useMutation } from "@tanstack/react-query";
import { axiosPrivate } from "../../axios";
import { useToast } from "@chakra-ui/react";
import { useAppCtx } from "../../contexts/app.context";
import Cookies from "js-cookie";

function useWalletConnect() {
  const toast = useToast();
  const { disconnectUser, updateJwt } = useAppCtx();

  const { mutate: connectWallet, isPending: connectingWallet } = useMutation({
    mutationFn: (variables: {}) => {
      const res = axiosPrivate.post(`/auth`, variables);
      return res;
    },
    onSuccess: (data: any) => {
      Cookies.set("token", data?.data?.token, { expires: 1 }); // Set cookie to expire in 7 days
      console.log(data?.data?.token);
      updateJwt(data?.data?.token);

      toast({
        title: "User Logged In Successfully!",
        position: "top",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    onError: () => {
      disconnectUser();
      toast({
        title: "Error logging in!",
        description: "Something went wrong!",
        position: "top",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  return {
    connectWallet,
    connectingWallet,
  };
}

export default useWalletConnect;
