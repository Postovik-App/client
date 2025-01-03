import { Routes, BrowserRouter, Route } from "react-router-dom";
import { ProfilePage } from "../../pages/components/ProfilePage/ProfilePage";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProfilePage/>} />
            </Routes>
        </BrowserRouter>
    );
}
