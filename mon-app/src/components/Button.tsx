type ButtonProps= {
    label : string;
    url : string;
    className?: string;
    variant?: 'primary' | 'secondary' | 'danger';

}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
};

function Button({label, url, variant="primary"} : ButtonProps) {
  return (
    <a href={url} className={`inline-block px-4 py-2 rounded transition ${variantClasses[variant]}`}>
        {label}
    </a>
  )
}

export default Button
