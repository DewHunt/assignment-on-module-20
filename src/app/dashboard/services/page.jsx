import Index from "@/components/dashboard/services/Index";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function getData() {
  return await prismaClient.service.findMany({
    include: {
      Category: true,
    },
  });
}

export default async function page() {
  const services = await getData();
  return <Index services={services} />;
}
