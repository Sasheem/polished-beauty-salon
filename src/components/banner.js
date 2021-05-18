import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

// local components
import { Heading1, SubHeading, Button } from '../components/common'

// styled components
const Section = styled.section`
  // active when browser window is smaller than 480px
  // target tablets
  @media only screen and (max-width: 480px) {
    h1, p {
      width: 70%;
    }
  }
`

// markup
const Banner = () => {
    return (
        <div style={{ display: 'grid' }}>
        <StaticImage 
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            maxHeight: 600,
          }}
          layout="fullWidth"
          // objectFit="fill"
          // You can optionally force an aspect ratio for the generated image
          aspectRatio={2.45 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          src="../images/banner-unsplash.jpg"
          formats={["auto", "webp", "avif"]}
        />
        <Section style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          placeItems: 'start',
          alignContent: 'center',
          display: "grid",
          margin: '2.5em auto',
          maxWidth: '960px',
          width: '100%',
          padding: '0 1.0875rem 1.45rem'
        }}>
          <Heading1>
              Hi my name is Alina {' '}
              <span role='img' aria-label='Manicure emoji'>
                💅
              </span>
            </Heading1>
            <SubHeading>
              Nailtech located in Coral Springs, FL.{' '}
            </SubHeading>
            <Button>
              <p>Appointment</p>
            </Button>
        </Section>
      </div>
    )
}

export default Banner