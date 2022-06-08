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


export default function Contact() {
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
          <FormInput name="name" type="text" required />
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput name="email" type="email" required />
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextArea rows="6" name="message" required></FormTextArea>
          <FormButton type="submit">Send Message</FormButton>
        </Form>
      </div>
    </ContactContainer>
  );
}
