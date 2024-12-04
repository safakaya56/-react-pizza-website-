import Pizza from "./Pizza";
import { pizzas } from "../data/data.js";

export default function PizzaList() {
    return (
        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5 g-3 px-3">
            {
                pizzas.map((p, index) => (
                    <div className="col" key={index}>
                        <Pizza pizzaObj={p} />
                    </div>
                ))
            }
        </div>
    );
}
