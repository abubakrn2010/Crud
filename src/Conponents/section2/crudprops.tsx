
const Cards = ({ data, DeleteData, handleOpenEdit }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {data.map((e) => {
        return (
          <div key={e.id} className="bg-white rounded-2xl p-8 shadow-lg border text-center">
            <div className="h-52 flex items-center justify-center mb-6">
              <img
                src={e.img}
                alt={e.name}
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="text-xl text-slate-800">
              <span className="font-extrabold">{e.name}</span>
            </h2>

            <p className="text-slate-500 mt-2">
              {e.description}
            </p>

            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => handleOpenEdit(e)}
                className="bg-blue-500 text-white px-5 py-2 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() => DeleteData(e.id)}
                className="bg-red-500 text-white px-5 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
