import { useState } from "react";
import { pizzas } from "../data/data.js";

export default function MainPage() {
    const [img, setImg] = useState(1);

    function handleClickPrevious() {
        setImg((prev) => (prev === 1 ? 3 : prev - 1));
    }

    function handleClickNext() {
        setImg((prev) => (prev === 3 ? 1 : prev + 1));
    }

    const sortedItems = pizzas.sort((a, b) => a.price - b.price);

    const flashPizzas = sortedItems.slice(0, 3);


    return (
        <div className="container mainPageContainer">
            <div style={{ position: "relative" }}>
                <img src={`public/mainPageImg/${img}.jpg`} alt={`Image ${img}`} />
                <button className="prvs" onClick={handleClickPrevious}>
                    <img src="https://img.icons8.com/ios/50/previous.png" alt="" width={"30px"} height={"30px"} />
                </button>
                <button className="nxt" onClick={handleClickNext}>
                    <img src="https://img.icons8.com/ios/50/next.png" alt="" width={"30px"} height={"30px"} />
                </button>
            </div>
            <div className="bg-white rounded-pill shadow-lg my-3 p-3">
                <h4>Flash İndirimler</h4>
            </div>
            <div className="flashPizzasContainer mt-3 d-flex">

                <div className="card shadow-lg rounded-5 me-4" style={{ maxWidth: "15rem", maxHeight: "19rem" }} >
                    <img src={flashPizzas[0].image} alt="" className="card-img-top rounded-top-5" />
                    <div className="card-body">
                        <h5 className="card-title">{flashPizzas[0].name}</h5>
                        <span className="badge" style={{ backgroundColor: "#b38c48" }}>{flashPizzas[0].price} TL</span>
                    </div>
                </div>
                <div className="card shadow-lg rounded-5 me-4" style={{ maxWidth: "15rem", maxHeight: "19rem" }}>
                    <img src={flashPizzas[1].image} alt="" className="card-img-top rounded-top-5" />
                    <div className="card-body">
                        <h5 className="card-title">{flashPizzas[1].name}</h5>
                        <span className="badge" style={{ backgroundColor: "#b38c48" }}>{flashPizzas[1].price} TL</span>
                    </div>
                </div>
                <div className="card shadow-lg rounded-5" style={{ maxWidth: "15rem", maxHeight: "19rem" }}>
                    <img src={flashPizzas[2].image} alt="" className="card-img-top rounded-top-5" />
                    <div className="card-body">
                        <h5 className="card-title">{flashPizzas[2].name}</h5>
                        <span className="badge" style={{ backgroundColor: "#b38c48" }}>{flashPizzas[2].price} TL</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
