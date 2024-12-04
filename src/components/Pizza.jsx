export default function Pizza({ pizzaObj }) {


    return (
        <div className="card shadow-lg rounded-5" >
            <img src={pizzaObj.image} alt="" className="card-img-top rounded-top-5" />
            <div className="card-body">
                <h5 className="card-title">{pizzaObj.name}</h5>
                <p className="card-text">{pizzaObj.description}</p>
                <span className="badge" style={{ backgroundColor: "#b38c48" }}>{pizzaObj.price} TL</span>
            </div>
        </div>
    )
}