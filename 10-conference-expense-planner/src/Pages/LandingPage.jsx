import Navbar from "../Components/Navbar";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="landing-page-container">
        <div className="landing-page-content">
          <div className="left-section">
            <h1>Budget Ease Solutions</h1>
            <h2>Empowering Your Financial Journey</h2>
            <button
              onClick={() => (window.location.href = "/product-selection")}
            >
              Get started
            </button>
          </div>
          <div className="right-section">
            <p>
              Welcome to BudgetEase Solutions, your trusted partner in
              simplifying budget management and financial solutions. At
              BudgetEase, we understand the importance of effective budget
              planning and strive to provide intuitive, user-friendly solutions
              to meet the diverse needs of our clients.
            </p>
            <p>
              With a commitment to efficiency and innovation, we empower
              individuals and businesses to take control of their finances and
              achieve their goals with ease.
            </p>
            <p>
              At BudgetEase Solutions, our mission is to make budgeting
              effortless and accessible for everyone. Whether you're a small
              business owner, a busy professional, or an individual looking to
              manage your personal finances, we offer tailored solutions to
              streamline your budgeting process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
