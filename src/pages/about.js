import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

// local components
import { Section, BodyText1, BodyTextBold1, Heading4 } from '../components/common'
import Layout from "../components/layout"
import Seo from "../components/seo"

// data
const jobs = [
    {
        name: 'Nail Concepts',
        title: 'Nailtech Assistant',
        location: 'Coral Springs, FL',
        duration: '12/2018 - 06/2020',
        duties: [
            'Helped clients achieve desired looks for routine wear and special events by crafting ideal makeup strategies.',
            'Recorded notes for future references, including customer preferences and services delivered.',
            'Maintained 10 repeat clients nail health by attaching acrlyics, filing, cuting, and painting nails.',
            'Suggested treaments and styles to suit customers\' appearance and desired look.'
        ]
    },
    {
        name: 'Nail Plus Restoration',
        title: 'Nailtech Instructor',
        location: 'Coral Springs, FL',
        duration: '12/2016 - 11/2018',
        duties: [
            'Recruited clients for students to get practical experience.',
            'Followed Florida curriculum accurately with detailed lesson plans.',
            'Planned and documented programs of study.'
        ]
    }
]
const skills = [
    'Lesson planning knowledge',
    'Bacteriology expertise',
    'Curriculum development',
    'Performance evalutation',
    'Public speaking trained',
    'Salon administration understanding',
    'Differentiated instruction',
    'Progress tracking',
]
const education = [
    {
        school: 'Aveda Institutes',
        study: 'Cosmetology ',
        location: 'Ft. Lauderdale',
        date: '05/2015',
    },
]

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
        grid-template-columns: 1fr 1fr;
    }
`

const About = () => (
    <Layout>
        <Seo title='About' />
        <Section>
            <Grid>
                <StaticImage src='../images/profile-alina.png' alt='Profile photo of Alina' />
                <div>
                    <Heading4>About</Heading4>
                    <BodyText1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        In gravida mauris eget luctus dignissim. Class aptent taciti sociosqu 
                        ad litora torquent per conubia nostra, per inceptos himenaeos.  
                    </BodyText1>
                    <BodyText1>
                        Sed ullamcorper lorem eu turpis ultrices, ac congue nunc elementum. 
                        Nullam ut aliquam nulla. Aenean ut nisl pulvinar, condimentum lectus at, 
                        rutrum diam.
                    </BodyText1>
                    <BodyText1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        In gravida mauris eget luctus dignissim. Class aptent taciti sociosqu 
                        ad litora torquent per conubia nostra, per inceptos himenaeos.  
                    </BodyText1>
                </div>
            </Grid>
            <Grid>
                <article>
                    <Heading4>Work History</Heading4>
                    {jobs.map((job) => {
                        const { name, title, location, duration, duties } = job
                        return (
                            <>
                                <BodyTextBold1>{name} - <i>{title}</i></BodyTextBold1>
                                <BodyText1>{location} - <i>{duration}</i></BodyText1>
                                <ul>
                                    {duties.map(duty => <li><BodyText1>{duty}</BodyText1></li>)}
                                </ul>
                            </>
                        )
                    })}
                </article>
                <article>
                    <Heading4>Skills</Heading4>
                    <ul>
                        {skills.map(skill => <li><BodyText1>{skill}</BodyText1></li>)}
                    </ul>
                    <Heading4>Education</Heading4>
                    <ul>
                        {education.map(ed => {
                            const { school, study, location, date } = ed
                            return (
                                <>
                                    <BodyTextBold1>{school} - <i>{study}</i></BodyTextBold1>
                                    <BodyText1>{location} - <i>{date}</i></BodyText1>
                                </>
                            )
                        })}
                    </ul>
                </article>
            </Grid>
        </Section>
    </Layout>
)

export default About;