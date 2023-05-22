import styles from './carousel.module.scss';
import Slider from 'react-slick';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/legacy/image';
import client from '@/sanity';

const Carousel = ({ image }) => {
	const imageProps = useNextSanityImage(client, image);

	const renderedSlides = image.map((slide, index) => {
		return (
			<div key={index}>
				{imageProps && (
					<div>
						<Image src={slide.src} loader={slide.loader} layout="fill" objectFit="contain" alt={slide.image.alt} />
					</div>
				)}
			</div>
		);
	});

	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className={styles.wrapper}>
			<Slider {...settings}>{renderedSlides}</Slider>
		</div>
	);
};

export default Carousel;
