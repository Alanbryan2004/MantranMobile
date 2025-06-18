import imgLogo from '../img/logo.png';
import React, { useState } from 'react';
import Toplevel from '../components/Toplevel/Toplevel';
import Login from './Login';
// import { Profile } from '../pages/Profile';
// import { Settings } from '../pages/Profile';
// import { Login } from '../pages/Login';

export default function Home({ onLogout }) {

    const [page, setPage] = useState('home');



    //     let Content;

    //     switch (page) {
    //     case 'home':
    //       Content = <Home />;
    //       break;
    //     case 'profile':
    //       Content = <Profile />;
    //       break;
    //     case 'settings':
    //       Content = <Settings />;
    //       break;
    //     default:
    //       Content = <Home />;
    //   }


    return (
        <div>
            {/* <div class="topbar">
                <button id="menuButton"><i class="material-icons">menu</i></button>
                <h1 style={{marginLeft: '15px', fontSize: '20px'}}>Início</h1>
            </div> */}

            <Toplevel />

            <div class="content">

                <div class="card"
                    // onClick={{

                    // }}

                    href="/profile"
                >
                    <i class="material-icons">description</i>
                    <h3>Manifesto</h3>
                </div>
                <div class="card" onclick="location.href='jornada.cshtml'">
                    <i class="material-icons">timer</i>
                    <h3>Jornada</h3>
                </div>
                <div class="card" onclick="location.href='viagens.cshtml'">
                    <i class="material-icons">map</i>
                    <h3>Viagens</h3>
                </div>
                <div class="card" onclick="location.href='index.cshtml'"
                    onClick={onLogout}
                >
                    <i class="material-icons">exit_to_app</i>

                    <h3>Sair</h3>
                </div>

            </div>

        </div>

    );
}
