
type InputProps = {
  name: string
  type: string
  value: string
  onChange: any
  onBlur?: () => void
  placeholder: string
}

export const Input = ({
  type,
  name,
  value,
  onChange,
  onBlur,
  placeholder }: InputProps) => (
  <input
    id={name}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    className="bg-[#2B2B2B] py-4 px-3 rounded-lg w-80"
    placeholder={placeholder}
  />
)

