import { PrismaClient } from "@prisma/client";
import parse from "html-react-parser";
import Link from "next/link";

async function getData(id) {
  const prisma = new PrismaClient();
  let services = await prisma.service.findMany({
    orderBy: { id: "desc" },
  });
  return services;
}

const Page = async (props) => {
  const services = await getData(props.searchParams["id"]);

  return (
    <div className="container mt-5">
      <h4>Services</h4>
      <hr />
      <div className="row">
        {services.map((service) => (
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 py-1">
            <div className="card">
              <img
                className="card-img-top"
                width="250px"
                height="250px"
                src={service.img1}
              />
              <div className="card-body">
                <h4 className="card-title">
                  <Link href={`services/${service.id}`}>{service.title}</Link>
                  <hr />
                </h4>
                <div className="card-text text-justify">
                  <Link href={`services/${service.id}`}>
                    {parse(`${service.shortDescription}`)}
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
