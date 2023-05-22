import styles from './item.module.scss';

const Item = ({ recipe, ingredients, price }) => {
	return (
		<div className={styles.item}>
			<li className={styles.items}>
				<div className={styles.content}>
					<h3>{recipe}</h3>
					<h4>{ingredients}</h4>
				</div>
				<div className={styles.divisor} />
				<h5>{price}</h5>
			</li>
		</div>
	);
};

export default Item;
