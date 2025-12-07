import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/mainLayout/MainLayout";
import Home from "../pages/home/home/Home";
import EmployeeRegister from "../pages/register/empolyeeRegister/EmployeeRegister";
import ManagerRegister from "../pages/register/hrManagerRegister/ManagerRegister";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/joinAsEmployee',
                element: <EmployeeRegister></EmployeeRegister>,
            },
            {
                path: '/JoinAsHrManager',
                element: <ManagerRegister></ManagerRegister>,
            },
        ]
    },
]);
