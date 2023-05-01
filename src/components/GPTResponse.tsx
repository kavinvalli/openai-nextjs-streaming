"use client";
import { responseAtom } from "@/utils/store";
import { useAtom } from "jotai";

export default function GPTResponse() {
  const [response] = useAtom(responseAtom);

  return (
    <div className="bg-slate-800 p-12 rounded-md w-full max-w-lg">
      <p className="text-slate-200">
        {response ? response : "Response goes here..."}
      </p>
    </div>
  );
}
