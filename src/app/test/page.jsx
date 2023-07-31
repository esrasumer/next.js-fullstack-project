import PopupModal from "@components/PopupModal"
import { useState } from "react"

export default function Page() {
    const [open,setOpen] = useState(false)
    return (
        <div>
            <button onClick={()=>setOpen(true)}>Open</button>
            {open && <PopupModal />}
            <button></button>
        </div>
    )
}