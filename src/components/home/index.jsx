import "./style.css";
import Strawberry from "../../assets/Strawberry.png"
import cheff from "../../assets/header-img.png"
import orange from "../../assets/eating-backgrounds-white-orange-object-removebg-preview.png"

const HomePage = () => {
  return (
    <>
      <section className="home-page">
        <div className="content-home-page">
          <div className="text-home-page">
            <div className="link-home-page">
                <a  href="/">More than Faster</a>
                <img src={Strawberry} style={{width:"40px"}} alt="" />
            </div>
            
            <h1>
              Groveries <br />
              delivered in as <br />little as  <span>2 hours</span>
            </h1>
            <p>
              Grover atssures fresh grocery every morning to your <br />
              family without getting out in this pandecim
            </p>
            <div className="btn-home-page">
              <button>Order New</button>
              <i className="bi bi-caret-right-fill"></i>
              <h3>Order Process</h3>
            </div>
          </div>
          <div className="img-home-page">
            <div className="img-cheff">
              <div className="fresh-orange">
                  <img src={orange} style={{width:"150px"}} alt="" />
                  <h1>49.99$ <br /> <span className="free">Free shopping</span></h1>
                  <i className="bi bi-cart-plus"></i>
              </div>
                <img src={cheff} style={{width:"600px"}} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
