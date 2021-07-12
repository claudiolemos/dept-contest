import React, {useState} from 'react';
import * as yup from 'yup';

import {FormContainer, Title, StyledForm, FormRow, InputContainer, Label, RequiredLabel, Input, MessageInput, Submit} from './Form.style.js';

function Form(props) {
    const [name, setName] = useState({value: '', valid: true})
    const [email, setEmail] = useState({value: '', valid: true})
    const [message, setMessage] = useState({value: '', valid: true})

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
                        <Label>Name</Label>
                        <Input type="text" name="name"/>
                        {!name.valid && <RequiredLabel>This field is required</RequiredLabel>}
                    </InputContainer>
                    <InputContainer>
                        <Label>Email</Label>
                        <Input type="text" name="email"/>
                        {!email.valid && <RequiredLabel>{email.value === ''? 'This field is required' : 'Enter a valid email'}</RequiredLabel>}
                    </InputContainer>
                </FormRow>
                    <InputContainer>
                        <Label>Message</Label>
                        <MessageInput type="text" name="message"/>
                        {!message.valid && <RequiredLabel>This field is required</RequiredLabel>}
                    </InputContainer>
                <Submit type="submit" value="Send"/>
            </StyledForm>
        </FormContainer>
    );
  }
  
  export default Form;
  