function SolutionsPage() {
  const Data = [
    {
      id: 1,
      image: "../static/content.jpeg",
      Name: "Content Management",
      Content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis laboriosam alias eius",
    },
    {
      id: 2,
      image: "../static/employee.jpeg",
      Name: "Employee Management",
      Content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis laboriosam alias eius",
    },
    {
      id: 3,
      image: "../static/vehicle.jpeg",
      Name: "Vehicle Management",
      Content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis laboriosam alias eius",
    },
    {
      id: 4,
      image: "../static/lead.jpeg",
      Name: "Lead Management",
      Content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis laboriosam alias eius",
    },
    {
      id: 5,
      image: "../static/inventory.jpeg",
      Name: "Inventory Management",
      Content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis laboriosam alias eius",
    },
    {
      id: 6,
      image: "../static/hospital.jpeg",
      Name: "Hospital Management",
      Content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis laboriosam alias eius",
    },
  ];

  return (
    <div className="h-full p-10 bg-gray-100">
      <div className="flex text-center justify-center text-4xl font-semibold text-blue-800">
        Solutions
      </div>

      <div className="justify-between flex flex-wrap gap-y-10 gap-x-1 p-16 text-blue-800">
        {Data.map((info) => (
          <div
            className="border-blue-800 h-[26rem] bg-white p-7 w-80 border-2 rounded-xl"
            key={info.id}
          >
            <div>
              <img src={info.image} />
            </div>
            <div className="text-2xl text-center p-3">{info.Name}</div>
            <div className="text-black text-center font-mono">
              {info.Content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SolutionsPage;
