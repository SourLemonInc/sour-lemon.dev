// Note: このファイルを編集したあとは gatsby の再起動が必要になる
// https://twitter.com/aumy_f/status/1344192074531233796
// https://zenn.dev/aumy/scraps/be4fed3f89ae99
// https://www.gatsbyjs.com/plugins/@chakra-ui/gatsby-plugin/#customizing-the-theme

// src/@chakra-ui/gatsby-plugin/theme.ts
import { extendTheme } from '@chakra-ui/react';
const theme = {
  config: {
    // initialColorMode: "dark"
    initialColorMode: 'light',
  },
  colors: {
    primary: 'rebeccapurple',
  },
};

export default extendTheme(theme);
