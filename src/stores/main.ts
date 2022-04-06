import { defineStore } from "pinia"

interface MainStore {
  arePluginsEnabled: boolean
}

export const useMainStore = defineStore({
  id: "main",
  state: (): MainStore => ({
    arePluginsEnabled: false
  }),
  actions: {
    setPluginsEnabled(payload: boolean) {
      this.arePluginsEnabled = payload
    }
  }
})
