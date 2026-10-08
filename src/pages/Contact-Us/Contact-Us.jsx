function ContactUs() {

  const handleSubmit = (event) => {

    event.preventDefault();

    alert(
      "Thank you for contacting Vasthreya!"
    );
  };

  return (
    <section className="page-section">

      <div className="container">

        <div className="page-heading">

          <p>
            We Would Love To Hear From You
          </p>

          <h1>
            Contact Us
          </h1>

        </div>


        <div className="row g-4">

          {/* Contact Information */}

          <div className="col-lg-5">

            <div className="contact-information">

              <div className="contact-item">

                <i className="bi bi-geo-alt"></i>

                <div>

                  <h4>
                    Address
                  </h4>

                  <p>
                    Hyderabad, Telangana, India
                  </p>

                </div>

              </div>


              <div className="contact-item">

                <i className="bi bi-telephone"></i>

                <div>

                  <h4>
                    Phone
                  </h4>

                  <p>
                    +91 98765 43210
                  </p>

                </div>

              </div>


              <div className="contact-item">

                <i className="bi bi-envelope"></i>

                <div>

                  <h4>
                    Email
                  </h4>

                  <p>
                    support@vasthreya.com
                  </p>

                </div>

              </div>


              <div className="contact-item">

                <i className="bi bi-clock"></i>

                <div>

                  <h4>
                    Working Hours
                  </h4>

                  <p>
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Contact Form */}

          <div className="col-lg-7">

            <div className="contact-form">

              <h2>
                Send Us A Message
              </h2>

              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                />

                <input
                  type="text"
                  placeholder="Subject"
                  required
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="vasthreya-btn"
                >
                  SEND MESSAGE
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactUs;