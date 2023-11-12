import Index from "@/components/dashboard/categories/Index";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function getData() {
  return await prismaClient.category.findMany();
}

export default async function page() {
  const categories = await getData();
  return <Index categories={categories} />;
}
