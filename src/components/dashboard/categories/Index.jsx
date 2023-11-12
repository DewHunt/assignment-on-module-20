"use client";
import { ErrorToast, SuccessToast } from "@/utility/FormHelper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsPencilSquare, BsTrash3Fill } from "react-icons/bs";

const Index = ({ categories }) => {
  const router = useRouter();

  const deleteCategory = async (id) => {
    console.log("id: ", id);
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    };
    const result = await fetch("/api/category/delete", options);
    const resultJson = await result.json();
    if (resultJson["status"] === "success") {
      SuccessToast("Category Deleted Sucessfull");
      router.refresh();
    } else {
      ErrorToast("Request Failed");
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex flex-column justify-content-center">
            <h5>Categories</h5>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-end">
            <Link
              className="btn btn-outline-success"
              href="/dashboard/categories/add">
              Add Category
            </Link>
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <th width="50px">SL</th>
                <th>Name</th>
                <th className="text-center" width="150px">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={category.id}>
                  <td className="text-center">{index + 1}</td>
                  <td>{category.name}</td>
                  <td className="text-center">
                    <Link
                      className="btn btn-warning btn-sm"
                      href={`/dashboard/categories/${category.id}`}>
                      <BsPencilSquare />
                    </Link>
                    <button
                      className="btn btn-danger btn-sm ms-1"
                      onClick={() => deleteCategory(category.id)}>
                      <BsTrash3Fill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
