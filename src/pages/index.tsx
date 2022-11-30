import * as React from 'react';
import { useState, useEffect } from 'react';
import type { PageProps } from 'gatsby';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Projects from '../components/Projects';
import BlogList from '../components/BlogList';
import './global.css';
// Dummy Data
import blogPosts from '../data/test-blog-data';

type Post = {
	title: string;
	description: string;
	date: string;
	tags: string[];
};

const IndexPage: React.FC<PageProps> = () => {
	const [activeTab, setActiveTab] = useState<string>('blog');
	const [posts, setPosts] = useState<Post[]>();

	useEffect(() => {
		setTimeout(() => {
			setPosts(blogPosts);
		}, 1000);
	}, []);

	let value = activeTab;

	let clickHandler = (value: string) => {
		setActiveTab(value);
	};

	return (
		<div id="wrapper">
			<Header />
			<Menu activeTab={value} clickHandler={clickHandler} />
			{activeTab === 'blog' ? (
				<BlogList posts={posts ? posts : null} />
			) : (
				<Projects />
			)}
		</div>
	);
};

export default IndexPage;
