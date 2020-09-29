import Head from "next/head";
import BeerContainer from "../components/BeerContainer";
import styles from "../styles/Home.module.css";
import { BeerProvider } from "../store/BeerContext";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <BeerProvider>
      <div className={styles.container}>
        <Head>
          <title>We Got BEER</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>We got BEER!</h1>
        <Banner />
        <BeerContainer />
      </div>
    </BeerProvider>
  );
}
