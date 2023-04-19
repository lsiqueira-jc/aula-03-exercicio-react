import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

import './Global.css';
import styles from './App.module.css';

function App() {
	const url = 'https://via.placeholder.com/500x350';
	const text =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt iste saepe voluptates ad, vitae earum, dolorum consequatur architecto cumque repellendus eius culpa dolores ipsam voluptas officiis deleniti praesentium excepturi magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt dolore accusamus soluta consequuntur ipsum culpa, quia similique delectus autem fugit perspiciatis. Vel, voluptas. Eaque atque maxime quos magnam fugit.';
	return (
		<div>
			<Header />
			<div className={styles.posts}>
				<Posts
					url_img={url}
					text={text}
				/>
				<Posts
					url_img={url}
					text={text}
				/>
				<Posts
					url_img={url}
					text={text}
				/>
			</div>
		</div>
	);
}

export default App;
