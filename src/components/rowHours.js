import * as React from 'react'
import styled from 'styled-components'

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Left = styled.p`
    text-align: left;
`
const Right = styled.p`
    text-align: right;
`

const RowHours = ({ day, duration }) => (
    <Row>
        <Left>{day}</Left>
        <Right>{duration}</Right>
    </Row>
)

export default RowHours