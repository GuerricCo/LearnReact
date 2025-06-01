type Button2Props = {
  href: string;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
  children: React.ReactNode;
};

function Button2(props: Button2Props) {
  const {
    href,
    variant = 'primary',
    className = '',
    children,
  } = props;

  const variantClasses: Record<NonNullable<Button2Props['variant']>, string> = {
    primary:   'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    danger:    'bg-red-500 hover:bg-red-600 text-white',
  };

  return (
    <a
      href={href}
      className={`inline-block px-4 py-2 rounded transition 
                  ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export default function Components() {
  return (
    <>
      <Button2 href="/page-a" variant="primary">
        Page A
      </Button2>

      <Button2 href="/page-b" variant="secondary">
        <span className="font-bold">Aller à la page B</span>
      </Button2>

      <Button2 href="/page-c">
        Cliquez ici (par défaut)
      </Button2>
    </>
  );
}
