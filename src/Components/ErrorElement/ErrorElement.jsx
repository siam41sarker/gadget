import { useNavigate } from "react-router";
const ErrorElement = () => {
    const navHome = useNavigate()
    return (
        <div className=" w-full flex flex-col bg-white mx-auto mt-28 justify-center items-center gap-8">
            <p className="text-[#eb5971] sora text-center text-9xl font-bold"> Opps!! 404 Error</p>
            <h2 className="text-[rgb(9,8,15)] sora text-7xl font-semibold text-center">Page Not Found</h2>
            <button onClick={()=>navHome('/')} className="btn btn-error">Back To Home</button>
        </div>
    );
}

export default ErrorElement;