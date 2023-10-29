import axios from 'axios';

class Api {

  // Configuração padrão do Axios
  api = axios.create({
    // baseURL: 'https://api-login-0qlo.onrender.com',
    baseURL: 'http://localhost:3001',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  });
  
  // Exemplo de função para fazer uma solicitação de registro de usuário
  registerUser = (userData) => {
    return this.api.post('/users/', userData);
  };
  
  // Exemplo de função para fazer uma solicitação de login de usuário
  loginUser = (userData) => {
    return this.api.post('/auth', userData);
  };
}

export default Api;