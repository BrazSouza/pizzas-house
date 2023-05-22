import styles from './style/benefits.module.scss';
import Benefit from './Benefit';

const Benefits = ({ benefits }) => {
	//todo - Desestruturando objetos para extrair  as propriedades
	//todo - title, subtitle e icon de cada objeto benefit no array benefits
	// const { title: title1, subtitle: subtitle1, icon: icon1 } = benefits[0];
	// const { title: title2, subtitle: subtitle2, icon: icon2 } = benefits[1];
	// const { title: title3, subtitle: subtitle3, icon: icon3 } = benefits[2];

	return (
		<section className={styles.benefits}>
			<div className="container">
				<div className={styles.benefitsMobile}>
					{benefits.slice(0, 2).map((benefit, index) => (
						<Benefit key={index} title={benefit.title} subtitle={benefit.subtitle} icon={benefit.icon} />
					))}
				</div>

				<div className="text-center">
					<Benefit title={benefits[2].title} subtitle={benefits[2].subtitle} icon={benefits[2].icon} />
				</div>
			</div>
		</section>
	);
};
export default Benefits;
