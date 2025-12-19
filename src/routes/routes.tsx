import { Routes, Route } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/shadcn/ui/sidebar"
import CustomSidebar from "../components/CustomSidebar"

import Home from "../pages/Home"
import Shopping from "../pages/Shopping"

export function AppRoutes() {
  return (
    <Routes>
      {/* 🔹 HOME — NO SIDEBAR */}
      <Route path="/" element={<Home />} />

      {/* 🔹 PAGES WITH SIDEBAR */}
      <Route
        path="/shopping"
        element={
          <SidebarProvider>
            <CustomSidebar />
            <main className="w-full p-4">
              <SidebarTrigger />
              <Shopping />
            </main>
          </SidebarProvider>
        }
      />
    </Routes>
  )
}
