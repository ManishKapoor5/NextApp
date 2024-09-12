function FooterPage() {
  return (
    <div className="text-white  bg-blue-800">
    <div className="grid grid-flow-col p-24 text-white">
      <div>
        <div className="text-7xl font-bold">Imeleo</div>
        <div className="font-bold text-2xl">Business Software</div>
        <div className="text-2xl">Solutions and Services</div>
      </div>
      <div className="text-xl">
        Links
        <div>
          <ul className="text-sm font-thin pt-10 space-y-5">
            <li>About</li>
            <li>Services</li>
            <li>Solutions</li>
            <li>Why Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div>
        <div className="text-xl">Services</div>
        <div>
          <ul className="text-sm font-thin pt-10 space-y-5">
            <li>Web App Dev</li>
            <li>Mobile App Dev</li>
            <li>IT Consulting</li>
            <li>Custom Software</li>
            <li>Cloud Services</li>
            <li>Data Engineering</li>
          </ul>
        </div>
      </div>
      <div>
       <div className="text-xl">Solutions</div>
        <div>
          <ul className="text-sm font-thin pt-10 space-y-5">
            <li>Content Management</li>
            <li>Employee Management</li>
            <li>Vehicle Management</li>
            <li>Lead Management</li>
            <li>Inventory Management</li>
            <li>Hospital Management</li>
          </ul>
        </div>
      </div>
      <div><div className="text-xl">Follow Us</div>
        <div className="flex space-x-6 pt-10"><img className="h-10" src="../static/fb.png" /><img className="h-10"  src="../static/linkedin.png" /> <img className="h-10"  src="../static/x.jpeg"/></div>
        <div className="flex space-x-6 pt-10"><img className="h-10 w-13" src="../static/youtube.png" /><img className="h-10"  src="../static/insta.png" /> </div>
      </div>
    </div>
    <hr></hr>
    <div className="flex gap-x-[33rem] px-24 py-5"><div>© 2023 Imeleo Consulting. All rights reserved.</div><div className="flex space-x-16">info@imeleo.com &nbsp;&nbsp;<img className="h-5" src="../static/Indiaflag.jpeg" /></div></div>
    </div>
  );
}

export default FooterPage;
