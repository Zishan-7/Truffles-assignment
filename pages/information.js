import Head from "next/head";
import InformationPage from "@/components/information/InformationPage";

export default function information() {
  return (
    <>
      <Head>
        <title>Information</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InformationPage />
    </>
  );
}
