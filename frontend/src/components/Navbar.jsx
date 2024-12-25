import { useNavigate } from "react-router-dom"

export default function Navbar(){
    const navigate = useNavigate();
    return (
        <>
            <div className="w-screen h-10 m-0 p-0 fixed border-b-2">
                <div onClick={()=> navigate('/home')}>
                    Home
                </div>
                <div onClick={()=> navigate('/addpage')}>
                    Add Page
                </div>
            </div>
        </>
    )
}