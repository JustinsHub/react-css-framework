import { ButtonProps } from "./interfaces/button.interface"

const Button = (props: ButtonProps): JSX.Element => {
  const { color, content } = props

  return (
    <button className={`btn btn--${color}`}>
     {content}
    </button>
  )
}

export default Button