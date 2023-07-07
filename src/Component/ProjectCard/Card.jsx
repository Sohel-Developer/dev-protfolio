

const Card = ({ image, title, description }) => {
    return (
        <div
            className="card"
        >
            <img
                src={image}
                className="card__image"
            />
            <div
                className="card__content"
            >
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};


export default Card;