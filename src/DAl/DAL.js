import React from "react";
import axios from "axios";
import * as firebase from "firebase";
import Product from "../products/elements/product";


export const register = async (data) => {
   return await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBsRCCuKAqt8eGFMvMqnep1Dm0NOmPzh4E', data);
}

export const login = async (data) => {
   return await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBsRCCuKAqt8eGFMvMqnep1Dm0NOmPzh4E', data);
}
export const getProducts = async () => {
   const db = firebase.database();
   const storage = firebase.storage();
   const phones = db.ref();
   const files = await phones.once('value');
   const files2= await files.val();
   const data = await Object.values(files2);
   const urls = await data.map(async function(el){
         const pic = await storage.ref(await el.img);
         return await pic.getDownloadURL()
       })
   const urls2 = await Promise.all(urls)
   return {
      data:await data,
      images: urls2
   }
//        .then(async function(snapshot) {
//       data = Object.values(snapshot.val());
//       store = data.map(async el=> {
//          let pic = storage.ref(el.img);
//          let newEl = el;
//          pic.getDownloadURL().then(async function(url) {
//             // Insert url into an <img> tag to "download"
// //+            console.log(url)
//             newEl.img = await url
//          })
//          return await newEl
//       } );
//    });
}