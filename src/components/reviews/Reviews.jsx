import styles from './reviews.module.scss';
import Review from './Review';

const Reviews = ({ reviews }) => {
	//*PARA CADA REVIEW, ADICIONAR UM COMPONENTE REVIEW
	const renderReviews = reviews.map((review) => <Review key={review._id} name={review.name} review={review.review} image={review.image} />);

	return (
		<section id="reviews" className={styles.reviews}>
			<div className={styles.heading}>
				<span>Depoimentos</span>
				<h2>Dos nossos clientes</h2>
			</div>
			<div className={styles.content}>{renderReviews}</div>
		</section>
	);
};

export default Reviews;
