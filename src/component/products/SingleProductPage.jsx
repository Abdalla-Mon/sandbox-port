import { useParams } from "react-router-dom";

export default function SingleProductPage({ data }) {
  const { prodId } = useParams();

  console.log(prodId);
}
