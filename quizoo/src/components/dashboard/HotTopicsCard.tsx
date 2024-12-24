import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WordCloud from "../WordCloud";
import { prisma } from "@/lib/db";
import { Prisma } from "@prisma/client";

type Props = {};

const HotTopicsCard = async (props: Props) => {
  try {
    // Access the `topicCount` model with the correct name as defined in your schema
    const topics = await prisma.topicCount.findMany({});
    
    // Format the topics to match the expected structure for WordCloud
    const formattedTopics = topics.map((topic) => ({
      text: topic.topic,  // 'topic' field from your model
      value: topic.count,  // 'count' field from your model
    }));

    return (
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
          <CardDescription>
            Click on a topic to start a quiz on it.
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          {/* Pass the formatted topics to WordCloud component */}
          <WordCloud formattedTopics={formattedTopics} />
        </CardContent>
      </Card>
    );
  } catch (error) {
    console.error("Error fetching topics:", error);
    return <div>Error loading topics</div>;  // Optionally display an error message
  }
};

export default HotTopicsCard;
