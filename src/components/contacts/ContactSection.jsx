import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactSection = ({ contactInfo }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body text-center">
          <FaMapMarkerAlt fontSize={35} />
          <h6 className="my-2">{contactInfo.address}</h6>
        </div>
      </div>
      <div className="card my-3">
        <div className="card-body text-center">
          <FaPhoneAlt fontSize={35} />
          <h6 className="my-2">{contactInfo.phone}</h6>
        </div>
      </div>
      <div className="card my-3">
        <div className="card-body text-center">
          <FaEnvelope fontSize={35} />
          <h6 className="my-2">{contactInfo.email}</h6>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
