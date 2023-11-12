import Index from "@/components/dashboard/blog/Index";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function getData() {
  return await prismaClient.blog.findMany({
    include: {
      Category: true,
    },
  });
}

export default async function page() {
  const blogs = await getData();
  return <Index blogs={blogs} />;
}
