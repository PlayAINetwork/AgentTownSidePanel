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


  export const parseDataString = (dataString: string) => {
    // First check if the string starts with a policy override
    if (dataString.startsWith('<POLICY_OVERRIDE>')) {
    // console.log(dataString)
  
      // Find the first occurrence of a JSON-like string
      const jsonStart = dataString.indexOf('{"');
      if (jsonStart === -1) return null;
      
      // Extract the JSON portion
      // const jsonPortion = dataString.slice(jsonStart);
      
      try {
        return dataString;
      } catch (error) {
        console.log("Error parsing JSON portion:", error);
        return null;
      }
    }
    
    // If no policy override, try parsing the whole string
    try {
      return JSON.parse(dataString);
    } catch (error) {
      // If parsing fails, try to find any JSON object in the string
      const match = dataString.match(/(\{.*\})/);
      if (match) {
        try {
          return JSON.parse(match[0]);
        } catch (innerError) {
          console.log("Error parsing matched JSON:", innerError);
          return null;
        }
      }
      
      console.log("Error parsing JSON:", error);
      return null;
    }
  };

  export function removeTimestamp(text:string) {
    // Use regex to remove the initial text within square brackets
    return text.replace(/^\[.*?\]\s*/, '');
  }
  