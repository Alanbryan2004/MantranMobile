import imgLogo from '../img/logo.png';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { configUrl } from "../config.json";



const apiUrl = "http://w2022-0691.emartim.com.br:35393/Token";
//              http://w2022-0691.emartim.com.br:35393/Token

export async function useloginService(user, pass) {
    //getConfig();
    // try {

    return fetch(
        apiUrl,
        //'/api/token', 
        
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                Usuario: user,
                Senha: pass
            }
        )
    }).then(function (response) {
        // console.log(response);
        return response.json();
    }).then((function (data) {
        // console.log(data);
        // console.log(result);

        return data;
    }));
    // } catch (error) {
    //     return error;
    // }


    //    return result = 1;


    // const postData = async () => {
    //     const response = await fetch(apiUrl, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(
    //             {
    //                 Usuario: user,
    //                 Password: pass
    //             }
    //         )
    //     });
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! Status ? ${response.status}`)
    //     }
    //     const result = await response.json();
    //     // postData();
    //     console.log(result);
    // }
    // function FetchDataApi(){
    //     postData();
    // }

}

//  async function getConfig() {
//  const res = await fetch('/config.json');
//  const config = res.json();
//  console.log(config);
// }
