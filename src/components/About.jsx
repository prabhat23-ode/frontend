import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div
          id="heroSection"
          className="w-full my-12 h-auto border bg-cover py-40 relative"
          style={{ backgroundImage: "url('/hero.png')" }}
        >
          <div className="absolute inset-0 bg-white opacity-40 z-0"></div>
          <div className="relative z-9 ml-16 max-md:ml-5">
            <h1 className="text-[6rem] font-bold wrap-anywhere max-md:text-4xl">I am Freedom !</h1>
            <h2 className="text-[4rem] font-bold wrap-anywhere max-md:text-3xl">I create for fun.</h2>
          </div>
        </div>

        <div className="w-2/3 my-18">
          <h1 className="text-[3rem] font-bold underline text-center my-2 max-md:text-4xl">
            About Me
          </h1>
          <p className="text-[1.2rem] max-md:text-[1.1rem]">
            Hey! I'm Prabhat Lohara, curious and self-taught developer on a
            journey to master full-stack web development. I’ve got a solid grip
            on HTML, CSS, JavaScript, Node.js, Express, EJS, and MongoDB, and
            I’m always diving deeper to understand how things really work under
            the hood. I love keeping things minimal and functional, and I learn
            best by building real-life projects that challenge me. Apart from
            coding, I’ve got a creative side when it comes to cooking, a deep
            interest in human behavior, critical thinking and cybersecurity, and
            I’m also leveling up in calisthenics. Always exploring, always
            learning that’s pretty much me.
          </p>
        </div>

        <div>
          <h1 className="text-[3rem] font-bold underline text-center my-2">
            Experience
          </h1>
          <p className="text-[1rem] text-center my-2">Will add soon!</p>
        </div>
      </div>

    </>
  );
}

export default App;
