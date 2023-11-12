"use client";
import parse from "html-react-parser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsPencilSquare, BsTrash3Fill } from "react-icons/bs";

const Index = ({ blogs }) => {
  const router = useRouter();

  const deleteBlog = async (id) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    };
    const result = await fetch("/api/blog/delete", options);
    const resultJson = await result.json();
    if (resultJson["status"] === "success") {
      SuccessToast("Blog Deleted Sucessfull");
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
            <h5>Blogs</h5>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-end">
            <Link
              className="btn btn-outline-success"
              href="/dashboard/blog/add">
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
                <th>Title</th>
                <th>Category</th>
                <th>Short Description</th>
                <th width="250px">Images</th>
                <th>Keywords</th>
                <th className="text-center" width="150px">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={blog.id}>
                  <td className="text-center">{index + 1}</td>
                  <td>{blog.title}</td>
                  <td>{parse(`${blog.Category.name}`)}</td>
                  <td width="500px">{parse(`${blog.shortDescription}`)}</td>
                  <td width="350px" className="text-center">
                    <img
                      src={blog.img1}
                      width="70px"
                      height="70px"
                      className="m-1"
                    />
                    <img
                      src={blog.img2}
                      width="70px"
                      height="70px"
                      className="m-1"
                    />
                    <img
                      src={blog.img3}
                      width="70px"
                      height="70px"
                      className="m-1"
                    />
                    <img
                      src={blog.img4}
                      width="70px"
                      height="70px"
                      className="m-1"
                    />
                  </td>
                  <td>{blog.keywords}</td>
                  <td>{blog.type}</td>
                  <td className="text-center">
                    <Link
                      className="btn btn-warning btn-sm"
                      href={`/dashboard/blog/${blog.id}`}>
                      <BsPencilSquare />
                    </Link>
                    <button
                      className="btn btn-danger btn-sm ms-1"
                      onClick={() => deleteBlog(blog.id)}>
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
