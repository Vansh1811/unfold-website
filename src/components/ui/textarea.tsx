import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle } from "lucide-react"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  success?: string
  helperText?: string
  maxLength?: number
  showCharacterCount?: boolean
  autoResize?: boolean
  isLoading?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    label,
    error,
    success,
    helperText,
    maxLength,
    showCharacterCount = false,
    autoResize = true,
    isLoading = false,
    disabled,
    value,
    onChange,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [characterCount, setCharacterCount] = React.useState(0)
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)
    
    const hasError = !!error
    const hasSuccess = !!success && !hasError
    const isDisabled = disabled || isLoading

    // Auto resize functionality
    React.useEffect(() => {
      if (autoResize && textareaRef.current) {
        const textarea = textareaRef.current
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
      }
    }, [value, autoResize])

    // Character count tracking
    React.useEffect(() => {
      if (typeof value === 'string') {
        setCharacterCount(value.length)
      }
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value
      
      // Enforce max length if specified
      if (maxLength && newValue.length > maxLength) {
        return
      }
      
      setCharacterCount(newValue.length)
      onChange?.(e)
      
      // Auto resize
      if (autoResize && textareaRef.current) {
        const textarea = textareaRef.current
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
      }
    }

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
          <textarea
            className={cn(
              "flex min-h-[120px] w-full rounded-lg border-2 bg-white px-4 py-3 text-base transition-all duration-300 placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none",
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
              // Auto resize
              autoResize && "overflow-hidden",
              className
            )}
            ref={(node) => {
              textareaRef.current = node
              if (typeof ref === 'function') {
                ref(node)
              } else if (ref) {
                ref.current = node
              }
            }}
            disabled={isDisabled}
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
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
          
          {/* Status icons */}
          <div className="absolute right-3 top-3 flex items-center gap-1">
            {isLoading && (
              <div className="animate-spin w-4 h-4 border-2 border-navy-500 border-t-transparent rounded-full" />
            )}
            
            {hasError && !isLoading && (
              <AlertCircle className="w-5 h-5 text-red-500" />
            )}
            
            {hasSuccess && !isLoading && !hasError && (
              <CheckCircle className="w-5 h-5 text-green-500" />
            )}
          </div>
        </div>
        
        {/* Character count and status messages */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: (error || success || helperText || showCharacterCount) ? 1 : 0,
            height: (error || success || helperText || showCharacterCount) ? "auto" : 0
          }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden flex items-center justify-between"
        >
          <div className="flex-1">
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
          </div>
          
          {(showCharacterCount || maxLength) && (
            <p className={cn(
              "text-sm tabular-nums",
              maxLength && characterCount > maxLength * 0.9 
                ? "text-orange-500" 
                : maxLength && characterCount === maxLength
                ? "text-red-500"
                : "text-gray-400"
            )}>
              {characterCount}{maxLength && `/${maxLength}`}
            </p>
          )}
        </motion.div>
      </motion.div>
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea }
