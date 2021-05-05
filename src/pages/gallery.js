import React, { useState } from 'react'
import styled from 'styled-components'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

// local components
import { Section, Heading1, BodyText1 } from '../components/common'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Grid = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3em;

    // remove if this gets in the way of other components layout
    margin-top: 5em;
    margin-bottom: 5em;

    // active when browser window is larger than 480px
    // target tablets
    @media only screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

// markup
const Gallery = () => {
    const [nails, setNails] = useState([])
    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile {
                edges {
                    node {
                        base
                    }
                }
            }
        }
    `)

    data.allFile.edges.map(edge => 
        edge.node.base.startsWith('n') 
        ? console.log(`File Name: ${edge.node.base}`)
        // ? setNails([ ...nails, { id: nails.length, name: edge.node.base}]) 
        : null)
    console.log(nails.length)
    return (
        <Layout>
            <Seo title='Salon Gallery' />
            <Section>
                <Heading1>Gallery</Heading1>
                <BodyText1>Browse some of my work.</BodyText1>
                <Grid>
                    <StaticImage src='../images/nails1.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails2.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails3.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails4.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails5.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails6.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails7.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails8.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails9.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails10.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails11.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails12.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails13.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails14.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails15.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails16.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails17.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails18.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails19.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails20.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails21.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails22.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails23.png' alt='Gallery Nails Photo' />
                    <StaticImage src='../images/nails24.png' alt='Gallery Nails Photo' />
                    {/* {data.allFile.edges.map(edge => 
                    edge.node.base.startsWith('n')
                    ? <StaticImage src={edge.node.base} alt='Gallery Nails Photo' /> 
                    // ? console.log(`File Name: ${edge.node.base}`)
                    // ? setNails([ ...nails, { id: nails.length, name: edge.node.base}]) 
                    : null)} */}
                    {/* {data.allImageSharp.edges.map(edge => edge.node.original.startsWith('nails') ? <GatsbyImage fluid={edge.node.fluid} /> : null)} */}
                </Grid>
            </Section>
        </Layout>
    )
}

export default Gallery