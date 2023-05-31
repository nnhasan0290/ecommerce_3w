const Button = ({ children, onClick }) => {
  return <button onClick={onClick} className="button primary">{children}</button>;
};

export default Button;
