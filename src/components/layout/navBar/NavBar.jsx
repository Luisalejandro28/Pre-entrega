import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Box, Typography } from "@mui/material";
export const NavBar = () => {
  return (
    <>
      <Box
        className="navbar"
        sx={{
          backgroundColor: { xs: "#7ed8fb", sm: "#0395d3", md: "#0c4e6e" },
        }}
      >
        <Typography className="navegation" fontSize={{xs:"16", sm:"18", md:"20"}}>
          <ul className="nav-link">
            <h4>LOGO</h4>
            <a href="#">
              <li className="link">Inicio</li>
            </a>
            <a href="#">
              <li className="link">Productos</li>
            </a>
            <a href="#">
              <li className="link">Ofertas</li>
            </a>
            <a href="#">
              <li className="link">Contacto</li>
            </a>
            <a href="#">
              <CartWidget />
            </a>
          </ul>
        </Typography>
      </Box>
    </>
  );
};
