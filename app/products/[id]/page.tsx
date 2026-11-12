"use client";

import { Suspense } from "react";
import { useParams } from "next/navigation";

function ProductDetails() {
  const params = useParams<{ id: string }>();

  return (
    <main className="text-5xl mt-70 items-center justify-center text-center block mx-auto w-15 h-15 py-2 rounded-lg">
      <p className="">Product ID: {params.id}</p>
    </main>
  );
}

export default function ProductPage() {
  return (
    <Suspense fallback={<main className="text-5xl mt-70 text-center">Loading product...</main>}>
      <ProductDetails />
    </Suspense>
  );
}
