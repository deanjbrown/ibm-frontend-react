import { useState } from "react";
import "./FeedbackForm.css";

function FeedbackForm() {
  // Create a dictionary to hold the form data in state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: 5,
  });

  // Create a function to handle changes to the form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //
  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nFeedback: ${formData.feedback}\nRating: ${formData.rating}`;
    const isConfirmed = window.confirm(
      `Please confirm your feedbback:\n${confirmationMessage}`,
    );
    if (isConfirmed) {
      console.log(`Feedback submitted:${confirmationMessage}`);
      event.target.reset();
      // Clear the form after submission
      setFormData({
        name: "",
        email: "",
        feedback: "",
        rating: null,
      });

      alert("Thank you for your feedback!");
    }
  };
  return (
    <>
      <nav>Tell Us What you Think</nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd love to hear from you!</h2>
        <p>Please share your feedback with us</p>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>

        <div className="rating-container">
          <p>Rate Us:</p>
          <label htmlFor="1">
            1<input type="radio" name="rating" id="1" value="1" onChange={handleChange} />
          </label>
          <label htmlFor="2">
            2<input type="radio" name="rating" id="2" value="2" onChange={handleChange} />
          </label>
          <label htmlFor="3">
            3<input type="radio" name="rating" id="3" value="3" onChange={handleChange} />
          </label>
          <label htmlFor="4">
            4<input type="radio" name="rating" id="4" value="4" onChange={handleChange} />
          </label>
          <label htmlFor="5">
            5<input type="radio" name="rating" id="5" value="5" onChange={handleChange} />
          </label>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
}

export default FeedbackForm;
