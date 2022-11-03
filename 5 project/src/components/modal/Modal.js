import React from 'react'
import Layout from '../layout/Layout'
import './index.css'

const Modal = () => {
	const [open, setOpen] = React.useState(false);

  return (
	  <Layout>
		<div className='modalcss'>
			<button onClick={() => setOpen(true)} className='open-modal-btn'>Открыть окно</button>
			  {open && (
				<div className="overlay">
					<div className="modal1">
						  <img onClick={() => setOpen(false)} className='svg' src="https://img.icons8.com/emoji/344/cross-mark-button-emoji.png" height="300" viewBox="0 0 200 200" width="300"/>
						<img className='img' src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
					</div>
				</div> 
			  )}
	  </div>
	  </Layout>
  )
}

export default Modal