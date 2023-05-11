import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

import createEmotionCache from "../config/createEmotionCache";
import theme from "../config/theme";

const clientSideEmotionCache = createEmotionCache();
import Layout from "@/components/global/layout";

export default function App({ Component, pageProps }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
