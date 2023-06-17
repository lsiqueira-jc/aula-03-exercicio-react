import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

import './Global.css';
import styles from './App.module.css';
import { useEffect, useState } from 'react';
import api from './service/api';

const old = [
	{
		url: 'https://via.placeholder.com/500x350',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt iste saepe voluptates ad, vitae earum, dolorum consequatur architecto cumque repellendus eius culpa dolores ipsam voluptas officiis deleniti praesentium excepturi magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt dolore accusamus soluta consequuntur ipsum culpa, quia similique delectus autem fugit perspiciatis. Vel, voluptas. Eaque atque maxime quos magnam fugit.',
	},
];

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function getNoticias() {
			await api
				.get('/listar')
				.then((response) => setData(response.data.data))
				.catch((err) => {
					console.error('ops! ocorreu um erro' + err);
				});
		}
		getNoticias();
	}, []);
	return (
		<div>
			<Header />
			<div className={styles.posts}>
				{data.map((post, index) => (
					<Posts
						url_img={post.imagem}
						text={post.titulo}
						desc={post.descricao}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
