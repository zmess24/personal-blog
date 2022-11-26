import * as React from 'react';
import './index.css';
import Header from '../Header';

interface LayoutProps {
	title: string;
	children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
	return (
		<div id="container">
			<Header />
			{children}
		</div>
	);
};

export default Layout;
