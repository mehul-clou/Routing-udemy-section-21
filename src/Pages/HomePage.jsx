import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function handlerNavigation() {
    navigate("/products");
  }

  return (
    <div>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="products">the list of products</Link>
      </p>
      <button onClick={handlerNavigation}>Navigate</button>
    </div>
  );
}

export default HomePage;
