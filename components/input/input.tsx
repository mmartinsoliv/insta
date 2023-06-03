
type InputProps = {
  id: string
  type: string
  placeholder: string
}

export const Input = ({ id, type, placeholder }: InputProps) => <input id={id} type={type} className="bg-[#2B2B2B] py-4 px-3 rounded-lg w-80" placeholder={placeholder} />

