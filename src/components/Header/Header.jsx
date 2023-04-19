import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/ne10_logo.png';

const Header = () => {
	return (
		<div className={styles.box}>
			<img
				src={logo}
				alt='Logo do Ne10'
				className={styles.img}
			/>
		</div>
	);
};

export default Header;
