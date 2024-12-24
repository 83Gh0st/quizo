"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import D3WordCloud from "react-d3-cloud";

type Props = {
  formattedTopics: { text: string; value: number }[];
};

const fontSizeMapper = (word: { value: number }) =>
  Math.log2(word.value) * 5 + 16;

const WordCloud = ({ formattedTopics }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  
  // Track if the component has mounted (to prevent SSR issues)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set mounted to true once component has mounted
  }, []);

  if (!mounted) {
    // Optionally, return null or a loading state during the first render (SSR phase)
    return null;
  }

  // Fallback to default topics if formattedTopics is empty or undefined
  const topicsToDisplay = formattedTopics?.length ? formattedTopics : [
    { text: "Cars", value: 10 },
    { text: "Application Development", value: 15 },
    { text: "Cloud Computing", value: 20 },
    {text: "Gen AI", value: 25},
    {text: "Apple-Iphone", value: 5},
    {text: "Iot", value: 12}


  ];

  return (
    <D3WordCloud
      data={topicsToDisplay}
      height={550}
      font="Times"
      fontSize={fontSizeMapper}
      rotate={0}
      padding={10}
      fill={theme.theme === "dark" ? "white" : "dark"}
      onWordClick={(e, d) => {
        router.push("/quiz?topic=" + d.text);
      }}
    />
  );
};

export default WordCloud;
