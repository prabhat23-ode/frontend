import "../Utility.css";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import Footer from "./Footer.jsx";
import { useState } from "react";
import { Link } from "react-router";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {/* contactme picture */}
        <div className="w-full md:w-1/2 flex justify-center items-center py-8 px-4">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] border bg-[url('/cat.png')] bg-cover bg-center" />
        </div>

        {/* contact form and details */}
        <div className="w-full md:w-1/2 px-4 py-8">
          <h1 className="text-center text-3xl font-bold underline mb-6">
            Contact ME
          </h1>

          <div className="flex flex-col md:flex-row border rounded-md shadow-md p-4 gap-6">
            {/* Form */}
            <form
              action="/contact"
              method="post"
              className="flex flex-col w-full md:w-1/2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setName("");
                setEmail("");
                setMessage("");
              }}
            >
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                name="userName"
                className="input-util"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                name="email"
                className="input-util"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                id="message"
                placeholder="Type your message"
                className="input-util resize-none h-24"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <input
                type="submit"
                value="Contact Me"
                className="border rounded-full h-10 bg-black text-white hover:bg-gray-800 transition"
              />
            </form>

            {/* Contact Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-between gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Contact</h2>
                <p>7557885272</p>
                <p>loharaprabat470@gmail.com</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Based In</h2>
                <p>West Bengal, India</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-2">
                <Link
                  to="/page-not-found"
                  className="text-gray-600 hover:text-blue-700 text-2xl transition-transform transform hover:scale-110"
                >
                  <AiOutlineLinkedin />
                </Link>
                {/* <a
                  href="https://in.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 text-2xl transition-transform transform hover:scale-110"
                ></a> */}

                <a
                  href="https://github.com/prabhat23-ode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black text-2xl transition-transform transform hover:scale-110"
                >
                  <AiOutlineGithub />
                </a>

                <Link
                  to="/page-not-found"
                  className="text-gray-600 hover:text-black text-2xl transition-transform transform hover:scale-110"
                >
                  <RiTwitterXLine />
                </Link>
                {/* <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black text-2xl transition-transform transform hover:scale-110"
                ></a> */}

                <Link
                  to="/page-not-found"
                  className="text-gray-600 hover:text-blue-900 text-2xl transition-transform transform hover:scale-110"
                >
                  <AiOutlineFacebook />
                </Link>
                {/* <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-900 text-2xl transition-transform transform hover:scale-110"
                ></a> */}

                <Link
                  to="/page-not-found"
                  target="_blank"
                  className="text-gray-600 hover:text-pink-500 text-2xl transition-transform transform hover:scale-110"
                >
                  <AiOutlineInstagram />
                </Link>
                {/* <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 text-2xl transition-transform transform hover:scale-110"
                ></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
