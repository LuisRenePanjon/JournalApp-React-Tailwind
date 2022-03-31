
import { NoteAppBar } from "./NoteAppBar"
import { NoteForm } from "./NoteForm";

export const NotePage = () => {


    // const onSubmit = (data) => console.log(data);
    return (
        <div className="flex flex-col h-screen bg-slate-800 text-white ">
            <NoteAppBar />
            <NoteForm />
            {/* <NothingSelected /> */}
        </div>
    )
}
