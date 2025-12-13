import React from "react";

const AllRequest = () => {
    const mockRequests = [
        { id: 1, employee: "John Doe", asset: "Laptop", date: "2025-12-12", status: "Pending" },
        { id: 2, employee: "Jane Smith", asset: "Monitor", date: "2025-12-11", status: "Approved" },
        { id: 3, employee: "Alice Johnson", asset: "Keyboard", date: "2025-12-10", status: "Rejected" },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold mb-6">All Asset Requests</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-6 text-left">Employee</th>
                            <th className="py-3 px-6 text-left">Asset</th>
                            <th className="py-3 px-6 text-left">Date</th>
                            <th className="py-3 px-6 text-left">Status</th>
                            <th className="py-3 px-6 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockRequests.map((req) => (
                            <tr key={req.id} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-6">{req.employee}</td>
                                <td className="py-3 px-6">{req.asset}</td>
                                <td className="py-3 px-6">{req.date}</td>
                                <td className="py-3 px-6">
                                    <span
                                        className={`px-3 py-1 rounded-full text-white ${req.status === "Pending"
                                            ? "bg-yellow-500"
                                            : req.status === "Approved"
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                            }`}
                                    >
                                        {req.status}
                                    </span>
                                </td>
                                <td className="py-3 px-6 space-x-2">
                                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                                        Approve
                                    </button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                        Reject
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

export default AllRequest;
