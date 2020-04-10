import React, { useEffect } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import netlifyIdentity from 'netlify-identity-widget';

const IndexPage = () => {
	useEffect(() => {
		netlifyIdentity.init();
	}, []);

	const handleClick = () => {
		netlifyIdentity.open();
		console.log('test');
	};
	return (
		<Layout>
			<SEO title="Home" />
			<h1>Hi people</h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>Now go build something great.</p>

			<button onClick={handleClick}>Login</button>

			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
			<Link to="/page-2/">Go to page 2</Link>
		</Layout>
	);
};

export default IndexPage;
