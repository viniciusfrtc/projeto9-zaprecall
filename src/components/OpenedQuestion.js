import styled from 'styled-components'
import turn_arrow from '../assets/turn_arrow.png';

const StyledOpenedQuestion = styled.div`
width: 300px;
margin: 12px;
padding: 15px;
min-height: 100px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const RevealAnswerButton = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const RedButton = styled.button`
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #fff;
background: #FF3030;
border-radius: 5px;
border: 1px solid #FF3030;
padding:5px;
`
const GreenButton = styled.button`
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFF;
background: #2FBE34;
border-radius: 5px;
border: 1px solid #2FBE34;
padding:5px;
`
const YellowButton = styled.button`
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFF;
background: #FF922E;
border-radius: 5px;
border: 1px solid #FF922E;
padding:5px;
`

const StyledFeedbackButtonsGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const FeedbackButtonsGroup = ({assignFeedback}) => (
    <StyledFeedbackButtonsGroup>
        <RedButton onClick={() => assignFeedback('red')}>Não lembrei</RedButton>
        <YellowButton onClick={() => assignFeedback('yellow')}>Quase não lembrei</YellowButton>
        <GreenButton onClick={() => assignFeedback('green')}>Zap!</GreenButton>
    </StyledFeedbackButtonsGroup>

)

const OpenedQuestion = ({question, revealAnswer, showAnswer, answer, assignFeedback}) => {
    if (showAnswer) {
        return (
            <StyledOpenedQuestion>
                <p>{answer}</p>
                <FeedbackButtonsGroup assignFeedback={assignFeedback}/>
            </StyledOpenedQuestion>
        )
    }

    return (
        <StyledOpenedQuestion>
            <p>{question}</p>
            <RevealAnswerButton onClick={revealAnswer} src={turn_arrow} alt='turn_arrow'/>
        </StyledOpenedQuestion>
    )
}

export default OpenedQuestion