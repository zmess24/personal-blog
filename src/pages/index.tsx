import * as React from 'react';
import type { PageProps } from 'gatsby';
import Header from '../components/Header';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main>
			<Header />
		</main>
	);
};

export default IndexPage;
