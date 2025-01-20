import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { EditAccountPage } from "@/pages/EditAccountPage/EditAccountPage.jsx";
import { ArticlesPage } from "@/pages/ArticlesPage/index.jsx";
import FirstLaunch from "@/pages/FirstLaunch/FirstLaunch.jsx";
import SettingsButtonManipulator from "@/app/components/SettingsButtonManipulator.jsx";
import { ThemePage } from "@/pages/ThemePage/ThemePage.jsx";
import { SettingsPage } from "@/pages/SettingsPage/SettingsPage.jsx";
import { LanguagePage } from "@/pages/LanguagePage/LanguagePage.jsx";
import { PremiumPage } from "@/pages/PremiumPage/PremiumPage.jsx";
import { ChannelsPage } from "@/pages/ChannelsPage/ChannelsPage.jsx";
import { ChannelManagePage } from "@/pages/ChannelManagePage/ChannelManagePage.jsx";
import { PostArticle } from "@/pages/PostArticle/PostArticle.jsx";

export function AppRouter() {
  return (
    <BrowserRouter>
      <SettingsButtonManipulator />
      <Routes>
        <Route path={"/"} element={<ProfilePage />} />
        <Route path={"/settings"} element={<SettingsPage />} />
        <Route path={"/settings/account"} element={<EditAccountPage />} />
        <Route path={"/settings/theme"} element={<ThemePage />} />
        <Route path={"/settings/language"} element={<LanguagePage />} />
        <Route path={"/articles"} element={<ArticlesPage />} />
        <Route path={"/articles/new"} element={<PostArticle />} />
        <Route path={"/channels"} element={<ChannelsPage />} />
        <Route path={"/channels/info"} element={<ChannelManagePage />} />
        <Route path={"/first-launch"} element={<FirstLaunch />} />
        <Route path={"/premium"} element={<PremiumPage />} />
        <Route path="*" element={<Navigate to="/first-launch" />} />
      </Routes>
    </BrowserRouter>
  );
}
