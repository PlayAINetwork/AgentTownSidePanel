import { useMutation } from "@tanstack/react-query";
// import { axiosPrivate } from "../axios";
import { useToast } from "@chakra-ui/react";
import { axiosPrivate } from "../axios";
import { useAppCtx } from "../contexts/app.context";

const useTip = () => {
  const toast = useToast();
  const { setAmount,setSelectedAgent, setsTipAgent,setDisableAction } = useAppCtx();


  const { mutate: tip, isPending: tipping } = useMutation({
    mutationFn: (variables: {}) => {
      const res = axiosPrivate.post(`/tip`, variables);
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
      setsTipAgent(false);
      setAmount(null);
      setSelectedAgent(null);
      setDisableAction(false)
    },
    onError: (err) => {
        console.error(err)
      toast({
        title: "Tip failed",
        description: "Something went wrong!",
        position: "top",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setDisableAction(false)

    },
  });

  return {
    tip,
    tipping,
  };
};

export default useTip;
