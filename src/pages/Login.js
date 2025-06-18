import React, { useState, useEffect } from 'react';
import './Login.css';
import imgLogo from '../img/logo.png'
import { useloginService } from '../services/LoginService';


export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // Simula chamada API que retorna token
    const fakeApiLogin = (user, pass) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'alan' && pass === '123') {
                    resolve('fake-token-123');
                } else {
                    reject(new Error('Usuário ou senha inválidos'));
                }
            }, 1000);
        });


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        var token = "";
        var data = {};
        try {
            data.token = await fakeApiLogin(username, password);

            try {

                try {


                    //data = await useloginService(username, password); api real

                    //data.token == undefined ? "" : data.token;
                    //var erros = data.retorno.erros[0].descricao;  api real
                    //if(!erros=="")  api real
                    //    token = "";  api real

                    //setError(erros);  api real
                    //const token = await fakeApiLogin(username, password);

                } catch (err) {
                    setError(err);
                } finally {
                }

            } catch (err) {
                setError(err.message);
            }
            onLogin(data.token);
        } catch (err) {
            setError(err.message);
        }
    };

    return (

        <div
            className="login-box"
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: '#eee',
                background: 'linear-gradient(to right, #8B0000, #000000)'
            }}
        >

            <form
                onSubmit={handleSubmit}

                style={{
                    backgroundColor: 'white',
                    padding: 30,
                    borderRadius: 8,
                    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                    width: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                }}
            >

                <img src={imgLogo} alt="Logo Mantran" style={{ margin: '0px auto' }} />

                <h2>
                    Bem-vindo ao Mantran Mobile
                </h2>

                <p>
                    Entre para continuar
                </p>

                {error && <p style={{ color: 'red' }}>{error}</p>}


                <div className="input-group">
                    <i className="material-icons">person</i>
                    <input
                        placeholder="Informe seu usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoFocus
                        style={{ padding: 8, fontSize: 16 }}
                    />
                </div>

                <div className="input-group">
                    <i className="material-icons">lock</i>
                    <input
                        type="password"
                        placeholder="Informe sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ padding: 8, fontSize: 16 }}
                    />
                </div>


                <button
                    type="submit"
                    className="btn-login"
                    style={{
                        // padding: 10,
                        // backgroundColor: '#007bff',
                        // border: 'none',
                        // color: 'white',
                        // fontSize: 16,
                        // cursor: 'pointer',
                        // borderRadius: 4,
                    }}
                >
                    Entrar
                </button>
            </form>

            <div className="footer">
                www.mantran.com.br
            </div>

        </div>
    );
}
