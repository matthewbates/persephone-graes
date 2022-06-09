import React from "react";
import {
  ContactContainer,
  ContactRightSide,
  Form,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton,
} from "./ContactElements";
import emailjs from "emailjs-com";
import Logo from "../../assets/Text/BarkerHouse.jpg";
import swal from "sweetalert2";

const SERVICE_ID = "";
const TEMPLATE_ID = "";
const USER_ID = "";

export default function Contact() {
  function handleOnSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (r) => {
        console.log(r.text);
        swal.fire(
          "Message Sent",
          "We'll get back to you as soon as possible!",
          "success"
        );
      },
      (error) => {
        console.log(error.text);
        swal.fire("Ooops, something went wrong", error.text, "error");
      }
    );
    e.target.reset();
  }
  return (
    <ContactContainer>
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <h4>~ Open Everyday, 7 - 4 ~</h4>
        <a href="tel:PHONE_NUM">(719) 755-4215</a>
        <Form
          style={{ fontFamily: "Iskoola Pota" }}
          id="contact-form"
          method="POST"
        >
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <FormInput name="user_name" type="text" required />
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput name="user_email" type="email" required />
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextArea rows="6" name="user_message" required></FormTextArea>
          <FormButton type="submit">Send Message</FormButton>
        </Form>
      </div>
    </ContactContainer>
  );
}
