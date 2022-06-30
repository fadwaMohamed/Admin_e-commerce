const ImageSlide = ({ image }) => {
  return (
    <img
      style={{
        height: "500px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        cursor: "pointer",
        marginBottom: "40px",
        objectFit: "cover",
      }}
      src={`assets/slider/${image}`}
      alt="slide"
    />
  );
};

export default ImageSlide;
