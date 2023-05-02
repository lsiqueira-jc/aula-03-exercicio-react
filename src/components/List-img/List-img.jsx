import './List-img.css'
import React from 'react';
import ReactDOM from 'react-dom';

function ImageList() {
  const images = [
    'https://recreio.uol.com.br/media/uploads/disney/hm3.jpg',
    'https://s2.glbimg.com/zu8gWaOn_ygVSsHWiVJTY1ntCY0=/smart/e.glbimg.com/og/ed/f/original/2021/03/24/hannah-montana.jpg',
    'https://escutai.com/wp-content/uploads/2021/07/Hannah-Montana-8-coisas-que-voce-nao-sabia-sobre-a-serie-escutai-esc-disney-7-scaled.jpg',
  ];

  return (
    <ul>
      {images.map((image) => (
        <li key={image}>
          <img className='imagens' src={image} alt="Imagem" />
        </li>
      ))}
    </ul>
  );
}

export default ImageList;