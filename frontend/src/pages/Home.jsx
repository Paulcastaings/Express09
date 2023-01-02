import logo from "../assets/logo.svg";
import Form from "../components/Form";

export default function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React !</p>

      <Form />
    </header>
  );
}
