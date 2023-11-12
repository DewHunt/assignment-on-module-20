import AddEditForm from "@/components/dashboard/services/AddEditForm";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

const serviceInfo = {
  categoryId: 0,
  title: "",
  shortDescription: "",
  longDescription: "",
  img1: "",
  img2: "",
  img3: "",
  img4: "",
  keywords: "",
  type: "",
};

async function getData() {
  return await prismaClient.category.findMany();
}

export default async function page() {
  const categories = await getData();
  return (
    <AddEditForm
      serviceInfo={serviceInfo}
      categories={categories}
      btnName="Save"
      action="add"
    />
  );
}
