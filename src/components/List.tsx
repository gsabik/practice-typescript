import { Sub } from "../types";

// Typing the properties of my component. By default they are any
interface Props {
	subs: Array<Sub>
}

// If the component receives childrens, use nameComponent: React.FC<Props>
const List = ({ subs }: Props) => {
	return (
		<ul>
			{
				subs.map(sub => (
					<li key={sub.nick}>
						<img alt={sub.nick} src={sub.avatar}/>
						<h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
						<p>{sub.description?.substring(0, 100)}</p>
					</li>
				))
			}
		</ul>
	);
}

export default List