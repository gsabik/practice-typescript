import { useState } from "react";
import List from "./components/List";

// Interface is a special entity that helps us create objects with certain properties
interface Sub {
	nick: string; 
	avatar: string;
	subMonths: number;
	// Optional chaining, optional property
	description?: string;
}

const App = () => {
	const [subs, setSubs] = useState<Array<Sub>>([]);

	return (
		<div className="m-2">
			<p className="font-semibold text-center">Midu subs</p>
			<List subs={subs}/>
		</div>
	);
}

export default App