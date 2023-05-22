import styles from './style/benefit.module.scss';
import { useNextSanityImage } from 'next-sanity-image';
import client from '@/sanity';
import Image from 'next/image';

const Benefit = ({ title, subtitle, icon }) => {
	const iconProps = useNextSanityImage(client, icon);

	return (
		<div className={styles.benefit}>
			<div className="container">
				<div className={styles.img}></div>
				<div className={styles.content}>
					<Image src={iconProps.src} loader={iconProps.loader} width={56} height={56} alt={iconProps.icon} />
					<h2>{title}</h2>
					<h3>{subtitle}</h3>
				</div>
			</div>
		</div>
	);
};

export default Benefit;
