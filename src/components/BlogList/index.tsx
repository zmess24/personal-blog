import * as React from 'react';

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
