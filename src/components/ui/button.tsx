import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion, MotionProps } from "framer-motion"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-navy-600 to-navy-700 text-white shadow-lg hover:from-navy-700 hover:to-navy-800 hover:shadow-xl hover:-translate-y-0.5",
        destructive: "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:from-red-600 hover:to-red-700 hover:shadow-xl hover:-translate-y-0.5",
        outline: "border-2 border-navy-200 bg-white text-navy-700 shadow-sm hover:bg-navy-50 hover:border-navy-300 hover:shadow-md hover:-translate-y-0.5",
        secondary: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 shadow-sm hover:from-gray-200 hover:to-gray-300 hover:shadow-md hover:-translate-y-0.5",
        ghost: "text-navy-600 hover:bg-navy-50 hover:text-navy-700",
        link: "text-navy-600 underline-offset-4 hover:underline hover:text-navy-700",
        gold: "bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 shadow-lg hover:from-gold-600 hover:to-gold-700 hover:shadow-xl hover:-translate-y-0.5",
        success: "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:from-green-600 hover:to-green-700 hover:shadow-xl hover:-translate-y-0.5"
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-13 rounded-xl px-10 py-3.5 text-base",
        xl: "h-15 rounded-xl px-12 py-4 text-lg",
        icon: "h-11 w-11",
        iconSm: "h-9 w-9",
        iconLg: "h-13 w-13"
      },
      fullWidth: {
        true: "w-full",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth,
    asChild = false, 
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const isDisabled = disabled || loading

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <>
            <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
            <span className="opacity-70">Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="group-hover:scale-110 transition-transform duration-200">
                {leftIcon}
              </span>
            )}
            {children}
            {rightIcon && (
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </Comp>
    )
  }
)

Button.displayName = "Button"

// Motion wrapper for animated buttons
export const MotionButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & MotionProps
>(({ children, ...props }, ref) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button ref={ref} {...props}>
        {children}
      </Button>
    </motion.div>
  )
})

MotionButton.displayName = "MotionButton"

export { Button, buttonVariants }
