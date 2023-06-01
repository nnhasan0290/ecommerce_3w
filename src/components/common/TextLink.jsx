const TextLink = ({ children, onClick, gray }) => {
  return <span onClick={onClick} className={`textLink ${gray && 'gray'}`}>{children}</span>;
};

export default TextLink;
