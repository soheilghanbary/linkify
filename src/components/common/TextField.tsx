import { forwardRef, type ForwardedRef, type InputHTMLAttributes } from "react"
import { Input } from "@ui/input"
import { Label } from "@ui/label"

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export const TextField = forwardRef(function MyInput(
  { label, ...rest }: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className="grid gap-1.5 [&>label]:text-sm">
      <Label>{label}</Label>
      <Input type="text" ref={ref} {...rest} />
    </div>
  )
})
