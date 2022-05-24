import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Logo from "../../assets/LogoNoText.png";
import "../../styles/Contact.css";

function handleFormSubmit(e) {
  e.preventDefault();
}

export default function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}



// import React from "react";
// import {
//   Container,
//   FormWrap,
//   Icon,
//   FormContent,
//   Form,
//   FormH1,
//   FormLabel,
//   FormInput,
//   FormButton,
// } from "./ContactElements";
// import ScrollToTop from "../ScrollToTop";

// export default function Contact() {
//   return (
//     <>
//       {/* <ScrollToTop /> */}
//       <Container>
//         <FormWrap>
//           <Icon to="/contact">PG's</Icon>
//           <FormContent>
//             <Form action="#">
//               <FormH1>Contact</FormH1>
//               <FormLabel htmlFor="name">Full Name</FormLabel>
//               <FormInput
//                 name="name"
//                 placeholder="Enter full name..."
//                 type="text"
//               />
//               <FormLabel htmlFor="email">Email</FormLabel>
//               <FormInput
//                 name="email"
//                 placeholder="Enter email..."
//                 type="email"
//               />
//               <FormLabel htmlFor="message">Message</FormLabel>
//               <FormInput
//                 name="message"
//                 placeholder="Enter message..."
//                 required
//               />
//               <FormButton type="submit">Submit</FormButton>
//             </Form>
//           </FormContent>
//         </FormWrap>
//       </Container>
//     </>
//   );
// }
