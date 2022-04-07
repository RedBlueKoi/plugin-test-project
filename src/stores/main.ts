import type Plugin from "@/types/Plugin"
import type Tab from "@/types/Tab"
import { defineStore } from "pinia"

interface MainStore {
  arePluginsEnabled: boolean
  tabs: Tab[]
  plugins: Plugin[]
}

export const useMainStore = defineStore({
  id: "main",
  state: (): MainStore => ({
    arePluginsEnabled: true,
    tabs: [],
    plugins: []
  }),
  actions: {
    setPluginsEnabled(payload: boolean) {
      this.arePluginsEnabled = payload
    },
    setPlugins(payload: Plugin[]) {
      this.plugins = payload
    },
    setTabs(payload: Tab[]) {
      this.tabs = payload
    },
    updateTab(payload: Tab) {
      const tabIndex = this.tabs.findIndex((tab) => tab.title === payload.title)
      if (tabIndex >= 0) this.tabs[tabIndex] = payload
    }
  }
})
