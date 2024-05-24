import { NavProvider } from "@/hooks/usenav";
import "./../styles/index.scss";
import type { AppProps } from "next/app";
import { ServiceProvider } from "@/hooks/serviceContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ServiceProvider>
      <NavProvider>
        <Component {...pageProps} />
      </NavProvider>
    </ServiceProvider>
  );
}
