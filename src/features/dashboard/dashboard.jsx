import StatsCard from "../../components/cards/StatsCard"

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen py-4 px-4">
        <div className="grid grid-cols-4 w-full gap-2">
            <StatsCard title="Total Users" value="100" />
            <StatsCard title="Total Users" value="100" />
            <StatsCard title="Total Users" value="100" />
            <StatsCard title="Total Users" value="100" />
        </div>

        <div className="mt-8">
            <table className="w-full">
                <thead>
                    <tr className="bg-orange-50 text-gray-400 font-light">
                        <th className="py-2 px-4">ID</th>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Role</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                 {[1,3,4,5,6,5,6,6].map((e, index) =>    <tr className="border-b border-gray-200">
                        <td className="py-2 px-4">{'07' + (index +1)}</td>
                        <td className="py-2 px-4">John Doe</td>
                        <td className="py-2 px-4">  
                            <a href="mailto:mamad@gmail.com" target="_blank
                            ">
                                mamadou2@gmail.com
                        </a>
                        </td>
                        <td className="py-2 px-4">Admin</td>
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
