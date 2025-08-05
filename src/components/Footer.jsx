import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

function App() {
  return (
    <>
      <footer className="py-6 text-gray-600 text-sm flex flex-col items-center border-t border-gray-200 mx-4 mt-10">
        <h1 className="text-black text-2xl underline my-2">
          You've reached the End.
        </h1>
        <h1 className="text-black text-2xl my-2">contact me !</h1>
        <div className="w-36 flex justify-evenly py-1.25 items-center my-3">
          <Link to="/page-not-found">
            <AiFillFacebook
              size={25}
              className="hover:text-gray-600 text-blue-700 duration-300 ease-in-out"
            />
          </Link>
          {/* <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" h-fit w-fit"
          >            
          </a> */}

          <Link to="/page-not-found">
            <AiFillInstagram
              size={25}
              className="hover:text-gray-600 text-pink-600 duration-300 ease-in-out"
            />
          </Link>
          {/* <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" h-fit w-fit"
          >
          </a> */}

          <Link to="/page-not-found">
            <FaSquareXTwitter
              size={21}
              className="hover:text-gray-600 text-black duration-300 ease-in-out"
            />
          </Link>
          {/* <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" h-fit w-fit"
          ></a> */}

          <Link to="/page-not-found">
            <AiFillLinkedin
              size={25}
              className="hover:text-gray-600 text-blue-900 duration-300 ease-in-out"
            />
          </Link>
          {/* <a
            href="https://in.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" h-fit w-fit"
          ></a> */}

          <a
            href="https://github.com/prabhat23-ode"
            target="_blank"
            rel="noopener noreferrer"
            className=" h-fit w-fit"
          >
            <AiFillGithub
              size={25}
              className="hover:text-gray-600 text-black duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="#">Privacy & Legal</a>
        <p>© {new Date().getFullYear()} Prabhat. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
