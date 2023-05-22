import styles from './header.module.scss';
import Image from 'next/legacy/image';
import { useNextSanityImage } from 'next-sanity-image';
import client from '@/sanity';
// import Carousel from './Carousel';

const Header = ({ header }) => {
	//? Trazendo as imagens do banco Sanity
	const imageProps = useNextSanityImage(client, header.image); //? "useNextSanityImage" É fornecido pela biblioteca @sanity/image-url que ajuda a gerar URLs otimizados para imagens
	// const renderSlide = carousel.map((slide) => slide.image);
	return (
		<header className={styles.header}>
			{/* <Carousel image={renderSlide} /> */}
			<div className={styles.renderSlide}></div>
			<div className="container">
				<div className={styles.content}>
					<h1>{header.title}</h1>
					<p>{header.subtitle}</p>
				</div>
				<div className={styles.image}>
					<Image src={imageProps.src} loader={imageProps.loader} layout="fill" objectFit="contain" alt={header.image.alt} />
				</div>
			</div>
		</header>
	);
};

export default Header;
