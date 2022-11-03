import React from 'react';
import Layout from '../layout/Layout';
import { Block } from './Block';
import './index.css';

function Convertor() {
  return (
	<Layout>
		<div className="convertor">
   	   <Block value={0} currency="RUB" onChangeCurrency={(cur) => console.log(cur)} />
   	   <Block value={0} currency="USD" />
   	 </div>
	</Layout>
  );
}

export default Convertor;