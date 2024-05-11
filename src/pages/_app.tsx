import { NavProvider } from "@/hooks/usenav";
import "./../styles/index.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavProvider>
      <Component {...pageProps} />
    </NavProvider>
  );
}
