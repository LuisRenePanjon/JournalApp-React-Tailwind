import {NoteAppBar, NoteForm} from "../../components/notes"
import {NothingSelected} from "../../components/journal";
import {useSelector} from "react-redux";


export const NotePage = () => {
	const {active} = useSelector(state => state.notes)

	// const onSubmit = (data) => console.log(data);
	return (
		<div className="flex flex-col h-screen bg-slate-800 text-white ">
			<NoteAppBar/>
			{active
				? (<NoteForm/>)
				: (<NothingSelected/>)
			}
		</div>
	)
}   
