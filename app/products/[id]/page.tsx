"use client"
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams<{ id: string }>();

  return (
    <main className=" text-5xl mt-70 items-center justify-center text-center block mx-auto w-15 h-15 py-2 rounded-lg  ">
     
      <p className="">Product ID: {params.id}</p>
    </main>
  );
}
