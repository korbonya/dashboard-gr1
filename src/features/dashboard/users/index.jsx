import { useGetUsersQuery } from "./userApi"



export default function index() {
    const {data, isLoading, error} = useGetUsersQuery()

    console.log(data)


    if(isLoading) return <div>loading...</div>


  return (
      <div className="px-4 py-8 w-full">
        <div className="py-2 flex justify-between  items-center mb-8">
            <h1 className="text-3xl font-bold ">
                Les utilisateurs
            </h1>
            <div className="space-x-2">
                <input className="bg-white border-2 px-4 py-2 rounded-lg border-orange-300 outline-orange-500" type="text" />
                <button className="px-4 py-2 rounded-lg bg-orange-300">Ajouter</button>
            </div>
        </div>
        <div>
        <table className="w-full">
                <thead>
                    <tr className="bg-orange-50 text-gray-400 font-light">
                        <th className="py-2 px-4">ID</th>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Téléphone</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                 {data && data.map((user, index) =>    <tr key={index} className="border-b border-gray-200">
                        <td className="py-2 px-4">{'07' + (user.id)}</td>
                        <td className="py-2 px-4">{user.name}</td>
                        <td className="py-2 px-4">  
                            <a href="mailto:mamad@gmail.com" target="_blank
                            ">
                                {user.email}
                        </a>
                        </td>
                        <td className="py-2 px-4">
                            {user.phone}
                        </td>
                        <td className="py-2 px-4">
                            <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
      </div>
  )
}
