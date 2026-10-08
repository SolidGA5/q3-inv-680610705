import * as React from "react"
import img from "../../public/IMG_4149.jpg"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

const deliveryTimes = [
  {
    value: "asap",
    id: "delivery-asap",
    label: "Standard delivery",
    description: "25–35 min · Driver assigned now",
    badge: "Fastest",
  },
  {
    value: "5-00",
    id: "delivery-5-00",
    label: "5:00 PM – 5:15 PM",
    description: "Prep starts at 4:45 PM",
  },
  {
    value: "5-30",
    id: "delivery-5-30",
    label: "5:30 PM – 5:45 PM",
    description: "Good if you're heading home",
  },
  {
    value: "6-00",
    id: "delivery-6-00",
    label: "6:00 PM – 6:15 PM",
    description: "Most popular · High demand",
  },
  {
    value: "6-30",
    id: "delivery-6-30",
    label: "6:30 PM – 6:45 PM",
    description: "Last slot before kitchen closes",
  },
]

export function StudentInfo() {
  const [open, setOpen] = React.useState(false)


  return (
    <Drawer
      swipeDirection="right"
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerTrigger render={<Button variant="secondary">Open Drawer</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            ข้อมูลนักศึกษา
          </DrawerTitle>
          Student information
        </DrawerHeader>
        <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src={img}
          />
          <CardHeader>
            <CardTitle>Phuphing Chompubang</CardTitle>
            <CardDescription>
              นักศึกษา มช. วิศวะคอมพิวเตอร์
            </CardDescription>
            <div className="p-1 gap-5">
              <Badge>Hobbies</Badge>
              playing games
            </div>
            <div className="p-1 gap-5">
              <Badge>Email</Badge>
              phuphing_chompubang@cmu.ac.th
            </div>
            <div className="p-1 gap-5">
              <Badge>Social</Badge>
              https://www.facebook.com/ming
            </div>
          </CardHeader>
          <CardFooter>
            รหัสนักศึกษา: 680610705
          </CardFooter>
        </Card>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline">Cancel</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}


