import "./App.css";
import WelcomeBack from "./WelcomeBack"
import Header from "./Header"
import Footer from "./Footer"

// function EncouragingWords({name}){
//   return <p>{name} is doing a great job!</p>
// }

function App() {
  // const myName = "Daniel"
  // const url = "https://www.thinkful.com/"
  // const linkText = "vist my webpage"
  // const link = <a href = {url}>{linkText}</a>;
  // const element = <h1>Hello, {myName} please {link} </h1>;
  // return element
  return (
    <>
      <Header/>
      <WelcomeBack name="Daniel"/>
      <WelcomeBack/>
      <Footer/>
    </>
  )
}

export default App;