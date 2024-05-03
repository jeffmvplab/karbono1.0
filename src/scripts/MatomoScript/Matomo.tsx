import Script from 'next/script';
import React, { useState } from 'react';

const MatomoScript = () => {
	const [loading, setLoading] = useState(true);

	return <>
		<Script
			id="matomo"
			type="text/javascript"
			src="/scripts/tagManager.js"
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
				src="/scripts/matomo.js"
				strategy="afterInteractive"
			// strategy="afterInteractive"
			/>
		}
	</>
};

export default MatomoScript;
