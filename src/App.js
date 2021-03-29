import "bootstrap/dist/css/bootstrap.min.css"
import Congrats from "./Congrats"
import GuessedWords from "./GuessedWords"

function App() {
  return (
    <div className="container">
      <h1> jotto </h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[]} />
    </div>
  );
}

export default App;
