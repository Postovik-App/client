import { retrieveLaunchParams } from "@telegram-apps/sdk-react"

export function useTelegram() {
    const { initData } = retrieveLaunchParams()

    return {
        data: initData,
        user: initData.user,
    }
}