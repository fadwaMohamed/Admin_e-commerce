import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import {
  addCartProduct,
  getCartProduct,
  editCartProduct,
} from "../../../DB/dbCart";
import { cartContext } from "../../contexts/CartCountContext";
import { useContext } from "react";

const Product = ({ product }) => {
  const cartCtx = useContext(cartContext);

  /// add to cart
  const addToCart = async () => {
    getCartProduct(product.id).then((data) => {
      if (data == undefined) {
        addCartProduct({ ...product, quantity: "1" });
        cartCtx.setCount(cartCtx.count + 1);
      } else {
        editCartProduct({ ...product, quantity: parseInt(data.quantity) + 1 });
      }
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={`/assets/products/${product.image}`}
        alt={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            Available {product.quantity} pieces
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "var(--base4)", fontStyle: "italic" }}
          >
            {product.price}$
          </Typography>
        </div>
      </CardContent>
      <Divider />
      <CardActions style={{ justifyContent: "center", padding: "0" }}>
        <Button
          size="small"
          style={{ width: "100%", height: "40px" }}
          onClick={addToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
