import "./style.css";
import Strawberry from "../../assets/Strawberry.png"
import cheff from "../../assets/chef.png"

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
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
