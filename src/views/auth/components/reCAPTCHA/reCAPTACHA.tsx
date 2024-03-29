

import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useEffect } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

export interface ReCAPTCHAComponentProps { }

const ReCAPTCHAComponent: React.FC<ReCAPTCHAComponentProps> = () => {

	useEffect(() => {
		// Carga el script de reCAPTCHA v3 al montar el componente
		const script = document.createElement('script');
		script.src = 'https://www.google.com/recaptcha/api.js';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			// Elimina el script cuando el componente se desmonta
			document.body.removeChild(script);
		};
	}, []);

	const { captcha, setCaptcha } = useContext(GlobalContext)


	return (
		<ReCAPTCHA
			// sitekey='6LfWYFYpAAAAAFwp9FIasff9ntu7fLccXM1FhZZl'
			sitekey='6LeEcFYpAAAAAHUMq2QFOsgYsQw6Dnf4sg6V-RzS'
			onChange={(value) => {
				setCaptcha(value!)
				// El valor de reCAPTCHA v3 se envía directamente al servidor
				// No es necesario manejar el cambio en el cliente
			}}
		/>
	);
};

export default ReCAPTCHAComponent;
