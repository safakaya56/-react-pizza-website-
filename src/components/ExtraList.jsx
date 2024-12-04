import Extra from "./Extra.jsx";
import { extras } from "../data/data.js";

export default function ExtraList() {
    return (
        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5 g-3 px-3">
            {
                extras.map((p, index) => (
                    <div className="col" key={index}>
                        <Extra extraObj={p} />
                    </div>
                ))
            }
        </div>
    );
}
