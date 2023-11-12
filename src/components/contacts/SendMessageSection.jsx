const SendMessageSection = () => {
  return (
    <div>
      <h4>
        How Can I <span className="text-success fw-bold">Help You?</span>
      </h4>

      <div className="row">
        <div className="col-xx-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-3">
          <div className="mb-3 mt-1">
            <label htmlFor="full-name" className="form-label fs-6">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              name="fullName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fs-6">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label fs-6">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Subject"
              name="subject"
            />
          </div>
        </div>
        <div className="col-xx-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-3">
          <div className="mb-3 mt-1">
            <label htmlFor="message" className="form-label fs-6">
              Message
            </label>
            <textarea
              className="form-control"
              placeholder="Enter Message"
              rows="8"
              name="message"></textarea>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xx-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 px-3">
          <button type="button" className="btn btn-outline-success">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMessageSection;
