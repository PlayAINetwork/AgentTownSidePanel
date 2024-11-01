import { Box, Text } from "@chakra-ui/react";

const LeftSideBtn = ({
  h,
  w,
  color,
}: {
  h?: string;
  w?: string;
  color?: string | null;
}) => (
  <Box
    as="svg"
    viewBox="0 0 9 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "37px"}
    width={w || "9px"}
  >
    <path d="M6 0V3H3V6H0V31H3V34H6V37H9V0H6Z" fill={color ?? "#E4D5CE"} />
  </Box>
);

const RightSideBtn = ({
  h,
  w,
  color,
}: {
  h?: string;
  w?: string;

  color?: string | null;
}) => (
  <Box
    as="svg"
    viewBox="0 0 9 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "37px"}
    width={w || "9px"}
  >
    <path d="M3 37V34H6V31H9V6H6V3H3V0H0V37H3Z" fill={color ?? "#E4D5CE"} />
  </Box>
);

const Btn = ({
  h,
  w,
}: {
  h?: string;
  w?: string;

}) => (
  <Box
    as="svg"
    viewBox="0 0 80 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "37px"}
    width={w || "auto"}
  >
    <path d="M6 0V3H3V6H0V31H3V34H6V37H9V0H6Z" fill="#E4D5CE" />
    <rect width="62" height="37" transform="translate(9)" fill="#E4D5CE"></rect>
    <Text
      as={"text"}
      x="50%"
      y="50%"
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="black"
      fontSize="md"
      fontWeight={700}
    >
      Terminal
    </Text>
    <path d="M74 37V34H77V31H80V6H77V3H74V0H71V37H74Z" fill="#E4D5CE" />
  </Box>
);



const BoxLeft = ({
  h,
  w,
  color,
}: {
  h?: string;
  w?: string;

  color?: string | null;
}) => (
  <Box
    as="svg"
    viewBox="0 0 9 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "40px"}
    width={w || "9px"}
  >
   

    <path d="M6 0V3H3V6H0V9H3H6V6H9V3V0H6Z" fill={color ?? "#1E3445"} />
<rect y="9" width="3" height="22" fill={color ?? "#1E3445"} />
<path d="M6 40V37H3V34H0V31H3H6V34H9V37V40H6Z" fill={color ?? "#1E3445"} />
  </Box>
);

const BoxRight = ({
  h,
  w,
  color,
}: {
  h?: string;
  w?: string;

  color?: string | null;
}) => (
  <Box
    as="svg"
    viewBox="0 0 9 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "40px"}
    width={w || "9px"}
  >

<path d="M3 0V3H6V6H9V9H6H3V6H0V3V0H3Z" fill={color ?? "#1E3445"}/>
<rect width="3" height="22" transform="matrix(-1 0 0 1 9 9)" fill={color ?? "#1E3445"}/>
<path d="M3 40V37H6V34H9V31H6H3V34H0V37V40H3Z" fill={color ?? "#1E3445"}/>



 
  </Box>
);

const BoxRightFill = ({
  h,
  w,
  color,
  fill
}: {
  h?: string;
  w?: string;

  fill?:string | null
  color?: string | null;
}) => (
  <Box
    as="svg"
    viewBox="0 0 9 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "40px"}
    width={w || "9px"}
  >

<path d="M3 0V3H6V6H9V31H6V34H3V37H0V0H3Z" fill={fill ?? "#F24E1E"}/>
<path d="M3 0V3H6V6H9V9H6H3V6H0V3V0H3Z"fill={color ?? "#1E3445"}/>
<rect width="3" height="22" transform="matrix(-1 0 0 1 9 9)" fill={color ?? "#1E3445"}/>
<path d="M3 40V37H6V34H9V31H6H3V34H0V37V40H3Z" fill={color ?? "#1E3445"}/>
  </Box>
);

const BoxLeftFill = ({
  h,
  w,
  color,
  fill
}: {
  h?: string;
  w?: string;

  fill?:string | null
  color?: string | null;
}) => (
  <Box
    as="svg"
    viewBox="0 0 9 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "40px"}
    width={w || "9px"}
  >


<path d="M6 0V3H3V6H0V31H3V34H6V37H9V0H6Z" fill={fill ?? "#F24E1E"}/>
<path d="M6 0V3H3V6H0V9H3H6V6H9V3V0H6Z" fill={color ?? "#1E3445"}/>
<rect y="9" width="3" height="22" fill={color ?? "#1E3445"}/>
<path d="M6 40V37H3V34H0V31H3H6V34H9V37V40H6Z" fill={color ?? "#1E3445"}/>
  </Box>
);
const TopLeftW = ({
  h,
  w,
  color,
}: {
  h?: string;
  w?: string;

  color?: string | null;
}) => (
  <Box
    as="svg"
    viewBox="0 0 10 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "9px"}
    width={w || "10px"}
  >
<path d="M6.5 0V3H3.5V6H0.5V9H3.5H6.5V6H9.5V3V0H6.5Z" fill={color ?? "#1E3445"} />
  
  </Box>
);

const TopRigntW = ({
  h,
  w,
  color,
}: {
  h?: string;
  w?: string;

  color?: string | null;
}) => (
  <Box
    as="svg"
    viewBox="0 0 10 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "9px"}
    width={w || "10px"}
  >
<path d="M3.5 0V3H6.5V6H9.5V9H6.5H3.5V6H0.5V3V0H3.5Z" fill={color ?? "#1E3445"}/>

  
  </Box>
);


const BottomLeftW = ({
  h,
  w,
  color,
}: {
  h?: string;
  w?: string;

  color?: string | null;
}) => (
  <Box
    as="svg"
    viewBox="0 0 10 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "9px"}
    width={w || "10px"}
  >
<path d="M6.5 9V6H3.5V3H0.5V0H3.5H6.5V3H9.5V6V9H6.5Z" fill={color ?? "#1E3445"}/>

  
  </Box>
);


const BottomRigntW = ({
  h,
  w,
  color,
}: {
  h?: string;
  w?: string;

  color?: string | null;
}) => (
  <Box
    as="svg"
    viewBox="0 0 10 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "9px"}
    width={w || "10px"}
  >
<path d="M3.5 9V6H6.5V3H9.5V0H6.5H3.5V3H0.5V6V9H3.5Z" fill={color ?? "#1E3445"}/>

  
  </Box>
);


const w = ({
  h,
  w,
}: {
  h?: string;
  w?: string;

}) => (
  <Box
    as="svg"
    viewBox="0 0 7 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "6px"}
    width={w || "7px"}
  >
<path d="M6.5 0H0.5V3H3.5V6H6.5V0Z" fill="#F9F9F9"/>

  
  </Box>
);



const CLIPARTS = {
  w,
  LeftSideBtn,
  RightSideBtn,
  Btn,
  BoxLeft,
  BoxRight,
  TopRigntW,
  TopLeftW,
  BottomLeftW,
  BottomRigntW,
  BoxRightFill,
  BoxLeftFill



};

export default CLIPARTS;
