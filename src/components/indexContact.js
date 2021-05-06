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
const HorizontalRule = styled.hr`
    width: 100%;
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
const Button = styled.input``
const IconContainer = styled.div`
    display: grid;
    grid-gap: 1em;
`;
const IconRow = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    grid-gap: 0.5em;
`
const Icon = styled.span`
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Contact = styled.a`
    text-decoration: none;
    color: #8A97A6;
`

// data
const info = {
    closed: 'CLOSED',
    open: '9am - 8pm',
    address: '598 N University Dr, Ste 12 Coral Springs FL US 33071',
    number: '(954) - 549 - 3366',
    google: 'https://www.google.com/maps/place/598+N+University+Dr+%2312,+Coral+Springs,+FL+33071/@26.238216,-80.2575871,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9057329308963:0x8d00a1d8b153a8be!8m2!3d26.238216!4d-80.2553984'
}

// markup
const IndexContact = () => (
    <Container>
        <SubContainer>
            <article>
                <Heading2 id='contact'>Contact</Heading2>
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
                <RowHours day='Monday' duration={info.closed} />
                <RowHours day='Tuesday' duration={info.open} />
                <RowHours day='Wednesday' duration={info.open} />
                <RowHours day='Thursday' duration={info.open} />
                <RowHours day='Friday' duration={info.open} />
                <RowHours day='Saturday' duration={info.open} />
                <RowHours day='Sunday' duration={info.closed} />
                <HorizontalRule />
                <IconContainer>
                    <IconRow>
                        <Icon role='img' aria-label='Location emoji'>📍</Icon>
                        <Contact href={info.google} target='_blank'>
                             {info.address}
                        </Contact>
                    </IconRow>
                    <IconRow>
                        <Icon role='img' aria-label='Phone emoji'>📞</Icon>
                        <Contact href='tel:+9545493366'>{info.number}</Contact>
                    </IconRow>
                </IconContainer>
            </article>
        </SubContainer>
    </Container>
)

export default IndexContact