import { useNavigate } from "react-router-dom"

 
const ErrorPage = () => {

    const navigate = useNavigate()

  return (
    <div className='w-[60%] my-24 shadow-xl py-24 mx-auto flex flex-col justify-center gap-y-10'>
            <h1 className="text-9xl poppins-semibold text-gray-700 text-center">404</h1>
                <button onClick={()=>navigate(-1)} className="bg-black px-4 py-2 text-white rounded-sm mx-auto text-center">Go To Home</button>
    </div>
  )
}

export default ErrorPage