import React, { useState } from "react";
import Layout from "../components/layout"
import styled from "styled-components"
import { navigate } from "gatsby"

const Input = styled.input`
  border: none;
  border-bottom: 1px solid cadetblue;
  height: 30px;
  font-size: 16px
`

const TextArea = styled.textarea`
  border-color: cadetblue;
  border-radius: 5px;
  font-size: 16px
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`

const Label = styled.label`
  margin-bottom: 15px;
  margin-top: 15px;
`

const Button = styled.button`
  margin-bottom: 15px;
  margin-top: 15px;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background: ${props => props.theme.main};
    color: white;
    cursor: pointer;
  }

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 1px solid ${props => props.theme.main};
`

Button.defaultProps = {
  theme: {
    main: "cadetblue"
  }
};

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    fetch(process.env.ZAPPIER, {
      method: "post",
      headers: {},
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        message: message
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        navigate("/")
      }
    })
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Label
          className="block font-bold mb-2 text-xs uppercase"
          htmlFor="first-name"
        >
          First Name
        </Label>

        <Input
          className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
          id="first-name"
          type="text"
          placeholder=""
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />

        <Label
          className="block font-bold mb-2 text-xs uppercase"
          htmlFor="last-name"
        >
          Last Name
        </Label>

        <Input
          className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
          id="last-name"
          type="text"
          placeholder=""
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
        />

        <Label
          className="block font-bold mb-2 text-xs uppercase"
          htmlFor="last-name"
        >
          Email
        </Label>

        <Input
          className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
          id="email"
          type="email"
          placeholder=""
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <Label
          className="block font-bold mb-2 text-xs uppercase"
          htmlFor="message"
        >
          Message
        </Label>

        <TextArea
          className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
          placeholder="Say something..."
          rows="8"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />

        <Button>
          Submit
        </Button>
      </Form>
    </Layout>
  );
};

export default ContactPage;
