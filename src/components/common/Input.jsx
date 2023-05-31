const Input = ({ type, label }) => {
  return (
    <div className="input">
      {label && (
        <label for="exampleFormControlInput1" className="input__label">
          {label}
        </label>
      )}
      <input
        type={type ? type : "text"}
        className="input__field"
        placeholder={label}
      />
    </div>
  );
};

export default Input;
