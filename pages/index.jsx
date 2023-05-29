import Head from 'next/head';
import client from '@/sanity';
import Header from '@/components/header/Header';
import Benefits from '@/components/benefits/Benefits';
import ImageText from '@/components/imageText/ImageText';
import Cardapio from '@/components/cardapio/Cardapio';
import Reviews from '@/components/reviews/Reviews';
import Menu from '@/components/menu/Menu';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
// import Carousel from '@/components/header/Carousel';

export default function Home({ header, benefits, about, cardapio, reviews, location, menu, footer }) {
	return (
		<>
			<Head>
				<title>Pizzas House</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navbar />
			<Header header={header} />
			{/* <Carousel image={carousel} /> */}
			<main>
				<Benefits benefits={benefits} />
				<ImageText data={about} id="about" />
				<Cardapio cardapio={cardapio} />
				<Reviews reviews={reviews} />
				<ImageText data={location} id="location" />
				<Menu menu={menu} />
			</main>
			<Footer footer={footer} />
		</>
	);
}

//TODO - ANTES DE QUALQUER COMPONENTE SER CARREGADO, O "getStaticProps" VAI SER CARREGADO PRIMEIRO
//? Aqui dentro podemos passar informações, fazer requisições e as requisições serem passadas para dentro dos componentes.
//? Assim, quando o projeto estiver em tempo de build, ele pega as requisições que estou fazendo e pega o objeto de props para os componentes.
//? Quando o componente carregar, ele ja vai ter acesso a todas as informações de requisições aqui dentro.

export const getStaticProps = async () => {
	const header = await client.fetch(`*[_type == "header"][0]`); //* Procurando nos schemas, qual schema tem o tipo igual ao header
	const benefits = await client.fetch(`*[_type == "benefits"][0..2]`);
	const about = await client.fetch(`*[_type == "about"][0]`);
	const cardapio = await client.fetch(`*[_type == "cardapio"][0..3]`);
	const reviews = await client.fetch(`*[_type == "reviews"][0..2]`);
	const location = await client.fetch(`*[_type == "location"][0]`);
	const menu = await client.fetch(`*[_type == "menu"][0..19]`);
	const footer = await client.fetch(`*[_type == "footer"][0]`);
	// const carousel = await client.fetch(`*[_type == "carousel"][0..2]`);
	return {
		props: { header, benefits, about, cardapio, reviews, location, menu, footer },
	};
};
