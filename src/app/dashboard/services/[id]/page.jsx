import AddEditForm from "@/components/dashboard/services/AddEditForm";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function getServiceInfo(id) {
  return await prismaClient.service.findUnique({
    where: { id: id },
  });
}

async function getCategoryInfo() {
  return await prismaClient.category.findMany();
}

export default async function page({ params }) {
  const id = parseInt(params.id);
  const serviceInfo = await getServiceInfo(id);
  const categories = await getCategoryInfo();
  return (
    <AddEditForm
      serviceInfo={serviceInfo}
      categories={categories}
      btnName="Update"
      action="update"
    />
  );
}
