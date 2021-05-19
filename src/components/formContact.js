import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

// local components
import { Input, Textarea, Button, Submit, ErrorText, SuccessText } from './common'

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
const Row = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start; 
`;

const FormContact = () => {
    const { 
        register, 
        handleSubmit,
        reset, 
        formState: { 
            errors, 
            isSubmitting, 
            isSubmitted 
        } 
    } = useForm()

    console.log(errors)

    // handle form submit
    const onSubmit = data => {
        // step 1: perform recaptcha check

        // step 2: submit form - try/catch block
        console.log(data)
        // try {
        //     console.dir(data)
        // } catch (error) {
        //     console.log('recaptcha error message')
        // }
    }

    // Component: Thank you message
    const showThankYou = (
        <SuccessText>Thank you I will get back to you shortly <br /> <br />
            <Button onClick={() => reset()}>Another message</Button>
        </SuccessText>
    );

    // Component: Form
    const showForm = 
    <Form onSubmit={handleSubmit((data) => {
        console.log(data)
    })}>
        <Row>
            <Input
                placeholder='Name' 
                {...register('name', { 
                    required: 'Name is required',
                })}
            />
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </Row>
        <Row>
            <Input
                placeholder='Email' 
                {...register('email', {
                    required: 'Email is required',
                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
            />
            {errors.email?.type ==='required' && <ErrorText>{errors.email.message}</ErrorText>}
            {errors.email?.type === 'pattern' && <ErrorText>Invalid email</ErrorText>}
        </Row>
        <Row>
            <Input
                placeholder='Subject' 
                {...register('subject', {
                    required: 'Subject is required',
                })}
            />
            {errors.subject && <ErrorText>{errors.subject.message}</ErrorText>}
        </Row>
        <Row>
            <Textarea
                placeholder='Message' 
                rows='6' 
                {...register('message', {
                    required: 'Message is required',
                })}
            />
            {errors.message && <ErrorText>{errors.message.message}</ErrorText>} 
        </Row>
        <Row>
            <Submit type='submit' value={isSubmitting ? 'Processing...' : 'Send'} />
        </Row>
        {/* {errors.submit && errors.submit.message &&
            <Row>
                <ErrorText>{errors.submit.message}</ErrorText>
            </Row>
        } */}
    </Form>

    return (
        isSubmitted && !errors ? showThankYou : showForm
    )
}

export default FormContact