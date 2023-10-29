// App.js
import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Api from "./api.js"
const api = new Api();

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [users, setUsers] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleLogin(){
  try{
    const response = await api.loginUser({email, password});
    const user = response.data.name;

    if (user) {
      setName(user);
      setIsLoggedIn(true);
    }
    // } else {
    //   alert('Credenciais inválidas. Tente novamente.');
    // }
  }catch (e){
    setIsLoggedIn(false);
    alert("Usuário ou senha incorreto");
  }
  };

  async function handleRegister(){
    if(!name || !email || !password){
      return alert("Preencha os campos!");  
    }

    //await axios.post("http://localhost:3001/users/", {name, email, password, avatar});
    await api.registerUser({name, email, password});
    const newUser = { name, password };
    setUsers([...users, newUser]);
    setIsLoggedIn(true);
    alert('Registro realizado com sucesso!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName('');
    setPassword('');
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard name={name} handleLogout={handleLogout} />
      ) : (
        <div className="form-container">
          {isLogin ? (
            <div>
              <h2>Login</h2>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Entrar</button>
              <p>
                Não tem uma conta? <span onClick={() => setIsLogin(false)}>Registrar</span>
              </p>
            </div>
          ) : (
            <div>
              <h2>Cadastro</h2>
              <input
                type="text"
                placeholder="Nome de usuário"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleRegister}>Registrar</button>
              <p>
                Já tem uma conta? <span onClick={() => setIsLogin(true)}>Entrar</span>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
