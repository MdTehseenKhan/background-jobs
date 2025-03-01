'use client';

import { triggerHelloWorld, sendInngestEvent } from "./actions";

export default function Home() {
  return (
    <div className="h-screen grid place-items-center bg-gray-800">
      <button onClick={triggerHelloWorld} className="bg-white text-black px-4 py-2 rounded-md cursor-pointer">
        Trigger Hello World
      </button>
      <button onClick={sendInngestEvent} className="bg-white text-black px-4 py-2 rounded-md cursor-pointer">
        Send Inngest Event
      </button>
    </div>
  );
}
