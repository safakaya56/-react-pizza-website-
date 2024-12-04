export default function Extra({ extraObj }) {


    return (
        <div className="card shadow-lg rounded-5" >
            <img src={extraObj.image} alt="" className="card-img-top rounded-top-5" />
            <div className="card-body">
                <h5 className="card-title">{extraObj.name}</h5>
                <p className="card-text">{extraObj.description}</p>
                <span className="badge" style={{ backgroundColor: "#b38c48" }}>{extraObj.price} TL</span>
            </div>
        </div>
    )
}