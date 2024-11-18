import { ISettings } from "./ISettings"

export interface IAuth {
    user: {
        id: number
        settings: ISettings
    }
    jwt: string
}