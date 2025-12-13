import React from "react";

const EmployeeList = () => {
    const maxEmployees = 10;
    const employees = [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            joinDate: "2025-01-12",
            photo: "https://i.pravatar.cc/150?img=1",
            assetsCount: 3,
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            joinDate: "2025-02-20",
            photo: "https://i.pravatar.cc/150?img=2",
            assetsCount: 5,
        },
        {
            id: 3,
            name: "Alice Johnson",
            email: "alice@example.com",
            joinDate: "2025-03-05",
            photo: "https://i.pravatar.cc/150?img=3",
            assetsCount: 2,
        },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold mb-4">My Employee List</h2>
            <p className="mb-6 font-medium text-gray-700">
                {employees.length}/{maxEmployees} employees used.
            </p>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-6 text-left">Photo</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Email</th>
                            <th className="py-3 px-6 text-left">Join Date</th>
                            <th className="py-3 px-6 text-left">Assets Count</th>
                            <th className="py-3 px-6 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp.id} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-6">
                                    <img
                                        src={emp.photo}
                                        alt={emp.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                </td>
                                <td className="py-3 px-6">{emp.name}</td>
                                <td className="py-3 px-6">{emp.email}</td>
                                <td className="py-3 px-6">{emp.joinDate}</td>
                                <td className="py-3 px-6">{emp.assetsCount}</td>
                                <td className="py-3 px-6">
                                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;
