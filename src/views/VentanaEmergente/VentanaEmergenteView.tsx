import Descargar from "./components/Descargar";
import Ordenar from "./components/Ordenar";




export interface VentanaEmergenteViewProps { }

const VentanaEmergenteView: React.FC<VentanaEmergenteViewProps> = () => {


	return (
		<>
		{/* <Ordenar /> */}
		<Descargar />
		</>
	)

};

export default VentanaEmergenteView;
