import { useState } from 'react';
import styles from './Post.module.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Posts = ({ url_img, text, desc }) => {
	const [isHovered, setIsHovered] = useState(false);

	const onMouseEnter = () => {
		setIsHovered(true);
	};
	const onMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div className={styles.post}>
			<div className={styles.box_img}>
				<img
					src={url_img}
					alt='Imagem legal'
					className={styles.img}
				/>
				<span
					className={styles.icon}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
				>
					{isHovered ? <AiFillHeart size={40} /> : <AiOutlineHeart size={40} />}
				</span>
			</div>
			<h2 className={styles.title}>{text}</h2>
			<p>{desc}</p>
			<hr />
		</div>
	);
};

export default Posts;
