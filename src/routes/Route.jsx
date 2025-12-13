import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/mainLayout/MainLayout";
import Home from "../pages/home/home/Home";
import EmployeeRegister from "../pages/register/empolyeeRegister/EmployeeRegister";
import ManagerRegister from "../pages/register/hrManagerRegister/ManagerRegister";
import Login from "../pages/register/login/Login";
import Error from "../pages/errorPage/Error";
import DashBoardLayout from "../layouts/deshboardLayout/DashBoardLayout";
import AddAsset from "../pages/deshBoard/HR dasboard/AddAsset";
import AssetList from "../pages/deshBoard/HR dasboard/AssetList";
import AllRequest from "../pages/deshBoard/HR dasboard/AllRequest";
import EmployeeList from "../pages/deshBoard/HR dasboard/EmployeeList";
import Package from "../pages/home/packegeSection/Package";
import RequestAsset from "../pages/deshBoard/EmployeerDashboard/RequestAsset";
import Myteam from "../pages/deshBoard/EmployeerDashboard/Myteam";
import Profile from "../pages/deshBoard/EmployeerDashboard/Profile";
import MyAssets from "../pages/deshBoard/EmployeerDashboard/MyAssets";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
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
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    // dashboard layout
    {
        path: "dashboard",
        element: < PrivateRoute >
            <DashBoardLayout></DashBoardLayout>
        </PrivateRoute >,

        children: [
            {
                path: 'dashboard/myAsset',
                element: <PrivateRoute><AssetList></AssetList></PrivateRoute>
            },
            {
                path: 'dashboard/addAsset',
                element: <PrivateRoute> <AddAsset></AddAsset></PrivateRoute>
            },
            {
                path: 'dashboard/allRequest',
                element: <AllRequest></AllRequest>
            },
            {
                path: 'dashboard/employeeList',
                element: <PrivateRoute> <EmployeeList></EmployeeList></PrivateRoute>
            },
            {
                path: 'dashboard/upgradePakage',
                element: <PrivateRoute><Package></Package></PrivateRoute>
            },

            // employee routs
            {
                path: 'dashboard/myAsset',
                element: <PrivateRoute> <MyAssets></MyAssets></PrivateRoute>
            },
            {
                path: 'dashboard/requestAsset',
                element: <PrivateRoute> <RequestAsset></RequestAsset></PrivateRoute>
            },
            {
                path: 'dashboard/myteam',
                element: <PrivateRoute><Myteam></Myteam></PrivateRoute>
            },
            {
                path: 'dashboard/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },


        ]
    }
]);
