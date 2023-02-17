import { ChangeEvent, useState } from "react";
import { Sub } from "../types";

const Form = () => {
	const [inputValue, setInputValue] = useState<Sub>({
		nick: "",
		subMonths: 0,
		avatar: "",
		description: ""
	});
	 
	const handleSubmit = () => {

	}

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInputValue({
			...inputValue, 
			[e.target.name]: e.target.value
		});
	}

	return (
		<form className="flex flex-col space-y-4 w-full" onSubmit={handleSubmit}>
			<input className="border px-4 py-2" onChange={handleChange} type="text" name="nick" placeholder="Nick" value={inputValue.nick}/>
			<input className="border px-4 py-2" onChange={handleChange} type="text" name="subMonths" placeholder="Submonths" value={inputValue.subMonths}/>
			<input className="border px-4 py-2" onChange={handleChange} type="text" name="avatar" placeholder="Avatar" value={inputValue.avatar}/>
			<textarea className="border px-4 py-2" onChange={handleChange} name="description" placeholder="Description" value={inputValue.description}/>
			<button className="bg-violet-300 py-2 transition-all hover:bg-violet-500">Save new sub</button>
		</form>
	);
}

export default Form