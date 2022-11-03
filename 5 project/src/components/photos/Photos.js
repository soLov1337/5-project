import React from 'react';
import Layout from '../layout/Layout';
import './index.css';
import Collection from './Collection';
import { list } from './list';


function Photos() {
	const [searchValue, setSearchValue] = React.useState('');
	const [categoryId, setCategoryId] = React.useState(0);
	const [page, setPage] = React.useState(1);


  return (
	  <Layout>
		<div className="photos">
      	<h1>Моя коллекция фотографий</h1>
      	<div className="top">
      	  <ul className="tags">
					  {list.categories.map((obj, index) =>
						  <li
							  onClick={() => setCategoryId(index)}
							  className={categoryId === index ? 'active' : ''}
							  key={obj.name}>
							  {obj.name}
						  </li>)}
      	  </ul>
      	  <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className="photo-input" placeholder="Поиск по названию" />
      	</div>
      	<div className="content">
				  {list.collections.filter(obj => {
					  return obj.name.toLowerCase().includes(searchValue.toLowerCase());
				  }).map((obj, index) => (
					  <Collection
						key={index}
						name={obj.name}
						images={obj.photos}
					/>
				))}
      	</div>
      	<ul className="pagination">
				{
					  [...Array(5)].map((_, index) => (
						  <li onClick={() => setPage(index)} className={page === index ? 'active' : ''}>{index + 1}</li>))
				}
      	</ul>
		</div>
	  </Layout>
  );
}

export default Photos;