import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
    AudioLines,
    ChartPie,
    CircleDashed,
    Clock,
    Heart,
    ListMusic,
    Plus
} from "lucide-react"

export function AppSidebar() {

    const NavItems = [
        {
            title: "Feed",
            url: "#",
            icon: AudioLines,
        },
        {
            title: "PlayList",
            url: "#",
            icon: ListMusic,
        },
        {
            title: "Statistics",
            url: "#",
            icon: ChartPie,
        },
        {
            title: "Favourites",
            url: "#",
            icon: Heart,
        },
        {
            title: "Listen Later",
            url: "#",
            icon: Clock,
        },
    ] as const

    const playlist = [
        {
            title: "Funkuny",
            url: "#",
            icon: CircleDashed,
            color: "#65da"
        },
        {
            title: "funkny",
            url: "#",
            icon: CircleDashed,
            color: "#27aa"
        },
    ]


    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup className="mt-6">
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-3">
                            {NavItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild >
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="mt-6">
                    <SidebarGroupLabel>YOUR PLAYLISTS</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-2">
                            {playlist.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon style={{ color: item.color }} />
                                            {/* <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} /> */}
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="text-primary hover:text-primary">
                            <Plus className="w-5 h-5" />
                            Create new playlist
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
