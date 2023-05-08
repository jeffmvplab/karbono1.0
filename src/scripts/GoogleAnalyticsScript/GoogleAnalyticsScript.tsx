import Script from 'next/script';
import React, { useState } from 'react';

const GoogleAnalyticsScript = () => {

	const [loading, setLoading] = useState(true);


	return <>
		<Script
			id="googleAnalytics"
			// type="text/javascript"
			src="https://www.googletagmanager.com/gtag/js?id=G-3YC6MN9379"
			strategy="beforeInteractive"
			onReady={() => {
				setLoading(false);
			}}
		/>
		{
			!loading &&
			<Script
				id="scriptAfterInteractive"
				type="text/javascript"
				src="/scripts/googleAnalytics.js"
				strategy="afterInteractive"
			// strategy="afterInteractive"
			/>
		}
	</>;
};

export default GoogleAnalyticsScript;
