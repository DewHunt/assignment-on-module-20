import AddEditForm from "@/components/dashboard/blog/AddEditForm";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

const blogInfo = {
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
      blogInfo={blogInfo}
      categories={categories}
      btnName="Save"
      action="add"
    />
  );
}
