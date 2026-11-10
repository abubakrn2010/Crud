import img1 from "../../assets/heroImg 1.png";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">


        <div className="flex justify-between items-center py-8">
          <h1 className="text-2xl font-bold">
            Raul<span className="text-indigo-500 font-normal">iqbal</span>
          </h1>

          <div className="hidden md:flex items-center gap-10">
            <p>About</p>
            <p>Passions</p>
            <p>Portfolio</p>
            <button className="bg-indigo-500 text-white px-6 py-3 rounded-xl">
              Contact Me
            </button>
          </div>

          <p className="text-3xl md:hidden">☰</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-16">

          <div className="w-full md:w-1/2">
            <h3 className="text-indigo-600 text-2xl font-bold mb-5">
              Hi !
            </h3>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              I'm Muhamad Raul.
              <br />
              a Front-End Developer
            </h1>

            <p className="text-slate-600 text-lg leading-8 max-w-lg">
              Front-End developer based in Bekasi, Indonesian.
              I’am coding with a clean and beautiful problem solving in mind.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-72 h-72 sm:w-96 sm:h-96  rounded-full flex justify-center items-center">

              <img src={img1} alt="" />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
