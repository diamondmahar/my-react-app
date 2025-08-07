import logo from './logo.svg';
import './App.css';
import InputFields from './components/inputFields';
import Card from './components/card';

function App() {
  return (
    <>
      <InputFields
        type="text"
        placeholder="Enter your username here"
        name="username"
        label="name" />

      <InputFields
        type="email"
        placeholder="Enter your email here"
        name="email"
        label="email" />

      <InputFields
        type="password"
        placeholder="Enter your password here"
        name="password"
        label="password" />

      <div className="cards-container">
        <Card
          img="https://plus.unsplash.com/premium_photo-1725408137556-3ff8caf1519d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          p="Card with a beautiful image"
        />
        <Card
          img="https://images.unsplash.com/photo-1615717826577-cfde3026a301?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          p="Card with a stunning view of nature"
        />
        <Card
          img="https://plus.unsplash.com/premium_photo-1661930645394-9d46a620a4e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          p="Card with a breathtaking mountain landscape"
        />
      </div>
    </>
  );
}

export default App;
