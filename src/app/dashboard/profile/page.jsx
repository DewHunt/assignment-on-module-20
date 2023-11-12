import ProfileForm from "@/components/User/ProfileForm";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

const prismaClient = new PrismaClient();

async function getData() {
  let headerList = headers();
  console.log("headerList: ", headerList);
  let userId = parseInt(headerList.get("id"));
  return await prismaClient.user.findUnique({ where: { id: userId } });
}

export default async function page() {
  const data = await getData();
  return <ProfileForm propData={data} />;
}
