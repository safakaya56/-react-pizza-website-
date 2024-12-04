export default function Navbar({ chngMain, chngPizza, chngExtra }) {




    return (
        <>
            <nav className="navbar p-4 d-flex justify-content-between">
                <div>
                    <img src="https://img.icons8.com/office/100/pizza.png" alt="" width={"80px"} height={"80px"} />
                    <span className="h1 text-white">Pizza Shop</span>
                </div>
                <div className="links me-2">

                    <button className=" me-2 rounded-pill bg-white p-2 text-black" onClick={chngMain}>Anasayfa</button>
                    <button href="" className=" me-2 rounded-pill bg-white p-2 text-black" onClick={chngPizza}>Pizzalar</button>
                    <button href="" className="rounded-pill bg-white p-2 text-black" onClick={chngExtra}>Extralar</button>
                </div>
            </nav>
        </>
    )
}