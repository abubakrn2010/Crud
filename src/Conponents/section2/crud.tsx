
import { useState } from "react";
import Cards from "./crudprops";


const Crud = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Front-End Developer",
      description: "(Sass, Bootstrap, Tailwind)",
      img:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZY05TxLPMWURURWi3Zb04UkT34lCDP4y26P0iijyiA13-Y3_I'
    },
    {
      id: 2,
      name: "Back-End Developer",
      description: "(NodeJS, Laravel, Codeigniter)",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTOoU_crLTq5dwg-uMW1OeMjhe14jROPke3R1N4L1K2umBUwuyS"
    },
    {
      id: 3,
      name: "UI/UX Designer",
      description: "(Figma, Zeplin, Adobe XD)",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwKtGihP0W6eVavxmwC_DSV_anHuGBHUdT4i8K0L2UhY70XyUR"
    }
  ]);

  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const [inpName, setInpName] = useState("");
  const [inpDescription, setInpDescription] = useState("");
  const [inpImg, setInpImg] = useState("");
  const [idx, setIdx] = useState(null);

  const DeleteData = (id) => {
    setData(data.filter((e) => e.id !== id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = {
      id: Date.now(),
      name: event.target.name.value,
      description: event.target.description.value,
      img: event.target.img.value
    };

    setData([...data, newData]);
    setModalAdd(false);
    event.target.reset();
  };

  const handleOpenEdit = (e) => {
    setInpName(e.name);
    setInpDescription(e.description);
    setInpImg(e.img);
    setIdx(e.id);
    setModalEdit(true);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();

    const newData = {
      id: idx,
      name: event.target.name.value,
      description: event.target.description.value,
      img: event.target.img.value
    };

    setData(data.map((e) => e.id === idx ? newData : e));
    setModalEdit(false);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full mx-auto py-10">

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl text-[#1D2A68]">
            <span className="font-medium">Additional</span>{" "}
            <span className="font-extrabold">passions</span>
          </h1>

          <button
            onClick={() => setModalAdd(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg mt-6"
          >
            + Add Passion
          </button>
        </div>

        {modalAdd && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <form
              onSubmit={handleSubmit}
              className="bg-white w-full max-w-md p-6 rounded-2xl grid gap-4"
            >
              <h2 className="text-2xl font-bold">Add Passion</h2>

              <input name="name" className="border p-3 rounded-lg" placeholder="Name" required />

              <input name="description" className="border p-3 rounded-lg" placeholder="Description" required />

              <input name="img" className="border p-3 rounded-lg" placeholder="Image URL" required />

              <div className="flex justify-end gap-3">
                <button type="submit" className="bg-green-600 text-white px-5 py-2 rounded-lg">
                  Add
                </button>

                <button type="button" onClick={() => setModalAdd(false)} className="border px-5 py-2 rounded-lg">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {modalEdit && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <form
              onSubmit={handleEditSubmit}
              className="bg-white w-full max-w-md p-6 rounded-2xl grid gap-4"
            >
              <h2 className="text-2xl font-bold">Edit Passion</h2>

              <input defaultValue={inpName} name="name" className="border p-3 rounded-lg" placeholder="Name" required />

              <input defaultValue={inpDescription} name="description" className="border p-3 rounded-lg" placeholder="Description" required />

              <input defaultValue={inpImg} name="img" className="border p-3 rounded-lg" placeholder="Image URL" required />

              <div className="flex justify-end gap-3">
                <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded-lg">
                  Save
                </button>

                <button type="button" onClick={() => setModalEdit(false)} className="border px-5 py-2 rounded-lg">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <Cards
          data={data}
          DeleteData={DeleteData}
          handleOpenEdit={handleOpenEdit}
        />

      </div>
    </div>
  );
};

export default Crud;
