"use client";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament, selectValue } from "../slice/counterSlice";

export default function Home() {
  const count = useSelector(selectValue);
  const dispatch = useDispatch();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> Value of the count is {count}</h1>
      <div className="flex flex-row space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(increament())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(decreament())}
        >
          Decrement
        </button>
      </div>
    </main>
  );
}
