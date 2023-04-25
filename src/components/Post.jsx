export default function Post({ image, description }) {
    return (
      <div>
        <img src={image} />
        <p>{description}</p>
      </div>
    );
  }