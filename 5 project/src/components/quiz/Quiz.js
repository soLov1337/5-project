import React from 'react'
import Layout from '../layout/Layout'
import './quiz.css'

const questions = [
	{
	  title: 'React - это ... ?',
	  variants: ['библиотека', 'фреймворк', 'приложение'],
	  correct: 0,
	},
	{
	  title: 'Компонент - это ... ',
	  variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
	  correct: 1,
	},
	{
	  title: 'Что такое JSX?',
	  variants: [
		 'Это простой HTML',
		 'Это функция',
		 'Это тот же HTML, но с возможностью выполнять JS-код',
	  ],
	  correct: 2,
	},
 ];
 
function Result({ correct }) {
	return (
	  <div className="result">
		 <img className='imgQuiz' src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>Вы отгадали {correct} ответа из {questions.length}</h2>
			<button className='btnquiz'>Попробовать снова</button>
	  </div>
	);
 }



function Game({ step, question, onClickVariant }) {
	const percent = Math.round((step / questions.length) * 100);

	return (
	  <>
		 <div className="progress">
			<div style={{ width: `${percent}%` }} className="progress__inner"></div>
		 </div>
			<h2>{question.title}</h2>
		 <ul className='ulquiz'>
				{question.variants.map((text, index) => (
					<li onClick={() => onClickVariant(index)} key={text} className='liquiz'>
						{text}
					</li>
			))}
		 </ul>
	  </>
	);
 }
 
function Quiz() {
	const [step, setStep] = React.useState(0);
	const [correct, setCorrect] = React.useState(0);
	const question = questions[step];
	
	
	const onClickVariant = (index) => {
		console.log(step, index);
		setStep(step + 1);

		if (index === question.correct) {
			setCorrect(correct + 1);
		}
	}

	return (
		<Layout>
			<div className="quizApp">
				{
					step !== questions.length ? (<Game step={step} question={question} onClickVariant={onClickVariant} />)
						:
					(<Result correct={correct} />)
				}
			</div>
		</Layout>
	);
 }

export default Quiz