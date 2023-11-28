import React from 'react'

export default function
    () {
    return (
        <>
            <h1 className='text-primary ps-2 text-center text-decoration-underline'>Upcoming Festivals</h1><br />
            <div className='row justify-content-around'>
                <div className="card col-4">
                    <img src="https://cityfurnish.com/blog/wp-content/uploads/2023/09/happy-diwali-greeting-card-with-burning-oil-lamp-festival-background-min.jpg" className="card-img-top py-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Diwali</h5>
                        <p>festival of light</p>
                    </div>
                </div>
                {/* --------------------------------------------------------------------------------- */}
                <div className="card col-4">
                    <img src="https://www.jagranimages.com/images/newimg/11062023/11_06_2023-chhath_puja_2023_23438604.webp" className="card-img-top py-2" alt="..." />
                    <div className="card-body">
                        <h5 className="">Chhath Puja</h5>
                        <p>also known as Surya Shashti</p>

                    </div>
                </div>




                <div className="card col-4">
                    <img src="https://vama.app/blog/wp-content/uploads/2023/11/happy-Govardhan-Puja.jpg" className="card-img-top py-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Govardhan Puja </h5>
                        <p>Govardhan Puja, also known as Annakut or Annakoot</p>

                    </div>
                </div>
            </div><br /><br />



            <div className='row justify-content-around'>
                <div className="card col-4">
                    <img src="https://cdn3.vectorstock.com/i/1000x1000/65/47/happy-holi-festival-of-india-background-group-vector-45956547.jpg" className="card-img-top py-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Holi</h5>
                        <p>Festival of Colours</p>
                    </div>
                </div>
                {/* --------------------------------------------------------------------------------- */}
                <div className="card col-4">
                    <img src="https://navi.com/blog/wp-content/uploads/2023/02/Durga-Puja-Holiday.jpg" className="card-img-top py-2" alt="..." />
                    <div className="card-body">
                        <h5 className="durga puja">Card title</h5>
                        <p>Durga Puja, also known as Durgotsava or Sharodotsav</p>

                    </div>
                </div>




                <div className="card col-4">
                    <img src="" className="card-img-top py-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Coming Soon...</h5>

                    </div>
                </div>
            </div>

        </>
    )
}
