function AboutPage() {
  return (
    <div className="h-screen bg-gray-100 flex">
      <div className="w-[29rem] h-[61rem] relative top-[4rem] left-[6rem]">
        <img className="rounded-3xl" src="../static/officeworkspace.jpeg" />
      </div>
      <div className="relative left-[9rem] top-[4rem]">
        <div className="flex gap-2">
          <div className="text-blue-800 text-xl">About</div>{" "}
          <div className="text-blue-800 text-xl font-semibold">Imeleo</div>
        </div>
        <div>
          <div className="text-[2.7rem] w-[34rem]">
            We Are Increasing <span className="text-blue-800">Business</span>
            <div>
              Success With <span className="text-blue-800">Technology</span>
              <div className="flex flex-wrap text-base">
                At Imeleo, we use technology to help businesses grow, work
                smarter, and get better results. Our goal is to make it easier
                for companies to succeed in todays digital world.
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 bg-white rounded-2xl w-[19rem] p-[1rem] mt-[0.5rem] text-2xl">
          <img className="h-[4rem]" src="../static/problemsolving.png" />
          <div>
            Problem Solving
            <div className="text-base">
              Aliquam erat volutpat Nullam imperdiet
            </div>
          </div>
        </div>
        <div className="flex gap-4 bg-white rounded-2xl w-[19rem] p-[1rem] mt-[0.5rem] text-2xl">
          <img className="h-[4rem]" src="../static/problemsolving.png" />
          <div>
            Mission & Vision
            <div className="text-base">
              Aliquam erat volutpat Nullam imperdiet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
