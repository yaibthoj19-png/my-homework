"use client";

import { useState } from "react";

export default function Likepage() {
  const [count, setLike] = useState(0);

  return (
    <nav>
      <p className="text-4xl text-center pt-100">ເລກທີນັບຈຳນວນການກົດ {count}</p>
      <br />

      <button
        onClick={() => setLike(count + 1)}
        className=" text-5xl block mx-auto bg-green-500 border border-green-500 text-green-100 hover:bg-green-500 w-30 h-15 py-2 px-4 rounded-lg "
      >
        Like
      </button>
    </nav>
  );
}
