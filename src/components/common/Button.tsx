type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const CustomButton = (props: ButtonProps): JSX.Element => {
  return (
    <button
      style={props.style}
      type={props.type}
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
