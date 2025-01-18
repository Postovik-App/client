import GlobeIcon from "@/shared/assets/globe.svg?react";
import ThemeIcon from '@/shared/assets/theme.svg?react'
import ArrowRightIcon from "@/shared/assets/arrow-right.svg?react";

export const settingsCells = [
    {
        id: 1,
        title: 'Language',
        navigationLabel: 'English',
        before: GlobeIcon,
        after: ArrowRightIcon,
        navigateUrl: '/settings/language',
    },
    {
        id: 2,
        title: 'Theme',
        navigationLabel: 'Dark',
        before: ThemeIcon,
        after: ArrowRightIcon,
        navigateUrl: '/settings/theme',
    }
]