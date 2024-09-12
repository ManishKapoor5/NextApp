function FirstSectionPage() {
  return (
    <div className="firstsection h-screen grid justify-center items-center text-center">
      <div className="grid gap-5">
        <div className="text-blue-800 text-5xl font-bold">
          Business Software
        </div>
        <div className="text-blue-800 text-5xl">Solutions And Services</div>
        <p>
          <a>Software</a> services and solutions to take your <a>Business</a> to
          the next level{" "}
        </p>
        <div className="grid grid-flow-col gap-x-3 mx-16">
          <button className="bg-blue-800 text-white px-1 py-2 rounded-lg">
            Know more
          </button>
          <button className="bg-white border-blue-800 px-1 py-2 border-2 rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstSectionPage;
