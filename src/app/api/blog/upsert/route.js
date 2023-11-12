import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export async function POST(request, response) {
  try {
    const requestBody = await request.json();
    const id = requestBody.id ? requestBody.id : 0;
    const result = await prismaClient.blog.upsert({
      where: { id: id },
      update: requestBody,
      create: requestBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: error.toString() });
  }
}
