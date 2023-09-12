import { useNavigate } from "react-router-dom"


export default function index() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/dashboard')
    }
  return (
     <div className="min-h-screen flex justify-center items-center w-full bg-slate-100">
        <div className="max-w-lg space-y-2 bg-white px-10 py-8 rounded-xl shadow">
            <h1 className="text-center text-3xl font-bold">Se connecter</h1>
            <form action="" onSubmit={handleSubmit} className="mt-8">
                <label htmlForf="email" className='font-bold text-lg ' >Email
                    <input type="email" name='email' id='email' className='border border-gray-400 rounded mb-4 p-2 w-full outline-orange-500' />
                </label>
                <label htmlForf="password" className='font-bold text-lg ' >Password
                    <input type="password" name='password' id='password' className='border border-gray-400 rounded p-2 w-full outline-orange-500' />
                </label>
                <button  type='submit' className='bg-orange-500 text-white font-bold py-2 mt-4 px-4 rounded'>Se connecter</button>
            </form>
        </div>
     </div>
  )
}
