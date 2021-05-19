import styled from 'styled-components'

export const Container = styled.article`
    margin: 0 auto;
    max-width: 960px;
    width: 100%;
    padding: 0 1.0875rem 1.45rem;

    // when browser screen is smaller than 480px
    @media only screen and (max-width: 480px) {
        padding: 0 1.5em 1.45em;
    }
`
export const Section = styled.section`
    margin: 0 auto;
    max-width: 960px;
    width: 100%;
    padding: 0 1.0875rem 1.45rem;

    // when browser screen is smaller than 768px
    @media only screen and (max-width: 768px) {
        padding: 0 1.5em 1.45em;
    }
`
export const SubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3em;

    // remove if this gets in the way of other components layout
    margin-bottom: 2em;

    // active when browser window is larger than 480px
    // target tablets
	@media only screen and (min-width: 480px) {
		grid-template-columns: 1fr 1fr;
	}

    // active when browser window is larger than 768px
    // target desktops
    @media only screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`
export const Button = styled.div`
    padding: 0.5rem 1rem;
    display: inline-block;
    border-radius: 5px;
    color: white;
    background-color: #FF99AC;

    p {
        color: white;
        margin: 0;
        padding: 0;
        width: 100% !important;
    }

    &:hover {
        cursor: pointer;
    }
`
export const Input = styled.input`
    width: 100%;
    padding: 0.25em 0.5em;
`
export const Textarea = styled.textarea`
    width: 100%;
    padding: 0.25em 0.5em;
`
export const Submit = styled.input`
    padding: 0.5rem 1rem;
    display: inline-block;
    border-radius: 5px;
    color: white;
    background-color: #FF99AC;
    border-style: none;
    &:hover {
        cursor: pointer;
    }
`
export const Heading1 = styled.h1`
    color: #44566C;
    font-size: 36px;
`
export const Heading1Light = styled(Heading1)`
    color: #FAFBFB;
`
export const Heading2 = styled.h2`
    color: #44566C;
    font-size: 30px;
`
export const Heading2Light = styled(Heading2)`
    color: #FAFBFB;
`
export const Heading3 = styled.h3`
    color: #44566C;
    font-size: 24px;
`
export const Heading3Light = styled(Heading3)`
    color: #FAFBFB;
`
export const Heading4 = styled.h4`
    color: #44566C;
    font-size: 20px;
`
export const Heading4Light = styled(Heading4)`
    color: #FAFBFB;
    // color: #FFFFFF;
`
export const Heading4LC = styled(Heading4)`
    color: #8A97A6;
`
export const Heading4Accent = styled(Heading4)`
    color: #FF99AC;
`
export const SubHeading = styled.p`
    color: #44566C;
    font-size: 18px;
`         
export const BodyText1 = styled.p`
    color: #44566C;
    font-size: 16px;
`
export const BodyTextBold1 = styled(BodyText1)`
    font-weight: 600;
`
export const BodyText2 = styled.p`
    color: #44566C;
    font-size: 14px;
`
export const BodyText2LC = styled(BodyText2)`
    color: #8996A6;
`
export const BodyText3 = styled.p`
    color: #44566C;
    font-size: 12px;
`
export const BodyText3LC = styled(BodyText3)`
    color: #8996A6;
`
export const ErrorText = styled.p`
    color: red;
    text-align: center;
`;
export const SuccessText = styled.p`
    color: green;
    text-align: left;
`;