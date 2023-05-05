import Script from 'next/script';
import React, { useState } from 'react';

const GoogleAnalyticsScript = () => {

	const [loading, setLoading] = useState(true);
	
	// const GA_TRACKING_ID = 'G-3YC6MN9379'
	const GA_TRACKING_ID = 'G-E3P7F70VPT'

	return <>
		<Script
			id="googleAnalytics"
			// type="text/javascript"
			src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
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
