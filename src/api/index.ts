import axios, { type AxiosPromise } from "axios"
import type Tab from "@/types/Tab"
import type Plugin from "@/types/Plugin"

export const getTabs = async (): Promise<AxiosPromise<Tab[]>> => {
  return axios.get("/api/tabs")
}
export const getTab = async (title: string): Promise<AxiosPromise<Tab>> => {
  return axios.get("/api/tab", {
    params: {
      title
    }
  })
}
export const updateTab = async (tab: Tab): Promise<AxiosPromise<boolean>> => {
  return axios.post("/api/tab/update", {
    tab
  })
}
export const getPlugins = async (): Promise<AxiosPromise<Plugin[]>> => {
  return axios.get("/api/plugins")
}
