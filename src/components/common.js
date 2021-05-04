import styled from 'styled-components'

export const Container = styled.article`
    margin: 0 auto;
    max-width: 960px;
    padding: 0 1.0875rem 1.45rem;
`
export const SubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3em;

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
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    border-radius: 5%;
    color: white;
    background-color: #FF99AC;
`
export const Heading1 = styled.h1`
    color: #44566C;
    font-size: 36px;
`
export const Heading2 = styled.h2`
    color: #44566C;
    font-size: 30px;
`
export const Heading3 = styled.h3`
    color: #44566C;
    font-size: 24px;
`
export const Heading4 = styled.h4`
    color: #44566C;
    font-size: 20px;
`
export const Heading4LC = styled(Heading4)`
    color: #8A97A6;
`
export const SubHeading = styled.p`
    color: #44566C;
    font-size: 18px;
`         
export const BodyText1 = styled.p`
    color: #44566C;
    font-size: 16px;
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