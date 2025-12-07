"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const { data, error } = await supabase.from("Products").select("*");
      if (error) {
        console.log(error);
      } else {
        setProducts(data);
      }
    }
    loadData();
  }, []);

  return (
    <div className="bg-main-blue text-white h-screen">
      <h1 className="text-5xl text-center border font-semibold">
        Rent what you need. Earn from what you own.
      </h1>
      <pre>{JSON.stringify(products, null, 2)}</pre>
      <button className="rounded-sm bg-accent-blue px-4 py-2 text-3xl cursor-pointer">
        click me!
      </button>
      <input
        type="text"
        placeholder="What are you looking for?"
        className="block bg-white placeholder-gray-text text-5xl"
      />
    </div>
  );
}
