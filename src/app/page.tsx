import { Inter } from "next/font/google";
import Form from "@/components/Form";
import GPTResponse from "@/components/GPTResponse";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={
        "flex flex-col h-full min-h-screen w-full items-center justify-center bg-slate-900 gap-4 p-24 " +
        inter.className
      }
    >
      <h1 className="text-5xl text-slate-200 font-bold max-w-xl text-center">
        Ask a question and get a ChatGPT type response.
      </h1>
      <div className="bg-slate-800 p-12 rounded-md w-full max-w-lg">
        <Form />
      </div>
      <h2 className="text-3xl text-slate-200 font-bold max-w-xl text-center">
        Response
      </h2>
      <GPTResponse />
    </main>
  );
}
