import { prisma } from "@/lib/db";
import { endGameSchema } from "@/schemas/questions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse the request body to get the gameId
    const body = await req.json();
    const { gameId } = endGameSchema.parse(body);

    // Check if the game exists in the database
    const game = await prisma.game.findUnique({
      where: {
        id: gameId,
      },
    });

    if (!game) {
      return NextResponse.json(
        { message: "Game not found" },
        { status: 404 }
      );
    }

    // Update the game with the time it ended
    await prisma.game.update({
      where: {
        id: gameId,
      },
      data: {
        timeEnded: new Date(),
      },
    });

    // Respond with a success message
    return NextResponse.json({
      message: "Game ended",
    });
  } catch (error) {
    console.error("Error ending game:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
