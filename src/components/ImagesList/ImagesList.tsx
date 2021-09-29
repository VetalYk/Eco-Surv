import "./styles.css";

interface Props {
  images: string[];
}
export default function ImagesList({ images }: Props): JSX.Element {
  return (
    <div className="list">
      {images.length !== 0 &&
        images.map((url) => {
          return (
            <div className="img-wrap" key={url}>
              <img src={url} alt="dog" />
            </div>
          );
        })}
    </div>
  );
}
