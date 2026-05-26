import React, { Suspense } from "react";
import SearchClient from "./SearchClient";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-[200px]" />}> 
      <SearchClient />
    </Suspense>
  );
}