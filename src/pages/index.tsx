import * as React from 'react';
import { useState } from 'react';
import type { PageProps } from 'gatsby';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import './global.css';

const IndexPage: React.FC<PageProps> = () => {
	const [activeTab, setActiveTab] = useState<string>('blog');

	let value = activeTab;

	let clickHandler = (value: string) => {
		setActiveTab(value);
	};

	return (
		<div id="wrapper">
			<Header />
			<Menu activeTab={value} clickHandler={clickHandler} />
			{activeTab === 'blog' ? <Blog /> : <Projects />}
		</div>
	);
};

export default IndexPage;
