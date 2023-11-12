import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export async function PUT(req, res) {
  let headerList = headers();
  let id = parseInt(headerList.get("id"));
  try {
    let reqBody = await req.json();
    reqBody.otp = "0";
    const result = await prismaClient.user.update({
      where: { id: id },
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: id, data: e });
  }
}
