function ServicesPage() {
  const Data = [
    {
      id: 1,
      image: "../static/laptop.png",
      Name: "Web App Development",
      Content:
        "Building cutting-edge, highperforming web apps tailored to suit your business",
    },
    {
      id: 2,
      image: "../static/mobile-app.png",
      Name: "App development",
      Content:
        "Crafting exceptional mobile experiences that transform how businesses engage with the users on the go",
    },
    {
      id: 3,
      image: "../static/itconsulting.png",
      Name: "IT Consulting",
      Content:
        "Strategic IT consulting services designed to help businesses navigate the ever-evolving technology landscape",
    },
    {
      id: 4,
      image: "../static/business-people.png",
      Name: "Customer Software Development",
      Content:
        "Enterprise-grade, bespoke solutions that perfectly align with your business needs and goals.",
    },
    {
      id: 5,
      image: "../static/cloud.png",
      Name: "Cloud Services",
      Content:
        "Empower businesses to unlock the full potential of cloud computing ensuring flexibility, scalability, and security",
    },
    {
      id: 6,
      image: "../static/dataengineering.png",
      Name: "Data Engineering",
      Content:
        "Robust data pipelines, ensuring the seamless collection, storage, and management of your data, no matter the scale",
    },
  ];

  return (
    <div className="h-full p-10">
      <div className="flex text-center justify-center text-4xl font-semibold text-blue-800">
        Services
      </div>

      <div className="justify-between flex flex-wrap gap-y-10 gap-x-1 p-16 text-blue-800">
        {Data.map((info) => (
          <div
            className="border-blue-800 h-96 p-3 bg-white flex flex-col justify-center items-center w-80 border-2 rounded-xl"
            key={info.id}
          >
            <div className="border-blue-800 border-[1.4px] rounded-full w-16 h-16 flex justify-center items-center">
              <img src={info.image} />
            </div>
            <div className="text-2xl text-center p-3">{info.Name}</div>
            <div className="text-black text-center font-mono text-lg">
              {info.Content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
