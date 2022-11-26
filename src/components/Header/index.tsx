import * as React from 'react';
import './index.css';

const Header: React.FC = () => {
	return (
		<header>
			<h1>TitleWillGoHere</h1>
			<aside id="bio-description">
				<img
					src="https://via.placeholder.com/150"
					alt="Zac Messinger"
				/>
				<p>
					A personal website by Zac Messinger.
					<br />I write about business & code.
				</p>
			</aside>
		</header>
	);
};

export default Header;
