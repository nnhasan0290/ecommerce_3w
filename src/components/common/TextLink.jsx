const TextLink = ({ children, onClick }) => {
  return <span onClick={onClick} className="textLink">{children}</span>;
};

export default TextLink;
