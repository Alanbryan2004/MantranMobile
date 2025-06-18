import React, { createElement, useState } from 'react';
import imgLogo from '../../img/logo.png';
import IconsDescription from '../Icon/Icon'

export default function Sidebar({ currentPage, onChangePage, onLogout }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            id='SidebarElement'
            style={{
                width: collapsed ? 40 : 250,
                backgroundColor: '#222',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                // padding: 10,
                transition: 'width 0.3s',
                color: 'white'
            }}
        >
            {/* <button
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    marginBottom: 20,
                    backgroundColor: '#444',
                    color: 'white',
                    border: 'none',
                    padding: 10,
                    cursor: 'pointer',
                }}
            >
                {collapsed ? '➤' : '◀'}
            </button> */}

            <nav style={{
                // flexGrow: 1,
                //width: collapsed ? 0 : 250,
                //display: collapsed ? 'none' 

            }}>


                <div class="sidebar-header">
                    <img src={imgLogo} alt="Logo Mantran" />
                    <h2>Motorista</h2>
                    <p>ID123</p>
                </div>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {[
                        { key: 'home', label: 'Home', icon: <IconsDescription /> },
                        { key: 'profile', label: 'Manifesto' },
                        { key: 'settings', label: 'Viagens' },

                    ].map(({ key, label }) => (
                        <li
                            key={key}
                            onClick={() => onChangePage(key)}
                            style={{
                                padding: '8px 12px',
                                marginBottom: 8,
                                backgroundColor: currentPage === key ? '#555' : 'transparent',
                                cursor: 'pointer',
                                borderRadius: 4,
                            }}
                        >
                            {collapsed ? label.charAt(0) : label}
                        </li>


                    ))}



                    <li onClick={onLogout}>
                        <div style={
                            {
                                display: 'flex',
                                alignItems: 'center'
                            }
                        }>
                            <div>&nbsp; <i class="material-icons">exit_to_app</i> </div>
                            <div>&nbsp; Sair</div>
                        </div>

                    </li>
                </ul>
            </nav>

            {/* <button
                onClick={onLogout}
                style={{
                    backgroundColor: '#c00',
                    border: 'none',
                    color: 'white',
                    padding: 10,
                    cursor: 'pointer',
                    borderRadius: 4,
                    width: '100%',
                    bottom: '0px'
                }}
            >
                Logout
            </button> */}
        </div>
    );
}
