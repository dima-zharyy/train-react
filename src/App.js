import Painting from "./components/Painting";
import paintings from "./paintings.json";

export default function App() {
  return (
    <div>
      <Painting
        // url={paintings[0].url}
        title={paintings[0].title}
        authorProfile={paintings[0].author.url}
        authorName={paintings[0].author.tag}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
      />

      <Painting
        url={paintings[1].url}
        title={paintings[1].title}
        authorProfile={paintings[1].author.url}
        authorName={paintings[1].author.tag}
        price={paintings[1].price}
        quantity={paintings[1].quantity}
      />

      <Painting
        url={paintings[2].url}
        title={paintings[2].title}
        authorProfile={paintings[2].author.url}
        authorName={paintings[2].author.tag}
        price={paintings[2].price}
        quantity={paintings[2].quantity}
      />
    </div>
  );
}
