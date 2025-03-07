import { create } from 'zustand'
import { Assets } from '../../../shared/types/Assets'
import { AssetState } from '../types/targetAsset'

export const useAsset = create<AssetState>(set => ({
    asset: Assets.TON,
    updateAsset: (newAsset) => set({ asset: newAsset })
}))