import { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import styles from './navbar.module.scss';
import Image from 'next/legacy/image';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
	const [navbarActive, setnavbarActive] = useState(false);
	const [menuMobileActive, setMenuMobileActive] = useState(false);

	useEffect(() => {
		const setNavbarHandler = () => {
			if (window.scrollY >= 600) return setnavbarActive(true);
			return setnavbarActive(false);
		};

		document.addEventListener('scroll', setNavbarHandler);

		return () => {
			document.removeEventListener('scroll', setNavbarHandler);
		};
	}, []);

	const toggleMenuHandler = () => setMenuMobileActive(!menuMobileActive);

	return (
		<section className={`${styles.navbar} ${navbarActive && styles.active}`}>
			<div className="container">
				<div className={styles.nav}>
					<a href="#">
						<Image src="/logo.png" width={120} height={40} alt="Logo" />
					</a>
					<nav className={styles.links}>
						<NavLinks toggleMenu={null} />
					</nav>

					<GiHamburgerMenu className={styles.icon} onClick={toggleMenuHandler} />
					<nav className={`${styles.menuMobile} ${menuMobileActive && styles.active}`}>
						<NavLinks toggleMenu={toggleMenuHandler} />
					</nav>
					<div className={`${styles.bodyMenu} ${menuMobileActive && styles.active}`} />
				</div>
			</div>
		</section>
	);
};

export default Navbar;
