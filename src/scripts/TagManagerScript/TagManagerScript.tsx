import Script from 'next/script';
import React, { useState } from 'react';

const TagManagerScript = () => {
	const [loading, setLoading] = useState(true);

	return <>
		<Script
			id="smartlook"
			type="text/javascript"
			src="/scripts/tagManager.js"
			strategy="beforeInteractive"
			onReady={() => {
				setLoading(false);
			}}
		/>
		{
			!loading &&
			<iframe
				src="https://www.googletagmanager.com/ns.html?id=GTM-PV5TRWW"
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
