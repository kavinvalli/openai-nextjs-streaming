"use client";
import { responseAtom } from "@/utils/store";
import { useAtom } from "jotai";
import { useState } from "react";

export default function Form() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [_response, setResponse] = useAtom(responseAtom);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("/api/response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input }),
    });

    if (!res.ok) throw new Error(res.statusText);

    const data = res.body;
    if (!data) return;

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setResponse((prev) => prev + chunkValue);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-64 bg-slate-800 border border-slate-600 text-slate-200 p-4"
      ></textarea>
      <button
        className="w-full bg-slate-900 py-3 font-bold text-slate-200"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Ask"}
      </button>
    </form>
  );
}
