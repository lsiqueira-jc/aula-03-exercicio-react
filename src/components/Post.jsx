export default function Post({ imagem, descricao }) {
  return (
    <div>
      <img src={imagem} />
      <p>{descricao}</p>
    </div>
  );
}
