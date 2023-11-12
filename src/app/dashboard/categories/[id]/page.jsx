import AddEditForm from "@/components/dashboard/categories/AddEditForm";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function getData(id) {
  return await prismaClient.category.findUnique({
    where: { id: id },
  });
}

export default async function page({ params }) {
  const id = parseInt(params.id);
  const data = await getData(id);
  return <AddEditForm categoryInfo={data} btnName="Update" action="update" />;
}
