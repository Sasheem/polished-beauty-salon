import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// common styled components
import { Heading4, Heading4LC, BodyText1, BodyText2LC } from './common'

// styled components
const Container = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    a {
        color: black;
    }

    &:hover {
        cursor: pointer;
    }
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
`
const Footer = styled.div`
    display: grid;
    grid-template-columns: 0.1fr 1fr;
    grid-gap: 0.1em;
`
// markup 
const ServiceCard = ({ title, price, description, duration }) => (
    <Container>
        <Link to='/appointment'>
            <Header>
                <Heading4>{title}</Heading4>
                <Heading4LC>${price}</Heading4LC>
            </Header>
            <BodyText1>{description}</BodyText1>
            <Footer>
                <span role='img' aria-label='Clock emoji'>🕒</span>
                <BodyText2LC>{duration}</BodyText2LC>
            </Footer>
        </Link>
    </Container>
)

export default ServiceCard