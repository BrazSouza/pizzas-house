import styles from './items.module.scss';
import Image from 'next/image';
import client from '@/sanity';
import { useNextSanityImage } from 'next-sanity-image';

const Items = ({ image, title, category }) => {
	const imageProps = useNextSanityImage(client, image);

	return (
		<div className={styles.items}>
			<div className="container">
				<div className={styles.item}>
					<Image src={imageProps.src} loader={imageProps.loader} width={200} height={200} alt={imageProps.alt} />
					<h3>{category}</h3>
					<h4>{title}</h4>
				</div>
			</div>
		</div>
	);
};

export default Items;
