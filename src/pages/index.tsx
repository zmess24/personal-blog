import * as React from 'react';
import { useState } from 'react';
import type { PageProps } from 'gatsby';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Projects from '../components/Projects';
import BlogList from '../components/BlogList';
import './global.css';
// Dummy Data
import blogPosts from '../data/test-blog-data';

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
			{activeTab === 'blog' ? <BlogList /> : <Projects />}
		</div>
	);
};

export default IndexPage;
