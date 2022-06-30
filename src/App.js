import Slider from "./components/slider/Slider";
import HeaderContext from "./components/contexts/HeaderContext";
import UsersContext from "./components/contexts/UsersContext";
import CartCountContext from "./components/contexts/CartCountContext";

const App = () => {
  return (
    <HeaderContext>
      <UsersContext>
        <CartCountContext>
          <Slider />
        </CartCountContext>
      </UsersContext>
    </HeaderContext>
  );
};

export default App;
