import AddEditForm from "@/components/dashboard/blog/AddEditForm";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function getBlogInfo(id) {
  return await prismaClient.blog.findUnique({
    where: { id: id },
  });
}

async function getCategoryInfo() {
  return await prismaClient.category.findMany();
}

export default async function page({ params }) {
  const id = parseInt(params.id);
  const blogInfo = await getBlogInfo(id);
  const categories = await getCategoryInfo();
  return (
    <AddEditForm
      blogInfo={blogInfo}
      categories={categories}
      btnName="Update"
      action="update"
    />
  );
}
