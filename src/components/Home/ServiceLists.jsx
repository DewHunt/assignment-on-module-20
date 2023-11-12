import parse from "html-react-parser";
import Link from "next/link";

const ServiceLists = ({ services }) => {
  return (
    <div className="mb-2">
      <h5>Services</h5>
      <hr />
      <div className="row">
        {services.map((service) => (
          <div
            key={service.id}
            className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 mb-2">
            <div className="card">
              <div className="card-body text-justify">
                <h4>{service.title}</h4>
                <hr />
                <Link href={`/services/${service.id}`}>
                  {parse(`${service.shortDescription}`)}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceLists;
