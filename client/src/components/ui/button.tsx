import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex  items-center justify-center whitespace-nowrap border border-solid border-transparent text-xs font-semibold tracking-[0.2em] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "relative uppercase z-1 text-white bg-transparent border border-primary transition-[color,border] duration-450 ease-[cubic-bezier(.785,.135,.15,.86)] before:bg-primary  before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:scale-100 before:origin-left before:z-[1] before:transition-transform before:duration-450 before:ease-[cubic-bezier(.785,.135,.15,.86)] hover:text-primary hover:before:scale-x-0 hover:before:origin-right hover:before:h-full",
        secondary:
          "relative uppercase z-1 text-[#363636] bg-transparent border border-white transition-[color,border] duration-450 ease-[cubic-bezier(.785,.135,.15,.86)] before:bg-white before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:scale-100 before:origin-left before:z-[1] before:transition-transform before:duration-450 before:ease-[cubic-bezier(.785,.135,.15,.86)] hover:text-white hover:before:scale-x-0 hover:before:origin-right hover:before:h-full",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",

        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[46px] py-3.5 px-7",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 text-[12px]">{children}</span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
