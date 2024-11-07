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


const Hart = ({
  h,
  w,
  isActive
}: {
  h?: string;
  w?: string;
  isActive?:boolean

}) => (
  <Box
    as="svg"
    viewBox="0 0 25 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "23px"}
    width={w || "25px"}
  >
    {
      isActive?
<path d="M22.1122 5.80576V11.2682H19.381V13.9995H16.6497V16.7305H13.9185V19.4617H11.1873V16.7305H8.45602V13.9995H5.72489V11.2682H2.99365V5.80576H5.72489V8.537H8.45602V5.80576H5.72489V3.0744H11.1873V5.80576H13.9185V3.0744H19.381V5.80576H22.1122Z" fill="#ED1C24"/>

      :null
    }
<path d="M11.1872 0.343445V3.07433H5.72485V0.343445H11.1872Z" fill="#951924"/>
<path d="M19.3812 0.343445V3.07433H13.9187V0.343445H19.3812Z" fill="#951924"/>
<path d="M22.1123 3.0744V5.80576H19.3811V3.0744H22.1123Z" fill="#951924"/>
<path d="M13.9187 3.0744V5.80576H11.1875V3.0744H13.9187Z" fill="#951924"/>
<path d="M5.72489 3.0744V5.80576H2.99365V3.0744H5.72489Z" fill="#951924"/>
<path d="M11.1875 16.7305V19.4617H8.4563V16.7305H11.1875Z" fill="#951924"/>
<path d="M13.9187 19.4617V22.1931H11.1875V19.4617H13.9187Z" fill="#951924"/>
<path d="M16.6499 16.7305V19.4617H13.9187V16.7305H16.6499Z" fill="#951924"/>
<path d="M24.8433 5.80573V11.2682H22.1123V5.80573H24.8433Z" fill="#951924"/>
<path d="M22.1123 11.2682V13.9995H19.3811V11.2682H22.1123Z" fill="#951924"/>
<path d="M19.3814 13.9995V16.7305H16.6501V13.9995H19.3814Z" fill="#951924"/>
<path d="M2.99394 5.80573V11.2682H0.262695V5.80573H2.99394Z" fill="#951924"/>
<path d="M5.72489 11.2682V13.9995H2.99365V11.2682H5.72489Z" fill="#951924"/>
<path d="M8.45598 13.9995V16.7305H5.72485V13.9995H8.45598Z" fill="#951924"/>

  
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



const BoxRightCard = ({
  h,
  w,
  fill
}: {
  h?: string;
  w?: string;

  fill?:string | null
  color?: string | null;
}) => (
  <Box
    as="svg"
    viewBox="0 0 24 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "68px"}
    width={w || "24px"}
  >

<path d="M8 68V62.9H16V57.8H24V10.2H16V5.1H8V0H0V68H8Z" fill={fill??"#D9D9D9"}/>

  </Box>
);

const BoxLeftCard = ({
  h,
  w,
  fill
}: {
  h?: string;
  w?: string;

  fill?:string | null
  color?: string | null;
}) => (
  <Box
    as="svg"
    viewBox="0 0 24 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={h || "68px"}
    width={w || "24px"}
  >

<path d="M16 0V5.1H8V10.2H0V57.8H8V62.9H16V68H24V0H16Z" fill={fill??"#D9D9D9"}/>

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
  BoxLeftFill,
  Hart,
  BoxLeftCard,
  BoxRightCard



};

export default CLIPARTS;
