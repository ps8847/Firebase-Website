import React from "react";

export default function Header() {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              <h1 className="display-2">
                Online Payment Made <br /> Easy For You
              </h1>
              <p className="main-hero-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                temporibus deleniti, harum nesciunt ipsa labore aliquam pariatur
                maiores neque non explicabo ut ad illum quisquam, aliquid rerum?
                Ad, magni? Sed placeat eum quae consectetur commodi, tempore
                odio magnam nemo quaerat!
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75 me-3 p-2 form-control-text"
                  placeholder="Enter your Email"
                />
                <div className="input-group-button">Get it Now</div>
              </div>
            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img src="./images/hero1.jpg" alt="img1" className="img-fluid" />
              <img
                src="./images/hero4.jpg"
                alt="img4"
                className="img-fluid main-hero-img-2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
