// 1. import `extendTheme` function
import {
  cssVar,
  defineStyle,
  defineStyleConfig,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  heading: `var(--font-nunito)`,
  body: `var(--font-nunito)`,
  secondary: `var(--font-silkscreen)`,

};

const colors = {
  brand: {
    primary: cssVar("primary").reference,
    primary100: cssVar("primary100").reference,
    primary200: cssVar("primary200").reference,
    primary400: cssVar("primary400").reference,
    primary700: cssVar("primary700").reference,
    text:cssVar("text").reference,

    secondary: cssVar("secondary").reference,
    bg: cssVar("bg").reference,
    muted: cssVar("muted").reference,
    black: cssVar("black").reference,
    white: cssVar("white").reference,
    stroke: cssVar("stroke").reference,
    primary50: "rgba(238, 75, 75, 0.3)",
    gdPrimary:
      "linear-gradient(103deg, #F86C6C 0%, #E93232 98.68%), linear-gradient(103deg, #9765AA 0%, #FF8AFD 98.68%), #FFF;",
    gdSecondary: "linear-gradient(90deg, #3C3C3C 0%, #101010 100%)",
  },
};

const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");

const red = defineStyle({
  _light: {
    [$startColor.variable]: "colors.brand.primary100", //changing startColor to red.100
    [$endColor.variable]: "colors.brand.primary50", // changing endColor to red.400
  },
  _dark: {
    [$startColor.variable]: "colors.brand.primary100", //changing startColor to red.800
    [$endColor.variable]: "colors.brand.primary50", // changing endColor to red.600
  },
});
export const skeletonTheme = defineStyleConfig({
  variants: { red },
});

// 3. extend the theme

const useChakraTheme = () => {
  const components = {
    Switch: {
      variants: {
        // 4. We can override existing variants
        base: () => ({
          container: {
            border: "1px solid brand.secondary",

            // ...
          },
          thumb: {
            bg: "#444444",

            border: "1px solid brand.secondary",
            _checked: {
              bg: "#fff",
            },
          },
          track: {
            bg: "#fff",
            border: "2px solid #444444",
            _checked: {
              bg: "#444444",
            },
          },
        }),
      },

      defaultProps: {
        // Then here we set the base variant as the default
        variant: "base",
      },
    },
    Button: {
      variants: {
        // 4. We can override existing variants
        base: () => ({
          bg: colors.brand.secondary,
          color: "#fff",
          fontWeight: "600",
          borderRadius: "8px",
          px: "6",
          textTransform:"uppercase",

          _hover: {
            opacity: 0.9,
            _disabled: {
              _hover: {
                background: colors.brand.secondary,
                opacity: 0.7,
              },
            },
          },
        }),
        secondary: () => ({
          bg: "transparent",
          color: colors.brand.primary,
          fontWeight: "600",
          border: `1.5px solid ${colors.brand.primary}`,
          borderRadius: "8px",
          _hover: {
            // opacity: 0.7,
            background: colors.brand.primary100,

            _disabled: {
              _hover: {
                // background: colors.brand.secondary,
                opacity: 0.7,
              },
              background: colors.brand.white,
            },
          },
        }),
        text: () => ({
          bg: "transparant",
          color: colors.brand.text,
          fontWeight: "500",
          borderRadius: "0px",
          px: "0",
          textTransform:"uppercase",


          _hover: {
            opacity: 0.9,
            color: colors.brand.secondary,

            _disabled: {
              _hover: {
                background: colors.brand.secondary,
                opacity: 0.7,
              },
            },
          },
        }),
      },

      defaultProps: {
        // Then here we set the base variant as the default
        variant: "base",
      },
    },
    
    Skeleton: skeletonTheme,
  };

  const styles = {
    global: {
      ":root": {
        //fonts
        "--font-primary-bold": "'Primary Bold'",
        "--font-primary-bold-italic": "'Primary Bold Italic'",
        "--font-primary-semibold": "'Primary SemiBold'",
        "--font-primary-semibold-italic": "'Primary SemiBold Italic'",
        "--font-primary-regular": "'Primary Regular'",
        "--font-primary-regular-italic": "'Primary Regular Italic'",
      },
      // styles for the `body`
      body: () => ({
        bgColor: brandColors.bg,
        color: brandColors.text,
      }),
    },
  };
  const theme = extendTheme({
    config,
    styles,
    colors,
    fonts,
    components,
  });
  return { theme: theme };
};

export const brandColors = colors.brand;
export default useChakraTheme;
