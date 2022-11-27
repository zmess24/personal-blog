import * as React from 'react';
import './index.css';

type MenuProps = {
	activeTab: string;
	clickHandler: (e: 'blog' | 'projects') => void;
};

const Menu: React.FC<MenuProps> = ({ activeTab, clickHandler }) => {
	return (
		<nav id="nav">
			<ul>
				<li
					onClick={() => clickHandler('blog')}
					className={activeTab === 'blog' ? 'active' : ''}
				>
					Blog
				</li>
				<li
					onClick={() => clickHandler('projects')}
					className={activeTab === 'projects' ? 'active' : ''}
				>
					Projects
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
