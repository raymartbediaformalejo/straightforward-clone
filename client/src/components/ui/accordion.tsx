import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "relative no-underline text-gray-700 uppercase flex flex-1 items-center justify-between py-4 transition-[color] text-[11px] duration-200 ease-in-out tracking-[0.2em] hover:text-white [&[data-state=open]>span:before]:rotate-90 [&[data-state=open]>span:before]:opacity-0 [&[data-state=open]>span:after]:rotate-90",
        className
      )}
      {...props}
    >
      {children}
      <span className="absolute right-0 top-[calc(50%-5.5px)] w-[11px] h-[11px] before:w-[11px] before:h-[2px] before:opacity-100 before:absolute before:top-1/2 before:left-1/2 before:bg-white/45 before:translate-x-[-50%] before:translate-y-[-50%] before:rotate-[-90deg] after:w-[2px] after:h-[11px] after:absolute after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:bg-white/45 after:translate-[-50%,-50%] after:rotate-[-90deg] before:transition-[transform,opacity] before:duration-400 before:ease-in-out after:transition-[transform,opacity] after:duration-400 after:ease-in-out "></span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    style={{ animationDuration: "350ms" }}
    className="text-gray-700 overflow-hidden text-md transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
