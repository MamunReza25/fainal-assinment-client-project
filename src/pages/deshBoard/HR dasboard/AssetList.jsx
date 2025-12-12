import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const AssetList = () => {
    const [search, setSearch] = useState("");

    const { data: assets = [] } = useQuery({
        queryKey: ['assets'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_baseURL}/assets`);
            return res.data;
        },
    })

    console.log(assets)


    // Search Filter
    const filteredAssets = assets.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 bg-white shadow rounded-xl">
            <h2 className="text-2xl font-bold mb-4">All Company Assets :{assets.length}</h2>

            {/* Search Box */}
            <input
                type="text"
                placeholder="Search assets..."
                className="input input-bordered w-full max-w-xs mb-4"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Asset Image</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Date Added</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAssets.length > 0 ? (
                            filteredAssets.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-10 h-10 rounded object-cover"
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.type}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.date}</td>

                                    {/* Actions */}
                                    <td className="text-center space-x-2">
                                        <button className="btn btn-sm btn-info">Edit</button>
                                        <button className="btn btn-sm btn-error">Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-gray-500">
                                    No matching assets found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssetList;
