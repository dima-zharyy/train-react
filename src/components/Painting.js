import defaultImage from "./default.png";

export default function Painting(props) {
  const {
    url = defaultImage,
    title,
    authorProfile,
    authorName,
    price,
    quantity,
  } = props;
  return (
    <div>
      <img src={url} alt={title} width="240" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorProfile}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? "заканчивается" : "есть в наличии"}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}
