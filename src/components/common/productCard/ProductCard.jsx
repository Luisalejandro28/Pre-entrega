const ProductCard = (props) => {
  const { titulo, descripcion, precio } = props;
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <h4>{precio}</h4>
    </div>
  );
};
export default ProductCard;


