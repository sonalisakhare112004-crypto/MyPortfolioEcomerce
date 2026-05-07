import { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent successfully!");
    console.log(formData);

    // clear form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>

        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="4"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary px-4">
            Send Message
          </button>
        </div>

      </form>
    </div>
  );
}

export default ContactMe;