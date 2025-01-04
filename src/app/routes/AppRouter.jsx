import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { ProfilePage } from "../../pages/components/ProfilePage/ProfilePage";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<ProfilePage/>} />
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    );
}
