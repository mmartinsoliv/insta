import { InputHTMLAttributes } from "react"

type InputProps = {
  type: string
  placeholder: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ type, placeholder, ...props}: InputProps) => (
  <input type={type} placeholder={placeholder} {...props} className="bg-[#2B2B2B] py-4 px-3 rounded-lg w-80" />
)
