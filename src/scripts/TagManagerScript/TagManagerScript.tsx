import Script from 'next/script';
import React, { useState } from 'react';


const TagManagerScript = () => {
	const [loading, setLoading] = useState(true);
	
	const GTM_TRACKING_ID = 'GTM-PV5TRWW'
	
	return <>
		<Script
			id="GA_GTM"
			type="text/javascript"
			src="../scripts/gtm_ga.js"
			strategy="afterInteractive"
			onReady={() => {setLoading(false);}}
		/>
		{
			!loading &&
			<iframe
				src={`https://www.googletagmanager.com/ns.html?id=${GTM_TRACKING_ID}`}
				height="0"
				width="0"
				style={{
					display: 'none',
					visibility: 'hidden',
				}}
			/>
		}
	</>
};

export default TagManagerScript;
