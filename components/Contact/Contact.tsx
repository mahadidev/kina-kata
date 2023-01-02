import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { type RootState } from "../../redux";
import { Button } from "../index";

const Contact = () => {
  const navigationHeight = useSelector(
    (state: RootState) => state.basic.navigationHeight
  );

  const breadcrumbHeight = useSelector(
    (state: RootState) => state.basic.breadcrumbHeight
  );

  const [isLoading, setIsLoading] = useState(null);
  const [message, setMessage] = useState(null);
  const formRef = useRef(null);
  const sendMail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_zy2h795",
        "template_odlu761",
        formRef.current,
        "qm7CspCnwDE-z1cGG"
      )
      .then(
        (result) => {
          setIsLoading(false);
          setMessage("mail has been sent successfully.");
        },
        (error) => {
          setMessage("there is some problem. please try again later.");
        }
      );
  };

  return (
    <>
      <div className="relative">
        <div
          className="container m-auto flex items-center relative z-10"
          style={{
            height: `calc(100vh - ${navigationHeight + breadcrumbHeight}px)`,
          }}
        >
          <div className="w-full 2xl:w-[30%] xl:w-[50%] lg:w-[70%] m-auto">
            <h1 className="text-4xl font-bold font-title text-black mb-2">
              Contact us.
            </h1>
            <p className="text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </p>
            <form ref={formRef} onSubmit={sendMail} className="pt-4">
              <input
                className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-gray-200 bg-gray-100 outline-none focus-visible:shadow-none  focus:border-primary"
                name="name"
                placeholder="Full Name"
                type="text"
              />
              <input
                className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-gray-200 bg-gray-100 outline-none focus-visible:shadow-none  focus:border-primary"
                name="mail"
                placeholder="Email adress"
                type="email"
              />

              <textarea
                className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-gray-200 bg-gray-100 outline-none focus-visible:shadow-none  focus:border-primary"
                name="message"
                rows={6}
                placeholder="Message"
              ></textarea>

              <Button className="w-100" disabled={isLoading}>
                {isLoading ? "loading.." : "Submit"}
              </Button>
            </form>
            <p className="text-green mt-2">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
