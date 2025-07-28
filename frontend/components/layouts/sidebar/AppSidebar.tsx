import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/layouts/sidebar/Sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        {/* アプリのロゴやタイトル */}
        <h1 className="text-lg font-bold">Team Task Management</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>タスク一覧</SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>個人タスク</SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>進捗報告テンプレート</SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>カレンダー</SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>ログアウト</SidebarMenuButton>
          </SidebarMenuItem>
          {/* 必要に応じて追加 */}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        {/* フッター内容（例：設定やログアウト） */}
        <span className="text-xs text-muted-foreground">© 2025 Team Task</span>
      </SidebarFooter>
    </Sidebar>
  )
}