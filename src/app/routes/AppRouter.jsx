import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { ProfilePage } from "../../pages/components/ProfilePage/ProfilePage";
import SettingsPage from "@/pages/components/SettingsPage/SettingsPage.jsx";
import ArticlesPage from "@/pages/components/ArticlesPage/ArticlesPage.jsx";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<ProfilePage/>} />
                <Route path={'/settings'} element={<SettingsPage/>} />
                <Route path={'/articles'} element={<ArticlesPage/>} />
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    );
}
