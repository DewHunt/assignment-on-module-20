import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export async function POST(request, response) {
  try {
    const requestBody = await request.json();
    const id = requestBody.id;
    console.log("id: ", id);
    const result = await prismaClient.blog.delete({
      where: { id: id },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: error.toString() });
  }
}
