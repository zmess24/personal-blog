import * as React from 'react';
import './index.css';
import Header from '../Header';
import Menu from '../Menu';

interface LayoutProps {
	title: string;
	children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
	return (
		<div id="layout-wrapper">
			<Header />
			<Menu />
			{children}
		</div>
	);
};

export default Layout;
