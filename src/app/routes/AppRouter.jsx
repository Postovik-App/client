import {Routes, BrowserRouter, Route, Navigate} from "react-router-dom";
import { ProfilePage } from "../../pages/components/ProfilePage/ProfilePage";
import {EditAccountPage} from "@/pages/components/EditAccountPage/EditAccountPage.jsx";
import ArticlesPage from "@/pages/components/ArticlesPage/ArticlesPage.jsx";
import FirstLaunch from "@/pages/components/FirstLaunch/FirstLaunch.jsx";
import SettingsButtonManipulator from "@/app/components/SettingsButtonManipulator.jsx";
import {ThemePage} from "@/pages/components/ThemePage/ThemePage.jsx";
import {SettingsPage} from "@/pages/components/SettingsPage/SettingsPage.jsx";
import {LanguagePage} from "@/pages/components/LanguagePage/LanguagePage.jsx";

export function AppRouter() {
    return (
        <BrowserRouter>
            <SettingsButtonManipulator />
            <Routes>
                <Route path={'/'} element={<ProfilePage/>} />
                <Route path={'/settings'} element={<SettingsPage/>} />
                <Route path={'/settings/account'} element={<EditAccountPage/>} />
                <Route path={'/settings/theme'} element={<ThemePage/>} />
                <Route path={'/settings/language'} element={<LanguagePage/>} />
                <Route path={'/articles'} element={<ArticlesPage/>} />
                <Route path={'/first-launch'} element={<FirstLaunch/>} />
                <Route path='*' element={<Navigate to='/first-launch'/>}/>
            </Routes>
        </BrowserRouter>
    );
}
