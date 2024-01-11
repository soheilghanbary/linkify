import {
  forwardRef,
  type ForwardedRef,
  type TextareaHTMLAttributes,
} from "react"
import { Label } from "@ui/label"
import { Textarea } from "@ui/textarea"

type TextFieldAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
}

export const TextFieldArea = forwardRef(function MyInput(
  { label, ...rest }: TextFieldAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <Textarea ref={ref} {...rest} />
    </div>
  )
})
