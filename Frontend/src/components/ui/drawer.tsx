import * as React from "react"
import * as DrawerPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const Drawer = DrawerPrimitive.Root

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 w-fit bg-primary/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const drawerVariants = cva(
  "fixed z-50 bg-background transition-transform duration-300",
  {
    variants: {
      side: {
        left: "inset-y-0 left-0 h-full w-3/4 sm:w-1/3 data-[state=closed]:translate-x-[-100%] data-[state=open]:translate-x-0",
        right: "inset-y-0 right-0 h-full w-3/4 sm:w-1/3 data-[state=closed]:translate-x-[100%] data-[state=open]:translate-x-0",
        top: "inset-x-0 top-0 h-fit w-full data-[state=closed]:translate-y-[-100%] data-[state=open]:translate-y-0",
        bottom: "inset-x-0 bottom-0 h-fit w-full data-[state=closed]:translate-y-[100%] data-[state=open]:translate-y-0",
      },
    },
    defaultVariants: {
      side: "left",
    },
  }
)

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerVariants> {}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ side = "left", className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(drawerVariants({ side }), className)}
      {...props}
    >
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = DrawerPrimitive.Content.displayName

const DrawerClose = DrawerPrimitive.Close

export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  type DrawerContentProps,
}