import React, {useState} from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import TodoList from './Todo-List';

function Example() {
  const [name, setName]= useState('');
  const [age, setAge]= useState('');
  const [email, setEmail]=useState('');

  const handleNameChange = (e) => 
    { setName(e.target.value); 

    }

  const handleAgeChange = (e) =>
    { setAge(e.target.value); 

    }
  
  const handleEmailChange = (e) =>
    { setEmail(e.target.value); 

    }
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Nama"/>
      <input type="text" value={age} onChange={handleAgeChange} placeholder="Umur"/>
      <input type="text" value={email} onChange={handleEmailChange} placeholder="Email"/>
      <p>Halo, nama saya {name}, berumur {age} tahun, email saya {email}</p>
    </div>
  );
}
// Header component
function Header() {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

// Main component
function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Saya</h2>
      <p>Ini adalah area konten utama</p>
    </main>
  );
}

// footer component
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 React Saya</p>
    </footer>
  );
}

// App component using header, main, and footer components
function App() {
  return (
    <div>
      <Header />
        <Main />
        <Greeting name="John" />
        <Counter />
        <Example/>
        <TodoList/>
      <Footer />
    </div>
  );
}

export default App;
