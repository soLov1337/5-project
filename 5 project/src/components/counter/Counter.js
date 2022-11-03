import React from 'react'
import Layout from '../layout/Layout';
import './index.css'

const Counter = () => {
	const [count, setCount] = React.useState(0);

	const onClickPlus = () => {
		setCount(count + 1);
	}

	const onClickMinus = () => {
		setCount(count - 1);
	}

	return (
	  <Layout>
	  <div className='App'>
		  <h2>Счетчик:</h2>
		  <h1>{count}</h1>
		  <button onClick={onClickMinus} className='minus'>- Минус</button>
		  <button onClick={onClickPlus} className='plus'>Плюс +</button>
	  </div>
	</Layout>
  )
}

export default Counter