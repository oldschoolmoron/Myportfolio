import React, {useState} from "react";
import Image from "next/image";


const Contact = ({isDarkMode}) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "49836071-2866-4201-bf43-5ddd170a9f8b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className={`w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] ${isDarkMode ? "bg-none" : "" }`}
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Get in Touch</h4>
      <h2 className="text-center text-5xl font-ovo">let's Connect</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd love to hear from you! If you have any questions or would like to
        work together, please feel free to reach out.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" name="name ${isDarkMode ? "text-white" : " text-gray-600"}`}
          />
          <input
            type="text"
            placeholder="Enter your email"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md ${isDarkMode ? "text-white" : " text-gray-600"}`} name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className={`w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md  mb-6 ${isDarkMode ? "text-white" : " text-gray-600"}`} name="message"
        ></textarea>
        <button
          type="submit"
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto duration-500 ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}
        >
          Submit now
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
