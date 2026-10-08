import { } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewCards } from "./OverviewCards"
import { CategoryCards } from "./CategoryCards"

export function DashboardTabs() {
  return (
    <Tabs defaultValue="preview" className="h-50">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="catagory">By Catagory</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <OverviewCards />
      </TabsContent>
      <TabsContent value="catagory">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  )
}

