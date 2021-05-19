import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

// local components
import FacebookIcon from '../assets/facebook2.svg'
import InstagramIcon from '../assets/instagram.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import { Section, Heading4Light, Input, Submit, ErrorText, SuccessText } from './common'

// styled components
const Container = styled.footer`
	margin-top: 40vh;
    width: 100%;
    background-color: #44566C;
    padding-top: 2em;
    p, a, h4 {
        color: white;
    }
`;
const Content = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3em;
    margin-bottom: 20vh;

    // active when browser window is larger than 480px
    // target tablets
    @media only screen and (min-width: 480px) {
        grid-template-columns: 1fr 1fr;
    }

    // active when browser window is larger than 768px
    // target desktops
    @media only screen and (min-width: 768px) {
        grid-template-columns: 1fr 2fr;
    }
`
const Copyright = styled.article`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Left = styled.article``
const Right = styled.article`
    display: grid;
    grid-template-columns: 1fr;

    // active when browser window is larger than 768px
    // target desktops
    @media only screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`
const List = styled.div`
    ul {
        list-style: none;
        margin: 0;
    }
`
const Icons = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
const Form = styled.form`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0.25em;
`
const IconLink = styled.a`
    &:hover {
        cursor: pointer;
    }
`

// markup
const Footer = () => {
    // query
    const data = useStaticQuery(graphql`
        query SiteMetadataQuery {
            site {
                siteMetadata {
                    facebookUrl
                }
            }
        }
    `)
    
    // form component
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

    // Component: Thank you message
    const showThankYou = (
        <SuccessText>Joined mailing list!</SuccessText>
    );

    // Component: Form
    const showForm = (
        <Form onSubmit={handleSubmit((data) => { console.log(data)})}>
            <Input
                placeholder='Email'
                {...register('email', { 
                    required: 'Email is required', 
                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })} 
            />
            <Submit type='submit' value='Send' />
        </Form>
    )

    return (
        <Container>
            <Section>
                <Content>
                    <Left>
                        <Heading4Light>Newsletter signup</Heading4Light>
                        <p>Stay connected! Sign up to receive polished beauty news.</p>
                        {isSubmitted && !errors ? showThankYou : showForm}
                        {errors.email?.type ==='required' && <ErrorText>{errors.email.message}</ErrorText>}
                        {errors.email?.type === 'pattern' && <ErrorText>Invalid email</ErrorText>}
                        <Heading4Light>Connect with me</Heading4Light>
                        <Icons>
                            <IconLink href={data.site.siteMetadata.facebookUrl} target='_blank'>
                                <FacebookIcon fill='#FFFFFF' />
                            </IconLink>
                            <InstagramIcon fill='#FFFFFF' />
                            <LinkedinIcon fill='#FFFFFF' />
                        </Icons>
                    </Left>
                    <Right>
                        <div />
                        <List>
                            <Heading4Light>Navigation</Heading4Light>
                            <ul>
                                <li><AnchorLink to='/#services'>Services</AnchorLink></li>
                                <li><Link to='/'>Appointment</Link></li>
                                <li><Link to='/gallery'>Gallery</Link></li>
                                <li><Link to='/'>Collections</Link></li>
                                <li><Link to='/'>Contact</Link></li>
                            </ul>
                        </List>
                        <List>
                            <Heading4Light>Information</Heading4Light>
                            <ul>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/'>FAQs</Link></li>
                                <li><Link to='/'>Terms & Conditions</Link></li>
                                <li><Link to='/'>Privacy Policy</Link></li>
                                <li><Link to='/'>Site Map</Link></li>
                            </ul>
                        </List>
                    </Right>
                </Content>
                <Copyright>
                    <p>Copyright © {new Date().getFullYear()} Polished Beauty Salon</p>
                </Copyright>
            </Section>
        </Container>
    )
}

export default Footer