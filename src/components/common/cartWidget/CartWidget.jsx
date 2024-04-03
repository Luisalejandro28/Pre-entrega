import Badge from "@mui/material/Badge";
import { IoCartOutline } from "react-icons/io5";
export const CartWidget = () => {
  return (
    <>
      <Badge className="contentCarro" badgeContent={1} color="primary">
        <IoCartOutline className="carro" color="action" />
      </Badge>
    </>
  );
};
