import styles from './footer.module.scss';
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import Image from 'next/image';

const Footer = ({ footer }) => {
	const renderLinks = footer.links.map((link) => (
		<li key={link._id}>
			<a href={link.url}>{link.title}</a>
		</li>
	));

	const renderContatos = footer.contato.map((item) => <li key={item._id}>{item.text}</li>);

	return (
		<section className={styles.footer}>
			<div className="container">
				<div className="row row-cols-auto justify-content-between">
					<div className="col-12 col-md">
						<div className={styles.main}>
							<a href="#">
								<Image src="/logo.png" width={180} height={80} alt="Logo Footer" />
							</a>
							<h3>{footer.text}</h3>
							<ul>
								<li>
									<a href={footer.linkedin}>
										<FaLinkedin className="icon" />
									</a>
								</li>
								<li>
									<a href={footer.facebook}>
										<FaFacebookSquare className="icon" />
									</a>
								</li>
								<li>
									<a href={footer.instagran}>
										<FaInstagramSquare className="icon" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-md">
						<div className={styles.links}>
							<h2>links</h2>
							<ul>{renderLinks}</ul>
						</div>
					</div>
					<div className="col-12 col-md">
						<div className={styles.contato}>
							<h2>Contato</h2>
							<ul>{renderContatos}</ul>
						</div>
					</div>
				</div>
				<div className={styles.direito}>
					<p>Pizza House - Todos os direitos reservados</p>
				</div>
			</div>
		</section>
	);
};
export default Footer;
