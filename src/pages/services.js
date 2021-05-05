import * as React from 'react'

import { Section, Heading1, BodyText1 } from '../components/common'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Services = () => (
    <Layout>
        <Seo title='Salon Services' />
        <Section>
            <Heading1>Services</Heading1>
            <BodyText1>Details of all services offered go here.</BodyText1>   
        </Section>
    </Layout>
)

export default Services