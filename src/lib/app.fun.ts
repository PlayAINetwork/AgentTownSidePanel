export function trimWords(address: string | undefined, number: number) {
    // Check if the address is a valid string
    if (typeof address !== "string") {
      return "Invalid address";
    }
    if (address.length <= number + 8) {
      return address;
    }
    // Trim the address and add ellipses in the middle
    const trimmedAddress =
      address.substring(0, number) + "....." + address.slice(-8);
  
    return trimmedAddress;
  }

  export const convertTokeneformatEther= (amount:any, desimal=18)=>{
    if(amount)
   return (BigInt(amount) / BigInt(10 ** desimal)).toString();

  }