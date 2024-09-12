function FounderPage() {
  return (
    <div>
      
      <div className="flex m-[6rem] gap-6">
      <div className="text-xl space-y-3 w-1/2">
        <div className="text-4xl flex space-x-3"><span><img src="../static/star.png" className="w-[2rem]" /></span> Meet Our <span className="text-blue-800">Founder</span></div>
        <p>
          With decades of industry experience, Mayank is a highly skilled
          software developer, solution architect and technology entrepreneur. He
          specializes in building modular and scalable cross platform software
          solutions
        </p>
        
        <p>
          Over the past, he has worked with numerous business, helping them
          overcome complex business challenges by building innovative technology
          solutions.
        </p>
        
        <p>
        Admired by clients, developers and designers alike, his entrepreneurial
        vision drives Imeleo, empowering businesses with cutting-edge technology
        solutions, thus fueling growth and innovation
      </p>
      </div>
      <div>
        <img src="../static/founder.jpg" />
        <div className="flex"><div className="text-blue-800 text-3xl font-mono ">Mayank Mahajan </div><img src="../static/linkedin.png" className="h-[3rem]" /></div>
        <div className="text-lg font-semibold">Founder, Imeleo</div>
      </div>
      
    
      </div>
    </div>
  );
}

export default FounderPage;
