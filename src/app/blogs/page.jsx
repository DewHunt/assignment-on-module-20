import { PrismaClient } from "@prisma/client";
import parse from "html-react-parser";
import Link from "next/link";

async function getData() {
  const prisma = new PrismaClient();
  let blogs = await prisma.blog.findMany({
    orderBy: { id: "desc" },
  });
  return blogs;
}

const Page = async (props) => {
  const blogs = await getData();

  return (
    <div className="container mt-5">
      <h4>Blogs</h4>
      <hr />
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 py-1">
            <div className="card">
              <img
                className="card-img-top"
                width="250px"
                height="250px"
                src={blog.img1}
              />
              <div className="card-body">
                <h4 className="card-title">
                  <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                  <hr />
                </h4>
                <div className="card-text text-justify">
                  <Link href={`/blogs/${blog.id}`}>
                    {parse(`${blog.shortDescription}`)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Page;
