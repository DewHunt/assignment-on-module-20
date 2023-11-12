import { PrismaClient } from "@prisma/client";
import parse from "html-react-parser";

async function getData(id) {
  const prisma = new PrismaClient();
  let blogInfo = await prisma.blog.findUnique({
    where: { id: id },
  });
  return blogInfo;
}

const Page = async ({ params }) => {
  const id = parseInt(params.id);
  const blogInfo = await getData(id);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-justify">{blogInfo.title}</h4>
              <div className="card-text text-justify">
                {parse(`${blogInfo.longDescription}`)}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
          <img
            className="card-img-top m-1"
            width="200px"
            height="200px"
            src={blogInfo.img1}
          />
          <img
            className="card-img-top m-1"
            width="200px"
            height="200px"
            src={blogInfo.img2}
          />
          <img
            className="card-img-top m-1"
            width="200px"
            height="200px"
            src={blogInfo.img3}
          />
          <img
            className="card-img-top m-1"
            width="200px"
            height="200px"
            src={blogInfo.img4}
          />
        </div>
      </div>
    </div>
  );
};
export default Page;
