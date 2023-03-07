"use client";

import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/constants";

export default function Edit() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const generateEdit = async () => {
    const { data } = await axios.post(
      `${BASE_URL}/api/edits`,
      { input },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
        },
      }
    );
    setOutput(data?.success?.text);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-6">
      <h1 className="text-white text-2xl font-bold text center">
        Create a New Edit
      </h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="rounded-md focus:border-2 focus:border-blue-500 w-[50%] h-[30%] p-2"
      />
      <button
        className="py-4 px-6 bg-amber-500 hover:bg-amber-700 text-white rounded-md"
        onClick={generateEdit}
      >
        Generate Edit
      </button>
      {output && <pre className="text-black dark:text-white">{output}</pre>}
    </div>
  );
}
