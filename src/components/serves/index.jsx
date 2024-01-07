import "./style.css";
const ServerPage = () => {
  return (
    <>
      <div className="content-serves-page">
        <div className="serves-page">
          <div className="text-serves">
            <h4>What we Serve</h4>
            <h1>
              Fruit And Vegetable Delivered <br />
              To Your Home
            </h1>
          </div>
          <div className="cart-serves">
            <div className="cart">
                <i className="bi bi-cash-coin"></i>
                <div className="text-cart">
                  <h1>Return Money</h1>
                  <h5>Get your money back at any time</h5>
                </div>
            </div>
            <div className="cart">
               <i class="bi bi-fingerprint"></i>
                <div className="text-cart">
                  <h1>Higher security</h1>
                  <h5>Payment can be made by card</h5>
                </div>
            </div>
            <div className="cart">
                <i class="bi bi-shop"></i>
                <div className="text-cart">
                  <h1>Shop at any time</h1>
                  <h5>Shop at any time and from anywhere</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServerPage;
