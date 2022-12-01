import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './index.css';

const Header: React.FC = () => {
	return (
		<header>
			<section id="head">
				<h1 className="title-font">Overreacted</h1>
				<div>
					<span>Github</span>
					<span>LinkedIn</span>
				</div>
			</section>
			<aside id="bio-description">
				<StaticImage src="../../images/zdm.png" alt="Zac Messinger" />
				<p>
					Personal Website by Zac Messinger.
					<br />I write about business & code.
				</p>
			</aside>
		</header>
	);
};

export default Header;
