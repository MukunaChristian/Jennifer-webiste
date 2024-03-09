import { Outlet } from "react-router";
import NavBar from "./NavBar";

export default function WebLayout() {
    return (
        <>
        <NavBar />
        <Outlet />
        </>
    );
}