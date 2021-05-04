import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// local components
import { Container, SubContainer, Heading2, Button } from './common'

const IndexGallery = () => (
    <Container>
        <Heading2>Gallery</Heading2>
        <SubContainer>
            <StaticImage src='../images/nails1.png' alt='Gallery nails photo' />
            <StaticImage src='../images/nails2.png' alt='Gallery nails photo' />
            <StaticImage src='../images/nails3.png' alt='Gallery nails photo' />
            <StaticImage src='../images/nails4.png' alt='Gallery nails photo' />
            <StaticImage src='../images/nails5.png' alt='Gallery nails photo' />
            <StaticImage src='../images/nails6.png' alt='Gallery nails photo' />
        </SubContainer>
        <Button>
            <p>Full Gallery</p>
        </Button>
    </Container>
)

export default IndexGallery