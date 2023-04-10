import "./App.css";

function App() {
  const myName = "Daniel"
  const url = "https://www.thinkful.com/"
  const linkText = "vist my webpage"
  const link = <a href = {url}>{linkText}</a>;
  const element = <h1>Hello, {myName} please {link} </h1>;
  return element
}

export default App;