import React, { FormEvent, useState } from "react";
import "./contactForm.css"; // Import external CSS file
import { useTheme } from "../../context/ThemeContext";

const ContactForm: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form) {
      console.error("Form element is null");
      return;
    }

    setResult("Sending....");
    setErrorMessage(""); // Clear previous error messages
    const formData = new FormData(form);

    formData.append("access_key", "7338abc0-8ae1-4080-a8b2-96b0e958a8ae");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
        window.location.href = "https://web3forms.com/success";
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred while submitting the form.");
      console.error("Error:", error);
    }
  };

  return (
    <footer className={`footer ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="flex items-center min-h-screen bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-gray-800 p-5 rounded-md shadow-sm">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-100">
                GET IN TOUCH
              </h1>
            </div>
            <div className="m-7">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                id="form"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="7338abc0-8ae1-4080-a8b2-96b0e958a8ae"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Submission from Web3Forms"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  id=""
                  style={{ display: "none" }}
                />

                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-400">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    required
                    className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-400">
                    Message
                  </label>

                  <textarea
                    // rows="5"
                    name="message"
                    id="message"
                    className="w-full px-3 py-2 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                    required
                  ></textarea>
                </div>
                <div className="send-message">
                  <button className="send-button">
                    <span className="send-icon">
                    </span>
                    <span className="send-text">Send Message</span>
                  </button>
                </div>
                <p
                  className="text-base text-center text-gray-400"
                  id="result"
                ></p>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <span>©2024 Sunaina</span>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/sunaina-ruhaniat-01a650207/"
              target="_blank"
              className="social-link"
              aria-label="link to Linkedin"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                width="100%"
                height="100%"
                viewBox="0 0 50 50"
                className="linkedin-icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </a>
            <a
              href="/SunainaTakhi.pdf"
              target="_blank"
              aria-label="link to Resume"
            >
              <img src="/images/icons/resume.png" width={"40px"} height={"30px"}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactForm;
