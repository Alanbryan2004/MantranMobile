import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Toplevel from '../components/Toplevel/Toplevel';

import './Profile.css';

const LOCAL_STORAGE_KEY = 'manifestos';

const Profile = () => {
    // const [manifestos, setManifestos] = useState([]);
    // const [form, setForm] = useState({ id: '', nome: '', destino: '', data: '' });
    // const [editando, setEditando] = useState(false);
    // const [tabIndex, setTabIndex] = useState(0); // ← Novo estado para alternar abas


    // useEffect(() => {
    //     const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    //     if (saved) {
    //         setManifestos(JSON.parse(saved));
    //     } else {
    //         const exemplo = [
    //             { id: '1', nome: 'Carga Frutas', destino: 'Campinas', data: '2025-06-01' },
    //             { id: '2', nome: 'Peças Auto', destino: 'São Paulo', data: '2025-06-03' },
    //         ];
    //         setManifestos(exemplo);
    //         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(exemplo));
    //     }
    // }, []);

    // const salvarManifestos = (data) => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (editando) {
    //         const atualizados = manifestos.map((m) =>
    //             m.id === form.id ? form : m
    //         );
    //         setManifestos(atualizados);
    //         salvarManifestos(atualizados);
    //     } else {
    //         const novo = { ...form, id: Date.now().toString() };
    //         const atualizados = [...manifestos, novo];
    //         setManifestos(atualizados);
    //         salvarManifestos(atualizados);
    //     }
    //     setForm({ id: '', nome: '', destino: '', data: '' });
    //     setEditando(false);
    //     setTabIndex(0); // ← Voltar para aba de listagem após salvar
    // };

    // const handleDelete = (id) => {
    //     const atualizados = manifestos.filter((m) => m.id !== id);
    //     setManifestos(atualizados);
    //     salvarManifestos(atualizados);
    // };

    // const handleEdit = (m) => {
    //     setForm(m);
    //     setEditando(true);
    //     setTabIndex(1); // ← Ir para aba de edição
    // };

    // return (
    //     <div className="profile-container">
    //         <h2>Gestão de Manifestos</h2>
    //         <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    //             <TabList className="tab-list">
    //                 <Tab className="tab" selectedClassName="tab--selected">Listar</Tab>
    //                 <Tab className="tab" selectedClassName="tab--selected">{editando ? 'Editar' : 'Novo Manifesto'}</Tab>
    //             </TabList>

    //             <TabPanel className="tab-panel">
    //                 <table>
    //                     <thead>
    //                         <tr>
    //                             <th>Nome</th>
    //                             <th>Destino</th>
    //                             <th>Data</th>
    //                             <th>Ações</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {manifestos.map((m) => (
    //                             <tr key={m.id}>
    //                                 <td>{m.nome}</td>
    //                                 <td>{m.destino}</td>
    //                                 <td>{m.data}</td>
    //                                 <td>
    //                                     <button onClick={() => handleEdit(m)}>Editar</button>
    //                                     <button onClick={() => handleDelete(m.id)} style={{ backgroundColor: '#c0392b' }}>Excluir</button>
    //                                 </td>
    //                             </tr>
    //                         ))}
    //                     </tbody>
    //                 </table>
    //             </TabPanel>

    //             <TabPanel className="tab-panel">
    //                 <form className="manifest-form" onSubmit={handleSubmit}>
    //                     <input
    //                         type="text"
    //                         placeholder="Nome"
    //                         value={form.nome}
    //                         onChange={(e) => setForm({ ...form, nome: e.target.value })}
    //                         required
    //                     />
    //                     <input
    //                         type="text"
    //                         placeholder="Destino"
    //                         value={form.destino}
    //                         onChange={(e) => setForm({ ...form, destino: e.target.value })}
    //                         required
    //                     />
    //                     <input
    //                         type="date"
    //                         value={form.data}
    //                         onChange={(e) => setForm({ ...form, data: e.target.value })}
    //                         required
    //                     />
    //                     <button type="submit">{editando ? 'Atualizar' : 'Salvar'}</button>
    //                 </form>
    //             </TabPanel>
    //         </Tabs>
    //     </div>
    // );
    return (
        <>
            <Toplevel />

            <div className="content">
                <div className="card" >
                    <h3>Manifesto 231245</h3>
                    <p>Data: 03/06/2025</p>
                    <p>Origem: São Paulo/SP</p>
                    <p>Destino: Belo Horizonte/MG</p>
                    <p>Total de Entregas: 12</p>
                </div>
                {/* <div class="card">
                <h3>Manifesto 231246</h3>
                <p>Data: 03/06/2025</p>
                <p>Origem: Campinas/SP</p>
                <p>Destino: Rio de Janeiro/RJ</p>
                <p>Total de Entregas: 8</p>
            </div> */}
            </div>
        </>
    )
}



export default Profile;
