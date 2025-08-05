import React from "react";
import { Link } from "react-router";

function App() {
  return (
    <>
      <header className="w-full h-auto">
        <nav className="flex justify-between items-center px-4 py-2 h-20">
          <div className="w-auto px-2 py-1">
            <h2 className='text-2xl font-bold' >My Portfolio</h2>
          </div>
          <ul className="flex w-sm justify-between px-2 py-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
