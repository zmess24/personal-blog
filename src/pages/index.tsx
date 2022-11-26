import * as React from 'react';
import type { PageProps } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout title="Home">
			<main>
				<h1>Home page</h1>
			</main>
		</Layout>
	);
};

export default IndexPage;
