import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './index.css';

const Header: React.FC = () => {
	return (
		<header>
			<h1>TitleWillGoHere</h1>
			<aside id="bio-description">
				<StaticImage src="../../images/zdm.png" alt="Zac Messinger" />
				<p>
					A personal website by Zac Messinger.
					<br />I write about business & code.
				</p>
			</aside>
		</header>
	);
};

export default Header;
