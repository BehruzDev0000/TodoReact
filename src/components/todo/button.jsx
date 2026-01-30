function Button({ extraStyle = "", children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-10 py-3 bg-blue-500 rounded-xl text-[25px] outline-none ${extraStyle}`}
    >
      {children}
    </button>
  );
}

export default Button;
