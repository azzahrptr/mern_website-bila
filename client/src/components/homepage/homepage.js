import "./homepage.css"
import logo from "./img/logo_lafira_bakery-removebg-preview.png"
import right from "./img/about right.jpg"
import left2 from "./img/about left2.jpg"

const Homepage = ({setLoginUser}) => {

    return (
        <div className="homepage">
            <div className='body'>
                {/*header*/}
                <div className="header">
                    <div className="container">
                        <h1><a href="Lafira Bakery.html" /><img src={logo} width={100} height={100} align="center" />Lafira Bakery</h1>
                        <ul>
                            <li>HOME</li>
                            <li><a href="#about">ABOUT</a></li>
                            <li className="active"><a href="#">PRODUCTS</a></li>
                            <li><a href="#">CONTACT US</a></li>
                            <li><a className="menu-header-footer logout" href="#logout" onClick={() => setLoginUser({})}><strong>LOGOUT</strong></a></li>
                        </ul>
                    </div>
                </div>
                {/*end header*/}

                {/*banner*/}
                <section className="banner">
                    <h1>FRESH FROM THE OVEN <br />
                        AND MADE WITH LOVE
                    </h1>
                </section>
                {/*banner end*/}

                <section id="about" className="about">
                    <div className="container">
                        <h2><a name="about">ABOUT <em>LAFIRA BAKERY</em></a></h2>
                        <img src={right} width={300} height={300} align="left" />
                        <p className="p1">Roti home made yang dibuat dengan bahan-bahan premium yang berkualitas tinggi dan harga terjangkau.
                        Roti dan kue <em>Lafira Bakery</em> adalah roti dan kue pilihan yang dibuat dengan penuh cinta. Cocok dikonsumsi untuk
                        sarapan pagi atau bekal untuk sekolah maupun kuliah. Selain itu, bisa juga sebagai pendamping kopi dan teh saat bersantai</p>
                        <img src={left2} width={300} height={300} align="right" />
                        <p className="p2"><em>Lafira Bakery</em> juga bisa menjadi solusi untuk kalian yang ingin mengadakan sebuah acara seperti arisan,kumpul keluarga dan acara besar lain nya.
                        Tidak perlu bingung karena kami bisa membantu kalian menyediakan pesanan untuk acara besar. <em>Lafira Bakery</em> juga menjual berbagai
                        kue lebaran pada saat bulan ramadhan. Kami juga menerima request rasa dan bentuk seusai kemauan kalian</p>
                    </div>
                </section>

                {/*footer*/}
                <footer>
                    <div className="container">
                        <small> Copyright © 2023 - Fathi Nashwa Sabila, All Right Reserved.</small>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Homepage