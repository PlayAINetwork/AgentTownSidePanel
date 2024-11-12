import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "../axios";

const useGetAgents = () => {
  const { isPending, data } = useQuery({
    queryKey: ['AGENTLIST'],
    queryFn: () => {
      const res =   axiosPrivate.get(`/agents`);
      return res;
    },
  });

  return {
    agentList: data?.data,
    agentListLoding: isPending,
  };
};

export default useGetAgents;
