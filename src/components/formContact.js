import React from 'react'
import styled from 'styled-components'

// local components
import { Input, Textarea, Submit } from './common'

// styled components
const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em;
    padding-right: 10%;

    @media only screen and (min-width: 768px) {
        padding-right: 20%;
    }
`

const FormContact = () => {

    return (
        <Form>
            <Input type='text' placeholder='Name' name='name' required />
            <Input type='text' placeholder='Email' name='email' required />
            <Input type='text' placeholder='Subject' name='subject' required />
            <Textarea 
                type='text' 
                placeholder='Message' 
                name='message' 
                rows='6' 
                required 
            />
            <Submit type='submit' value='Send' />
        </Form>
    )
}

export default FormContact