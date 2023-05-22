import Item from './Item';
import styles from './menu.module.scss';

const Menu = ({ menu }) => {
	const renderMenu = menu.map((item) => <Item key={item._id} recipe={item.recipe} ingredients={item.ingredients} price={item.price} />);

	return (
		<section id="menu" className={styles.menu}>
			<div className="container">
				<h2 className="gold">Menu</h2>
				<ul className={styles.list}>{renderMenu}</ul>
			</div>
		</section>
	);
};

export default Menu;
