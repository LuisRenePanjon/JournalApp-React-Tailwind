import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";
import { miliToCustomDate } from "../../adapters/miliToCustomDate"

export const JournalEntry = ({ id, title, body, date, url }) => {
    const { day, weekday } = miliToCustomDate(date);

    const dispatch  = useDispatch()

    const handleEntryClick = () => {
        dispatch(activeNote(id, {
            date, title, body, url
        }))   
    }
    return (
        <div onClick={handleEntryClick}>
            <div className="bg-white rounded-md shadow-md py-3 px-1  flex flex-row text-black justify-between m-5 cursor-pointer">
                {url &&
                    <div className=" h-16 rounded-lg shadow-lg overflow-hidden mx-1" >
                        <img src={url} alt="Note Background" className="w-24 h-full"/>
                    </div>
                    
                }

                <div>
                    <h1 className="font-bold text-xl">{title}</h1>
                    <h3>{body}</h3>
                </div>
                <div className="flex justify-center flex-col items-center  h-full w-20">
                    <h1 className="font-medium">{weekday}</h1>
                    <h1 className="font-bold text-xl">{day}</h1>
                </div>
            </div>
        </div>
    )
}
