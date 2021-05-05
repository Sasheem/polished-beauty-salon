import * as React from 'react'

// local components
import { Section, Heading1, BodyText1 } from '../components/common'
import Layout from "../components/layout"
import Seo from "../components/seo"

const Appointment = () => (
    <Layout>
        <Seo title='Appointment' />
        <Section>
            <Heading1>Book appointment</Heading1>
            <BodyText1>Appointment form goes here.</BodyText1>
        </Section>
    </Layout>
)

export default Appointment