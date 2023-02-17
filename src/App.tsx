import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { Sub } from "./types";

// Interface is a special entity that helps us create objects with certain properties

const App = () => {
	const [subs, setSubs] = useState<Array<Sub>>([]);

	return (
		<div className="flex justify-center py-8">
			<div className="space-y-8 w-[500px]">
				<p className="font-semibold text-center">Midu subs</p>
				<List subs={subs}/>
				<Form/>
			</div>
		</div>
	);
}

export default App