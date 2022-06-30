const Category = ({ category }) => {
  return (
    <div
      style={{
        backgroundColor: "var(--base4)",
        color: "white",
        fontSize: "20px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        cursor: "pointer",
      }}
    >
      {category}
    </div>
  );
};

export default Category;
