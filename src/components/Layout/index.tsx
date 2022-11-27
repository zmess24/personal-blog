import * as React from 'react';
import { useState } from 'react';
import './index.css';
import Header from '../Header';
import Menu from '../Menu';

interface LayoutProps {
	title: string;
	children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
	const [activeTab, setActiveTab] = useState<string>('blog');

	let value = activeTab;

	let clickHandler = (value: string) => {
		setActiveTab(value);
	};

	return (
		<div id="layout-wrapper">
			<Header />
			<Menu activeTab={value} clickHandler={clickHandler} />
			{children}
		</div>
	);
};

export default Layout;
