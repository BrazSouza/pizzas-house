import styles from './imageText.module.scss';
import Image from 'next/legacy/image';
import { useNextSanityImage } from 'next-sanity-image';
import client from '@/sanity';

const ImageText = ({ data, id }) => {
	const imageProps = useNextSanityImage(client, data.image);

	return (
		<section id={id} className={styles.section}>
			<div className="container">
				<div className="row row-cols align-items-center justify-content-between">
					<div className="col-12 col-md">
						<div className={styles.image}>
							<Image src={imageProps.src} loader={imageProps.Loader} layout="fill" objectFit="contain" alt={imageProps.image} />
						</div>
					</div>
					<div className="col-12 col-md">
						<div className={styles.content}>
							<span>{data.top_title}</span>
							<h2>{data.title}</h2>
							{data.email && <p>{data.email}</p>} {/* EXITE ALGUM DATA.EMAIL? SE EXISTE, APLICAR.. */}
							{data.number && <p>{data.number}</p>}
							<p>{data.text}</p>
							<a href={data.url} className="btn btn-primary">
								{data.button} &rarr;
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImageText;
