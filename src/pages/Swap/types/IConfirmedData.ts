import { Assets } from "../../../shared/types/Assets"

export interface IConfirmedSource {
    confirmedAmount?: number
}

export interface IConfirmedTarget {
    confirmedAmount?: number
    confirmedSymbol?: Assets
    confirmedFees?: IConfirmedFees
}

export interface IConfirmedFees {
    confirmedLpFee?: number
    confirmedBchFees?: number
}