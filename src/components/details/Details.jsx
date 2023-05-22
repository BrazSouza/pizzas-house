import styles from './details.module.scss';

const Details = () => {
	return (
		<section className={styles.details}>
			<div className="container">
				<div className="row row-cols-5 align-items-center justify-content-around">
					<div className="col bg-info">
						<h1>TESTE 1</h1>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, soluta? Tempora ipsam, earum vitae sunt explicabo quo? Dolorem voluptatem possimus magni placeat? Animi tempore exercitationem impedit et numquam odio accusamus.</p>
					</div>
					<div className="col bg-success">
						<h1>TESTE 2</h1>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, soluta? Tempora ipsam, earum vitae sunt explicabo quo? Dolorem voluptatem possimus magni placeat? Animi tempore exercitationem impedit et numquam odio accusamus.</p>
					</div>
					<div className="col bg-danger">
						<h1>TESTE 3</h1>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, soluta? Tempora ipsam, earum vitae sunt explicabo quo? Dolorem voluptatem possimus magni placeat? Animi tempore exercitationem impedit et numquam odio accusamus.</p>
					</div>
					<div className="col bg-dark text-light">
						<h1>TESTE 4</h1>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, soluta? Tempora ipsam, earum vitae sunt explicabo quo? Dolorem voluptatem possimus magni placeat? Animi tempore exercitationem impedit et numquam odio accusamus.</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Details;
