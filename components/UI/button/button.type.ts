interface ButtonProps {
  text: string | HTMLElement;
  variant: string;
  onclick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default ButtonProps;
