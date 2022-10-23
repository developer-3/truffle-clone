import { Head } from "$fresh/runtime.ts";
import CoolShit from "../components/coolshit.tsx";
import Navbar from "../components/nav.tsx";
import Snuffle from "../components/snuffle.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Truffle</title>
      </Head>

      <body class="bg-black m-0 flex flex-col justify-center items-center">
        <Navbar />
        <main class="flex flex-col items-center justify-center w-1/2 mt-36 gap-14">
          <Snuffle />
          <p class="text-white font-main font-bold text-5xl text-center">
            <span class="text-pink-500 font-black">Truffle</span>{" "}
            is building the technology for creators to do
          </p>
          <CoolShit />
          <a class="text-white bg-pink-500 px-28 py-6 font-extrabold rounded-lg cursor-pointer text-2xl transition transform hover:bg-pink-400 hover:scale-105 duration-300">
            Join the waitlist
          </a>
        </main>
      </body>
    </>
  );
}
