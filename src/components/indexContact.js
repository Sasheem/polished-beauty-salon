import * as React from 'react'
import styled from 'styled-components'

// local components
import { Container, Heading2, SubHeading, Input, Textarea, Submit } from './common'
import RowHours from './rowHours'

// markup
const SubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3em;

    // active when browser window is larger than 480px
    // target tablets
	@media only screen and (min-width: 480px) {
		grid-template-columns: 1fr 1fr;
	}

    // active when browser window is larger than 768px
    // target desktops
    @media only screen and (min-width: 768px) {
        grid-template-columns: 2fr 1fr;
    }
`
const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em;
    padding-right: 10%;

    @media only screen and (min-width: 768px) {
        padding-right: 20%;
    }
`
const Button = styled.input`

`

const IndexContact = () => (
    <Container>
        <SubContainer>
            <article>
                <Heading2>Contact</Heading2>
                <SubHeading>Fill out the form below if you need to get in contact with me.</SubHeading>
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
            </article>
            <article>
                <Heading2>Hours</Heading2>
                <RowHours day='Monday' duration='CLOSED' />
                <RowHours day='Tuesday' duration='9am - 8pm' />
                <RowHours day='Wednesday' duration='9am - 8pm' />
                <RowHours day='Thursday' duration='9am - 8pm' />
                <RowHours day='Friday' duration='9am - 8pm' />
                <RowHours day='Saturday' duration='9am - 8pm' />
                <RowHours day='Sunday' duration='CLOSED' />
            </article>
        </SubContainer>
    </Container>
)

export default IndexContact