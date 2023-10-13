import { atom } from 'recoil';

export const productState = atom({
  key: 'productState',
  default: [
    { id: 1, name: 'Product 1', price: 10.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxuTl36VoyN1mtwV58kUnb-_DX8FOyOQwd1g&usqp=CAU' },
    { id: 2, name: 'Product 2', price: 15.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JSA9Tdsnn-VTMpj_Lxp6y7JA6hyvF2wKFw&usqp=CAU' },
    { id: 3, name: 'Product 3', price: 20.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxuTl36VoyN1mtwV58kUnb-_DX8FOyOQwd1g&usqp=CAU' },
    { id: 4, name: 'Product 4', price: 25.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JSA9Tdsnn-VTMpj_Lxp6y7JA6hyvF2wKFw&usqp=CAU' },
    { id: 5, name: 'Product 5', price: 30.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxuTl36VoyN1mtwV58kUnb-_DX8FOyOQwd1g&usqp=CAU' },
    { id: 6, name: 'Product 1', price: 10.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxuTl36VoyN1mtwV58kUnb-_DX8FOyOQwd1g&usqp=CAU' },
    { id: 7, name: 'Product 2', price: 15.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JSA9Tdsnn-VTMpj_Lxp6y7JA6hyvF2wKFw&usqp=CAU' },
    { id: 8, name: 'Product 3', price: 20.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxuTl36VoyN1mtwV58kUnb-_DX8FOyOQwd1g&usqp=CAU' },
    { id: 9, name: 'Product 4', price: 25.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JSA9Tdsnn-VTMpj_Lxp6y7JA6hyvF2wKFw&usqp=CAU' },
    { id: 10, name: 'Product 5', price: 30.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxuTl36VoyN1mtwV58kUnb-_DX8FOyOQwd1g&usqp=CAU' },
 
  ],
});


export const cartState = atom({
  key: 'cartState',
  default: [],
});


export const cartTotalState = atom({
  key: 'cartTotalState',
  default: 0,
});
