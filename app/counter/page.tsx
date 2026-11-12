"use client";
import { useEffect, useState } from "react";


export default function counterpage() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time>=10?0: time+1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <h1 className=" text-5xl mt-70 block mx-auto w-15 h-15 py-2 px-4 rounded-lg">ເວລາ: {time}</h1>;
}
