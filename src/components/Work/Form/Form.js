import React, {useState} from 'react';
import * as yup from 'yup';

import {FormContainer, Title, StyledForm, FormRow, InputContainer, Label, RequiredLabel, SucessLabel, Input, MessageInput, Submit} from './Form.style.js';

function Form(props) {
    const [name, setName] = useState({value: '', valid: -1})
    const [email, setEmail] = useState({value: '', valid: -1})
    const [message, setMessage] = useState({value: '', valid: -1})

    async function handleSubmit(e) {
        e.preventDefault()
        setName({value: e.target.name.value, valid: await yup.string().required().isValid(e.target.name.value)})
        setEmail({value: e.target.email.value, valid: await yup.string().email().required().isValid(e.target.email.value)})
        setMessage({value: e.target.message.value, valid: await yup.string().required().isValid(e.target.message.value)})
    }

    return (
        <FormContainer>
            <Title>Question? We are here to help!</Title>
            <StyledForm onSubmit={handleSubmit}>
                <FormRow>
                    <InputContainer>
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" name="name" id="name"/>
                        {!name.valid && <RequiredLabel>This field is required</RequiredLabel>}
                    </InputContainer>
                    <InputContainer>
                        <Label htmlFor="email">Email</Label>
                        <Input type="text" name="email" id="email"/>
                        {!email.valid && <RequiredLabel>{email.value === ''? 'This field is required' : 'Enter a valid email'}</RequiredLabel>}
                    </InputContainer>
                </FormRow>
                    <InputContainer>
                        <Label htmlFor="message">Message</Label>
                        <MessageInput type="text" name="message" id="message"/>
                        {!message.valid && <RequiredLabel>This field is required</RequiredLabel>}
                    </InputContainer>
                <Submit type="submit" value="Send"/>
                {name.valid && email.valid && message.valid && name.value !== '' && email.value !== '' && message.value !== '' && <SucessLabel>Thank you for your message :)</SucessLabel>}
            </StyledForm>
        </FormContainer>
    );
  }
  
  export default Form;
  