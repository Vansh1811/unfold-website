import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  success?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  helperText?: string
  showPasswordToggle?: boolean
  isLoading?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    label,
    error,
    success,
    leftIcon,
    rightIcon,
    helperText,
    showPasswordToggle = false,
    isLoading = false,
    disabled,
    ...props 
  }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [isFocused, setIsFocused] = React.useState(false)
    
    const inputType = showPasswordToggle && type === "password" 
      ? showPassword ? "text" : "password" 
      : type

    const hasError = !!error
    const hasSuccess = !!success && !hasError
    const isDisabled = disabled || isLoading

    return (
      <motion.div 
        className="space-y-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {label && (
          <motion.label 
            className="block text-sm font-semibold text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </motion.label>
        )}
        
        <div className="relative group">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-navy-500 transition-colors duration-200">
              {leftIcon}
            </div>
          )}
          
          <input
            type={inputType}
            className={cn(
              "flex h-12 w-full rounded-lg border-2 bg-white px-3 py-2 text-base transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              leftIcon && "pl-10",
              (rightIcon || showPasswordToggle || hasError || hasSuccess || isLoading) && "pr-10",
              // Border colors
              hasError 
                ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100" 
                : hasSuccess
                ? "border-green-300 focus:border-green-500 focus:ring-4 focus:ring-green-100"
                : "border-gray-200 focus:border-navy-500 focus:ring-4 focus:ring-navy-100",
              // Background on focus
              isFocused && "bg-gray-50",
              // Disabled state
              isDisabled && "bg-gray-50 cursor-not-allowed",
              className
            )}
            ref={ref}
            disabled={isDisabled}
            onFocus={(e) => {
              setIsFocused(true)
              props.onFocus?.(e)
            }}
            onBlur={(e) => {
              setIsFocused(false)
              props.onBlur?.(e)
            }}
            {...props}
          />
          
          {/* Right side icons */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
            {isLoading && (
              <div className="animate-spin w-4 h-4 border-2 border-navy-500 border-t-transparent rounded-full" />
            )}
            
            {hasError && !isLoading && (
              <AlertCircle className="w-5 h-5 text-red-500" />
            )}
            
            {hasSuccess && !isLoading && !hasError && (
              <CheckCircle className="w-5 h-5 text-green-500" />
            )}
            
            {showPasswordToggle && type === "password" && !isLoading && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-navy-500 transition-colors duration-200"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            )}
            
            {rightIcon && !hasError && !hasSuccess && !isLoading && !showPasswordToggle && (
              <div className="text-gray-400 group-focus-within:text-navy-500 transition-colors duration-200">
                {rightIcon}
              </div>
            )}
          </div>
        </div>
        
        {/* Helper text, error, or success message */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: (error || success || helperText) ? 1 : 0,
            height: (error || success || helperText) ? "auto" : 0
          }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          {error && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {error}
            </p>
          )}
          {success && !error && (
            <p className="text-sm text-green-600 flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              {success}
            </p>
          )}
          {helperText && !error && !success && (
            <p className="text-sm text-gray-500">{helperText}</p>
          )}
        </motion.div>
      </motion.div>
    )
  }
)

Input.displayName = "Input"

export { Input }
