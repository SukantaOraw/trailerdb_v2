"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { ChevronDown, Home, Settings, Users } from "lucide-react";

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="fixed left-0 top-0 z-50 h-screen">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Workspace
                  <ChevronDown className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start">
                <DropdownMenuItem>Acme Inc</DropdownMenuItem>
                <DropdownMenuItem>Corp XYZ</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <Users className="h-5 w-5" />
                  <span>Team</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* <SidebarFooter>
        <p className="text-xs px-4 py-2">v1.0.0</p>
      </SidebarFooter> */}

      <SidebarRail />
    </Sidebar>
  );
}
