import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/5c83e32dd88320d8e0d15236885663b7", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (response.ok) {

        navigate("/thank-you");
      } else {
        console.error("Form submission failed", result);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 sm:py-32 bg-black" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7 text-white">Get in touch</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl text-white">
            Contact Me
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          data-aos="zoom-in"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  required
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-white ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  required
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-white ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-white ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-white ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>


          <input
            type="hidden"
            name="_next"
            value={`${window.location.origin}/thank-you`}
          />

          <div className="mt-10">
            <button
              type="submit"
              className="btn btn-outline text-sm w-full text-white font-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send it"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
