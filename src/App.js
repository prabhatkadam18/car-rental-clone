import './App.css';
import Header from './home/Header';
import styles from './styles.module.css';

function App() {
	return (
		<div className={`App ${styles.App}`}>
			<div style={{ width: '100%', display: 'flex', alignItems: 'flex-end' }}>
				<img className={styles.bannerImage} src='./assets/images/banner_image.png' alt='' />
			</div>
			<Header />
		</div>
	);
}

export default App;
