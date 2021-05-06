import * as React from 'react'

// local components
import { Container, SubContainer, Heading2 } from './common'
import ServiceCard from './serviceCard'

// data 
const services = [
    {
      title: 'Manicure',
      price: '19',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      duration: '30 mins'
    },
    {
      title: 'Pedicure',
      price: '39',
      description: 'Polish removal, cutting cuticles, removal of dead skin, foot sugar scrub and massage.',
      duration: '1 hour'
    },
    {
      title: 'Gel Manicure',
      price: '35',
      description: 'Gel base nail polish. Brands: CND, OPI, IBD, and GELISH.',
      duration: '1 hour'
    },
    {
      title: 'Acrylic Fills',
      price: '29',
      description: '2 week refills $29, 3 week refills $34, and 4 week refills $39.',
      duration: '30 mins to 1 hour'
    },
    {
      title: 'Acrylic Pink Fills',
      price: '35',
      description: 'Brand CND.',
      duration: '30 mins'
    },
    {
      title: 'Acrylic Full Set',
      price: '45',
      description: 'Pink and White Full Set $60. Brand CND',
      duration: '1 hour'
    }
  ]

// markup
const Services = () => {
    return (
        <Container>
            <Heading2 id='services'>Services</Heading2>
            <SubContainer>
                {services.map((service) => {
                    return (
                        <ServiceCard 
                            title={service.title}
                            price={service.price}
                            description={service.description}
                            duration={service.duration}
                        />
                    )
                })}
            </SubContainer>
        </Container>
    )
}

export default Services