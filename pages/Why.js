function WhyUsPage() {
  const Data = [
    {
      id: 1,
      image: "../static/flaggedmountain.png",
      Name: "Technical Expertise",
      Content:
        "Team of highly skilled developers, designers, and system architects, working with the latest technologies and best practices",
    },
    {
      id: 2,
      image: "../static/bulb.png",
      Name: "Business Centric Approach",
      Content:
        "Putting business first, providing tailored IT solutions based on the unique needs of each business",
    },
    {
      id: 3,
      image: "../static/dart.png",
      Name: "Process And Quality Assurance",
      Content:
        "Implementing thorough testing and quality checks to deliver high-performing and secure IT solutions.",
    },
    {
      id: 4,
      image: "../static/flaggedmountain.png",
      Name: "Support",
      Content:
        "Offering timely support and quick resolution of issues to minimize downtime and disruptions.",
    },
    {
      id: 5,
      image: "../static/bulb.png",
      Name: "Innovation",
      Content:
        "Continuously adopting and integrating new technologies to stay competitive and offer clients cutting-edge solutions",
    },
    {
      id: 6,
      image: "../static/dart.png",
      Name: "Scalability",
      Content:
        "Providing scalable IT infrastructure and services that grow as the client s business grows.",
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
            <div className="rounded-full w-16 h-16 flex justify-center items-center bg-gray-100">
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

export default WhyUsPage;
