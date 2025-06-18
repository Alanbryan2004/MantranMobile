import React, { useState } from 'react';

export default function Sidebar({ currentPage, onChangePage, onLogout }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            style={{
                width: collapsed ? 60 : 200,
                backgroundColor: '#222',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                padding: 10,
                transition: 'width 0.3s',
            }}
        >
            <button
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
            </button>

            <nav style={{ flexGrow: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {[
                        { key: 'home', label: 'Home' },
                        { key: 'profile', label: 'Profile' },
                        { key: 'settings', label: 'Settings' },
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

                </ul>
            </nav>
            {/* 
            <button
                style={{
                    backgroundColor: '#c00',
                    border: 'none',
                    color: 'white',
                    padding: 10,
                    cursor: 'pointer',
                    borderRadius: 4,
                }}
            > */}


            Logout
            {/* </button> */}
        </div>
    );
}
