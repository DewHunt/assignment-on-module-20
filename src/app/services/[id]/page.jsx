import { PrismaClient } from "@prisma/client";
import parse from "html-react-parser";

async function getData(id) {
  const prisma = new PrismaClient();
  let serviceInfo = await prisma.service.findUnique({
    where: { id: id },
  });
  return serviceInfo;
}

const Page = async ({ params }) => {
  const id = parseInt(params.id);
  const serviceInfo = await getData(id);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-justify">{serviceInfo.title}</h4>
              <div className="card-text text-justify">
                {parse(`${serviceInfo.longDescription}`)}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
          <img
            className="card-img-top m-1"
            width="200px"
            height="200px"
            src={serviceInfo.img1}
          />
          <img
            className="card-img-top m-1"
            width="200px"
            height="200px"
            src={serviceInfo.img2}
          />
          <img
            className="card-img-top m-1"
            width="200px"
            height="200px"
            src={serviceInfo.img3}
          />
          <img
            className="card-img-top m-1"
            width="200px"
            height="200px"
            src={serviceInfo.img4}
          />
        </div>
      </div>
    </div>
  );
};
export default Page;
