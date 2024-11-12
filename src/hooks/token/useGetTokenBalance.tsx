import { useReadContract } from 'wagmi';
import { HOST_CONTRACT } from '../../contracts/host.contract.abi';
import { useAppKitAccount } from '@reown/appkit/react';

const useGetTokenBalance = () => {
    const { address  } = useAppKitAccount();

    const tokenBalance = useReadContract({
        abi: HOST_CONTRACT.ABI,
        address: HOST_CONTRACT.ADDRESS as `0x${string}`,
        functionName: "balanceOf",
        args: [address]as any,
      });
  return{tokenBalance}
}

export default useGetTokenBalance