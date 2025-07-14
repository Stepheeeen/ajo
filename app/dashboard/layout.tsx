import React from 'react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Navbar } from '@/components/reusable/navbar'
import AppSidebar from '@/components/app-sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="h-[100vh] overflow-scroll w-full md:[width:calc(100%-5rem)]">
                <Navbar userName="Tofunmi" />
                <div className="bg-[#FBFBFB]">
                    {children}
                </div>
            </main>
        </SidebarProvider>
    )
}

export default Layout