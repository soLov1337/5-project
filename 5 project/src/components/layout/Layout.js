import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { list } from './list'

const Layout = ({children}) => {
  return (
	  <div>
		  <div className='modal'>
			  <ul className='ullayout'>
				  {list.map((title) =>
					<li className='lilayout' key={title}>
						  <Link to={`/${title.toLowerCase()}`}>
							  {title}
						</Link>
					</li>)}
			  </ul>
		  </div>
		  {children}
	  </div>
  )
}

export default Layout