import './Card.css';

function Card({image, title, text}) {
    return (
        <div className="product_card">
            <div className="product_image">{image}</div>
            <h3 className="product_title">{title}</h3>
            <p className="product_content">{text}</p>
        </div>

    )
}
export default Card;