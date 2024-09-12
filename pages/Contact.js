function ContactPage() {
  return (
    <div>
      <div className="text-center text-3xl font-medium text-blue-800">
        Contact Us
      </div>
      <div className="bg-blue-800 m-24 flex h-[23rem] space-x-3 p-10 rounded-3xl">
        <img
          className="h-[33rem] relative bottom-[12.5rem]"
          src="../static/youngman.png"
        />
        <div className="flex flex-col space-y-3">
          {" "}
          <div className="text-white text-5xl">
            We help you to grow your business faster & easier.
          </div>
          <div className="text-white">
            Partner with us to simplify the path to your success. Well make
            reaching your business goals faster and easier than ever
          </div>
          <div className="text-white text-xl flex">
            <span>
              <img src="../static/phone.png" />
               
            </span>
            <div>&nbsp;&nbsp;+91-8873-33-8873</div>
          </div>
          <div className="text-white text-xl flex">
            <span>
              ✉️
            </span>
            <div>&nbsp;&nbsp;contact@imeleo.com</div>
           
          </div>
           <button className="w-[7rem] rounded-xl p-3 bg-white text-blue-800">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
