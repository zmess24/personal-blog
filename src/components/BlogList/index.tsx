import * as React from 'react';
import { useState, useEffect } from 'react';
// Dummy Data
import blogPosts from '../../data/test-blog-data';

type Post = {
	title: string;
	description: string;
	date: string;
	tags: string[];
};

const BlogList: React.FC = () => {
	const [posts, setPosts] = useState<Post[]>();

	useEffect(() => {
		setTimeout(() => {
			setPosts(blogPosts);
		}, 50);
	}, []);

	if (!posts) {
		return <div></div>;
	} else {
		return (
			<main>
				{posts.map((post, index) => {
					return (
						<article key={index}>
							<h3>{post.title}</h3>
							<small>{post.date}</small>
							<p>{post.description}</p>
						</article>
					);
				})}
			</main>
		);
	}
};

export default BlogList;
