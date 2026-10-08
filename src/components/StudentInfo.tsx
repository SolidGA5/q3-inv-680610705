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
  DrawerDescription
} from "@/components/ui/drawer"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"



export function StudentInfo() {
  const [open, setOpen] = React.useState(false)


  return (
    <Drawer
      swipeDirection="right"
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerTrigger render={<Button variant="secondary" className="bg-blue-500 text-white">Phuphing Chompubang</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-bold text-xl">
            ข้อมูลนักศึกษา
          </DrawerTitle>
          <DrawerDescription>Student information</DrawerDescription>
        </DrawerHeader>
        <Card className="w-auto">
          <img className="w-auto"
            src={img}
          />
          <CardHeader>
            <CardTitle>Phuphing Chompubang</CardTitle>
            <CardDescription>
              นักศึกษา มช. วิศวะคอมพิวเตอร์
            </CardDescription>
            <div className="p-1 gap-1 flex flex-row">
              <Badge>Hobbies</Badge>
              <div>playing games , reading book</div>
            </div>
            <div className="p-1 gap-1 flex flex-row">
              <Badge>Email</Badge>
              <div>phuphing_chompubang@cmu.ac.th</div>
            </div>
            <div className="p-1 gap-5 flex flex-row">
              <Badge>Social</Badge>
              <div>https://www.facebook.com/ming
              </div>
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


