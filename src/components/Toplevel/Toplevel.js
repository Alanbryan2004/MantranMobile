import React, { createElement, useState } from 'react';
import imgLogo from '../../img/logo.png';
import IconsDescription from '../Icon/Icon'
import Sidebar from '../Sidebar/Sidebar';

export default function Toplevel({ }) {
    const [collapsed, setCollapsed] = useState(false);

    return (


        <div class="topbar"
            style={
                {
                    left: !collapsed ? 'auto' : 0
                }
            }
        >
            <button id="menuButton"
                onClick={() => {
                    setCollapsed(!collapsed);

                    var sidebar = document.getElementById("SidebarElement");
                    sidebar.style.transition = 'width 0.3s';
                    //sidebar.style.display = collapsed ? 'none' : 'block';
                    sidebar.style.display = !collapsed ? 'none' : 'block';

                    sidebar.style.width = !collapsed ? 0 : '250px';
                    sidebar.style.flexDirection = "column";
                    //flex-grow: 1;
                    // sidebar.style.flexGrow = 1; // display: 'none'
                }

                }

            ><i class="material-icons">menu</i></button>

            {/* 
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
            </button> */}

            <h2 style={{ marginLeft: '15px', fontSize: '20px' }}>Início</h2>
        </div>

    );
}
