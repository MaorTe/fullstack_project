import { useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 50px;
	text-align: center;
`;

const Logout = ({ getUser, isLoggedIn }) => {
	useEffect(() => {
		const localData = JSON.parse(localStorage.getItem('localData'));
		const indexId = localData.findIndex((el) => el.token);
		localData.splice(indexId, 1);
		localStorage.setItem('localData', JSON.stringify(localData));

		console.log(isLoggedIn);
	}, []);

	const history = useHistory();
	// function redirectToHomepage() {
	// 	getUser();
	// 	setTimeout(() => {
	// 		// redirect to homepage
	// 		history.push('/');
	// 	}, 1500);
	// }
	return (
		<Container>
			<h1>Logged out successfully</h1>
			{/* {redirectToHomepage()} */}
		</Container>
	);
};

export default Logout;