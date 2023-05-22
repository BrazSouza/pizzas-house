import styles from './review.module.scss';
import Image from 'next/legacy/image';
import { useNextSanityImage } from 'next-sanity-image';
import client from '@/sanity';

const Review = ({ name, review, image }) => {
	const imageProps = useNextSanityImage(client, image);

	return (
		<div className={styles.review}>
			<div className="container">
				<div className={styles.avatar}>
					<Image src={imageProps.src} loader={imageProps.loader} layout="fill" objectFit="contain" alt={imageProps.alt} />
				</div>
				<span>{name}</span>
				<p>{review}</p>
			</div>
		</div>
	);
};

export default Review;
