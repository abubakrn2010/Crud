import img1 from "../../assets/Pexels Photo by MART PRODUCTION.png";
import img2 from "../../assets/Mask group.png";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">


      <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

        <h1 className="text-3xl font-extrabold">
          <span className="text-orange-600">u</span>teach
        </h1>

        <div className="flex flex-wrap justify-center gap-5 text-sm font-medium">
          <a href="#products">Products</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#login">Log In</a>
          <a href="#signup" className="border-2 border-slate-800 px-5 py-2 rounded-lg">
            Sign Up Now
          </a>
        </div>

      </nav>


      <main className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col lg:flex-row items-center gap-12">

          
          <div className="w-full lg:w-1/2">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="relative inline-block">
                Teach
                <span className="absolute left-0 bottom-0 w-full h-2 bg-orange-500 -z-0"></span>
              </span>
              {" "}students worldwide
            </h1>

            <p className="text-slate-600 mt-6 text-base sm:text-lg leading-8">
              Amet nunc diam orci duis ut sit diam arcu, nec.
              Eleifend proin massa tincidunt viverra lectus pulvinar.
              Nunc ipsum est pellentesque turpis ultricies.
            </p>

            <div className="flex flex-wrap gap-5 mt-8">

              <a
                href="#signup"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700"
              >
                Sign Up Now
              </a>

              <a
                href="#demo"
                className="flex items-center gap-3 text-blue-600 font-semibold px-4 py-4"
              >
                <span className="border-2 border-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                  ▶
                </span>
                View Demo
              </a>

            </div>

            <div className="mt-14">

              <p className="text-xs font-semibold text-slate-500 mb-6">
                TRUSTED BY LEADING COMPANIES
              </p>

              <div className="flex flex-wrap gap-8 text-3xl text-slate-400">
                <span>✦</span>
                <span>⬡</span>
                <span>✣</span>
                <span>⬢</span>
                <span>✧</span>
              </div>

            </div>

          </div>


          <div className="w-full lg:w-1/2 flex justify-center">

            <div className="relative w-full max-w-lg aspect-square">


              <div className="absolute top-4 right-0 w-1/2 h-1/2 bg-orange-400 rounded-[45%] overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={img2}
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-0 w-1/2 h-1/2 bg-yellow-400 rounded-[45%] overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={img1}
                  alt="Teacher"
                  className="w-full h-full object-cover"
                />
              </div>


              <div className="absolute top-10 left-10 bg-white shadow-lg rounded-lg px-4 py-3 text-sm">
                Nunc, at libero neque
              </div>

              <div className="absolute top-1/4 right-0 bg-white shadow-lg rounded-lg px-4 py-3 text-sm">
                Viverra sed
              </div>

              <div className="absolute top-1/2 left-0 bg-slate-800 text-white shadow-lg rounded-lg px-4 py-3 text-sm">
                Turpis platea nunc mattis
              </div>

              <div className="absolute bottom-1/4 left-0 bg-slate-800 text-white shadow-lg rounded-lg px-4 py-3 text-sm">
                Vitae viverra ut non
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default App;
