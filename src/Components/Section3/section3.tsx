
function App4() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-[1300px] mx-auto">

        <section className="bg-[#0B132A] text-white py-14 px-6 sm:px-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-3xl mb-4">
                ♥
              </div>
              <h2 className="text-5xl font-extrabold text-yellow-400 mb-2">195</h2>
              <p className="text-yellow-400 text-lg">user countries</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center text-yellow-400 text-5xl mb-4">
                ◇
              </div>
              <h2 className="text-5xl font-extrabold text-yellow-400 mb-2">1M</h2>
              <p className="text-yellow-400 text-lg">valued teachers</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center text-yellow-400 text-5xl mb-4">
                🎓
              </div>
              <h2 className="text-5xl font-extrabold text-yellow-400 mb-2">17M</h2>
              <p className="text-yellow-400 text-lg">happy students</p>
            </div>

          </div>
        </section>

        <section className="py-16 px-6 sm:px-12 lg:px-16 bg-white">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-10">
              What everyone says
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg flex flex-col justify-between">
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur.
                </p>
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Hellen Jummy" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900">Hellen Jummy</h4>
                    <p className="text-slate-500 text-xs">Financial Counselor</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg flex flex-col justify-between">
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultricies nisi.
                </p>
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Ralph Edwards" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900">Ralph Edwards</h4>
                    <p className="text-slate-500 text-xs">Math Teacher</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg flex flex-col justify-between">
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet.
                </p>
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80" alt="Hellena John" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900">Hellena John</h4>
                    <p className="text-slate-500 text-xs">Psychology Student</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg flex flex-col justify-between">
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.
                </p>
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="David Miller" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900">David Miller</h4>
                    <p className="text-slate-500 text-xs">Computer Science Lead</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-16 px-6 sm:px-12 lg:px-16 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                All the cool <span className="text-brand-orange underline decoration-orange-400 decoration-4 underline-offset-4">features</span>
              </h2>

              <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
                Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper.
              </p>

              <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3">
                View all the features →
              </a>
            </div>

            <div className="relative py-6">
              <div className="absolute bg-orange-500 rounded-[45%] w-64 h-64 sm:w-96 sm:h-96 right-0 top-1/2 -translate-y-1/2"></div>

              <div className="relative grid grid-cols-2 gap-4 items-end">

                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100">
                  <span className="inline-block px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-semibold mb-2">
                    Popular
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">
                    Design for how people think
                  </h4>
                  <p className="text-slate-500 text-xs mb-4">
                    Aliquam ut euismod condimentum elementum ultricies volutpat sit non.
                  </p>
                  <button className="w-full py-2 rounded-xl border border-blue-500 text-blue-600 text-xs font-semibold">
                    Take Lesson
                  </button>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" alt="Students studying" className="w-full h-40 sm:h-52 object-cover" />
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=600&q=80" alt="Students using laptop" className="w-full h-36 sm:h-48 object-cover" />
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" alt="Woman working" className="w-full h-36 sm:h-48 object-cover" />
                </div>

              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default App4;
