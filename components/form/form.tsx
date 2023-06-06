import { FormEvent } from "react";

export const Form = ({ children, ...props }: { children: React.ReactNode }) => (
  <form role="form" className="flex flex-col items-center gap-5 w-80 m-[auto]" {...props}>
    {children}
  </form>
)
