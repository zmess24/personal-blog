import * as React from 'react';
import './index.css';

type BlostListProps = {
	posts: BlogListItem[] | null;
};

type BlogListItem = {
	title: string;
	description: string;
	date: string;
	tags: string[];
};

const BlogList: React.FC<BlostListProps> = ({ posts }) => {
	if (!posts) {
		return <div></div>;
	} else {
		return (
			<main>
				{posts.map((post, index) => {
					return (
						<article key={index} className="article">
							<h3 className="title-font">{post.title}</h3>
							<small className="date">{post.date}</small>
							<p className="">{post.description}</p>
						</article>
					);
				})}
			</main>
		);
	}
};

export default BlogList;
