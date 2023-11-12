import AddEditForm from "@/components/dashboard/categories/AddEditForm";

const categoryInfo = { name: "" };

export default async function page() {
  return (
    <AddEditForm categoryInfo={categoryInfo} btnName="Save" action="add" />
  );
}
