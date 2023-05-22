import styles from './cardapio.module.scss';
import Items from './Items';

const Cardapio = ({ cardapio }) => {
	if (!cardapio || cardapio.length === 0) {
		return <div>Nenhum item encontrado.</div>;
	}
	const renderItem = cardapio.map((item) => <Items key={item._id} image={item.image} category={item.category} title={item.title} />);

	return (
		<>
			<section className={styles.cardapio}>
				<h2 className="text-center">No Cardápio</h2>
				<div className={styles['items-mobile']}>{renderItem}</div>
			</section>
		</>
	);
};

export default Cardapio;
