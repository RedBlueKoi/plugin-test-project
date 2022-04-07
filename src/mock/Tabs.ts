import type Tab from "@/types/Tab"
import { mdiFinance, mdiGrid, mdiAccount } from "@mdi/js"

const Tabs: Tab[] = [
  {
    title: "Marketing",
    icon: mdiGrid,
    active: ["Plugin 1", "Plugin 2", "Plugin 4"],
    disabled: ["Plugin 3"],
    inactive: ["Plugin 5", "Plugin 6"]
  },
  {
    title: "Finance",
    icon: mdiFinance,
    active: ["Plugin 7", "Plugin 8"],
    disabled: ["Plugin 9"],
    inactive: ["Plugin 10"]
  },
  {
    title: "Personnel",
    icon: mdiAccount,
    active: ["Plugin 11"],
    disabled: ["Plugin 12"],
    inactive: ["Plugin 13"]
  }
]

export default Tabs
