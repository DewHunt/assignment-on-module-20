import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    reqBody.otp = "0";
    const result = await prismaClient.user.create({ data: reqBody });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
