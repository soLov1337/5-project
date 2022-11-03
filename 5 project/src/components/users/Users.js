import React from 'react';
import './users.css';
import { Success } from './components/Success';
import Layout from '../layout/Layout'
import { Users } from './components/Users';


// Тут список пользователей: https://reqres.in/api/users

function App() {
	const [users, setUsers] = React.useState([]);
	const [invites, setInvites] = React.useState([]);
	const [success, setSuccess] = React.useState(false);
	const [isLoadnig, setIsLoading] = React.useState(true);
	const [searchValue, setSearchValue] = React.useState('');

	React.useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then(res => res.json())
			.then(json => {
				setUsers(json.data);
			}).catch((err) => {
				console.warn(err);
				alert('Ошибка при получении пользователей');
			}).finally(() => setIsLoading(false));
	});

	const onChangeSearchValue = (event) => {
		setSearchValue(event.target.value);
	}

	const onClickInvite = (id) => {
		if (invites.includes(id)) {
			setInvites(prev => prev.filter(_id => _id !== id));
		} else {
			setInvites((prev) => [...prev, id]);
		}
	}

	const onCLickSendInvites = () => {
		setSuccess(true);
}

	return (
	<Layout>
			<div className="AppUsers">
				{
					success ? (
						<Success count={invites.length} />
					)	: (
					<Users
					onChangeSearchValue={onChangeSearchValue}
					searchValue={searchValue}
					items={users}
					isLoading={isLoadnig}
					invites={invites}
					onClickInvite={onClickInvite}
					onCLickSendInvites={onCLickSendInvites}
				/>)
				}
				
		</div>
	</Layout>
  );
}

export default App;