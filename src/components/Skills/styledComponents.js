import styled from 'styled-components'

export const SkillCardFront = styled.div`
    background: ${props => props.color};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 2px 2px 8px  #90909098;
    flex-direction: column;
`

//background: ${props => props.color};