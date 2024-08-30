import { useParams,Link } from "react-router-dom";

function ProductDetails() {
  const {Id} = useParams();
  return (
    <div>
      <h1>Product Details!</h1>
      <p>{Id}</p>
      <p><Link to='..' relative="path">Back</Link></p>
    </div>
  );
}

export default ProductDetails;
