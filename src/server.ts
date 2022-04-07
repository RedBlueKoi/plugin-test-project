import { createServer } from "miragejs"
import type Tab from "@/types/Tab"
import Plugins from "./mock/Plugins"
import Tabs from "./mock/Tabs"

export default function () {
  createServer({
    routes() {
      const plugins = Plugins
      const tabs = Tabs
      this.get("/api/plugins", () => plugins)
      this.get("/api/tabs", () => tabs)
      this.get("/api/tab", (_, request): Tab | null => {
        const { title } = request.queryParams
        const tab = Tabs.find((tab) => tab.title === title)
        return tab || null
      })
      this.post("/api/tab/update", (_, request): boolean => {
        try {
          const updateTab = JSON.parse(request.requestBody).tab
          const tabIndex = tabs.findIndex(
            (tab) => tab.title === updateTab.title
          )
          if (tabIndex >= 0) {
            tabs[tabIndex] = updateTab
            return true
          }
          return false
        } catch (error) {
          console.error(error)
          return false
        }
      })
    }
  })
}
