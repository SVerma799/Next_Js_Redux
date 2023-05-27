"use client";
import { useSelector, useDispatch } from "react-redux";
import { increament, decrement } from "@/slice/counterSlice";
import type { RootState } from "./store";
export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>The Value of count is {count}</h1>
    </main>
  );
}
