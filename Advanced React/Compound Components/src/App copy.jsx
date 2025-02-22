import { Card } from "./components/card";

function App() {
  return (
    <Card test={"Value Context"}>
      <Card.Header>
        <h1 style={{ margin: "0" }}>Header</h1>
      </Card.Header>
      <Card.Body>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
        architecto nostrum vitae neque culpa unde eligendi iusto voluptatem cum
        animi recusandae, temporibus provident, perferendis blanditiis!
        Quibusdam sint sit necessitatibus modi error? Earum in reprehenderit,
        deleniti esse alias officiis voluptate culpa nulla aliquam, eius
        cupiditate atque? Mollitia deserunt sit sed necessitatibus.
      </Card.Body>
      <Card.Footer>
        <button>Ok</button>
        <button>Cancel</button>
      </Card.Footer>
    </Card>
  );
}

export default App;
