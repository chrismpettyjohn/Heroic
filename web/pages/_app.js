import React from 'react'
import Layout from '~/layout'
import App, { Container } from 'next/app'

class CustomApp extends App {
	
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		
		return { pageProps };
	}
	
	render() {
		const { Component, pageProps } = this.props;
		
		return (
			<Layout>
				<Container>
					<Component {...pageProps} />
				</Container>
			</Layout>
		);
	}
}

export default CustomApp
