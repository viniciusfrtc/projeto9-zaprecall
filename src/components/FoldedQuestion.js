import styled from 'styled-components'
import play_arrow from '../assets/play_arrow.png';
import green_icon from '../assets/green_icon.png';
import red_icon from '../assets/red_icon.png';
import yellow_icon from '../assets/yellow_icon.png';

const questionColors = {
    green: "#2FBE34",
    yellow: "#FF922E",
    red: "#FF3030",
    eye: "#333333" 
}

const StyledFoldedQuestion = styled.div`
width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;

p{font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: ${({answerFeedback}) => answerFeedback ? questionColors[answerFeedback] : questionColors};
}
`

const Icon = ({answerFeedback, revealQuestion}) => {
    switch (answerFeedback) {
        case 'red':
            return <img src={red_icon} alt='red_icon'/>
        case 'yellow':
            return <img src={yellow_icon} alt='yellow_icon'/>
        case 'green':
            return <img src={green_icon} alt='green_icon'/>
        default:
            return <img onClick={revealQuestion} src={play_arrow} alt='play_arrow'/>
    }
}

const FoldedQuestion = ({questionIndex, revealQuestion, answerFeedback}) => {
    const questionNumber = questionIndex + 1
    return (
        <StyledFoldedQuestion answerFeedback={answerFeedback} >
            <p>Pergunta {questionNumber}</p>
            <Icon answerFeedback={answerFeedback} revealQuestion={revealQuestion} />
        </StyledFoldedQuestion>
    )
}

export default FoldedQuestion