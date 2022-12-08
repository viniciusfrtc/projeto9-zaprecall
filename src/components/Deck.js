import flashcards from '../constants/flashcards'
import FoldedQuestion from './FoldedQuestion';
import OpenedQuestion from './OpenedQuestion';
import { useState } from "react";

const Deck = ({incrementAnswersCounter}) => {
   const [revealedQuestions, setRevealedQuestions] = useState([])
   const [revealedAnswers, setRevealedAnswers] = useState([])
   const [answersFeedback, setAnswersFeedback] = useState({})

   const revealQuestion = questionIndex => setRevealedQuestions(
      Array.from(new Set([...revealedQuestions, questionIndex]))
   )
   
   const revealAnswer = questionIndex => setRevealedAnswers(
      Array.from(new Set([...revealedAnswers, questionIndex]))
   )

   const assignFeedbackToQuestion = (questionIndex, feedback) => {
      setAnswersFeedback({
         ...answersFeedback,
         [questionIndex]: feedback
      })
      incrementAnswersCounter()
   }

   return flashcards.map(({question, answer}, questionIndex) => {
      if (revealedQuestions.includes(questionIndex) && !answersFeedback[questionIndex]) {
         return (
            <OpenedQuestion
               showAnswer={revealedAnswers.includes(questionIndex)}
               key={questionIndex}
               question={question}
               answer={answer}
               revealAnswer={() => revealAnswer(questionIndex)}
               assignFeedback={feedback => assignFeedbackToQuestion(questionIndex, feedback)}
            />
         )
      }
      return (
         <FoldedQuestion 
            key={questionIndex}
            questionIndex={questionIndex}
            revealQuestion={() => revealQuestion(questionIndex)}
            answerFeedback={answersFeedback[questionIndex]}
         />
      )
   })
}

export default Deck