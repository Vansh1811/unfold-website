import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, MotionProps } from "framer-motion"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    hover?: boolean
    gradient?: boolean
    shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  }
>(({ className, hover = false, gradient = false, shadow = 'md', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-gray-100 bg-white text-gray-950 transition-all duration-300",
      {
        'shadow-sm hover:shadow-md': shadow === 'sm',
        'shadow-md hover:shadow-lg': shadow === 'md',
        'shadow-lg hover:shadow-xl': shadow === 'lg',
        'shadow-xl hover:shadow-2xl': shadow === 'xl',
        'shadow-2xl hover:shadow-3xl': shadow === '2xl'
      },
      hover && "hover:-translate-y-1 hover:scale-[1.02] cursor-pointer",
      gradient && "bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    centered?: boolean
  }
>(({ className, centered = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 p-6 pb-4",
      centered && "text-center items-center",
      className
    )}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    gradient?: boolean
  }
>(({ className, as: Component = 'h3', gradient = false, children, ...props }, ref) => (
  <Component
    ref={ref as React.RefObject<HTMLHeadingElement>}
    className={cn(
      "text-xl font-bold leading-tight tracking-tight text-gray-900",
      gradient && "bg-gradient-to-r from-navy-600 to-navy-800 bg-clip-text text-transparent",
      className
    )}
    {...props}
  >
    {children}
  </Component>
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    muted?: boolean
  }
>(({ className, muted = true, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm leading-relaxed",
      muted ? "text-gray-600" : "text-gray-800",
      className
    )}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    noPadding?: boolean
  }
>(({ className, noPadding = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      noPadding ? "p-0" : "p-6 pt-4",
      className
    )}
    {...props}
  />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    divided?: boolean
    centered?: boolean
  }
>(({ className, divided = false, centered = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-4",
      divided && "border-t border-gray-100 bg-gray-50/50",
      centered ? "justify-center" : "justify-between",
      className
    )}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// ✅ Fixed MotionCard
export const MotionCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    hover?: boolean
    gradient?: boolean
    shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  }
>(({ children, hover = true, className, gradient, shadow, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={props.initial ?? { opacity: 0, y: 20 }}
      whileInView={props.whileInView ?? { opacity: 1, y: 0 }}
      viewport={props.viewport ?? { once: true }}
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 },
            }
          : props.whileHover
      }
      transition={props.transition ?? { duration: 0.4 }}
      animate={props.animate}
      exit={props.exit}
      {...props}
    >
      <Card
        hover={hover}
        gradient={gradient}
        shadow={shadow}
        className={className}
      >
        {children}
      </Card>
    </motion.div>
  )
})
MotionCard.displayName = "MotionCard"

// Specialized card: ServiceCard
export const ServiceCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactNode
    title: string
    description: string
    footer?: React.ReactNode
  }
>(({ className, icon, title, description, footer, ...props }, ref) => (
  <MotionCard
    ref={ref}
    hover={true}
    shadow="lg"
    className={cn("group overflow-hidden", className)}
    {...props}
  >
    <CardHeader centered={true}>
      {icon && (
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-4"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-navy-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            {icon}
          </div>
        </motion.div>
      )}
      <CardTitle gradient={true}>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-center leading-relaxed">
        {description}
      </CardDescription>
    </CardContent>
    {footer && (
      <CardFooter centered={true} divided={true}>
        {footer}
      </CardFooter>
    )}
  </MotionCard>
))
ServiceCard.displayName = "ServiceCard"

// Specialized card: StatsCard
export const StatsCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactNode
    number: string
    label: string
    trend?: string
    color?: 'navy' | 'gold' | 'green' | 'blue'
  }
>(({ className, icon, number, label, trend, color = 'navy', ...props }, ref) => {
  const colorClasses = {
    navy: 'from-navy-500 to-navy-600',
    gold: 'from-gold-500 to-gold-600',
    green: 'from-green-500 to-green-600',
    blue: 'from-blue-500 to-blue-600'
  }

  return (
    <MotionCard
      ref={ref}
      hover={true}
      shadow="lg"
      className={cn("text-center", className)}
      {...props}
    >
      <CardContent>
        {icon && (
          <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses[color]} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
            {icon}
          </div>
        )}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="text-3xl font-bold text-navy-900 mb-2"
        >
          {number}
        </motion.div>
        <p className="text-gray-600 font-medium mb-1">{label}</p>
        {trend && (
          <p className="text-sm text-green-600">{trend}</p>
        )}
      </CardContent>
    </MotionCard>
  )
})
StatsCard.displayName = "StatsCard"

// Export all base components
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
}
