// @ts-nocheck
"use client";
import Image from "next/image";
import Search from "./components/search";

import Results from "./components/results";
import InitialDisplay from "./components/initialDisplay";
import { Suspense } from "react";
import CardSkeleton from "./components/skeletons";
import React, { useState } from "react";
import RefactoredPage from "./refactoredpage";
export default function Home() {
  const [searchKeyWord, setSearchKeyword] = useState("");
  const [videos, setVideos] = useState([]);

  return <RefactoredPage />;
}
