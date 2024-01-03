import "./header.css"

function Header() {


    return (
      <>
        <section className="header">
            <div className="content-header">
                <div className="logo">
                    <h1>Grover</h1>
                </div>
                <div className="link-list">
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Service</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className="left-navbar">
                    <div className="search-int">
                       <div className="search">
                            <i className="bi bi-search"></i>
                            <input className="int" type="text" placeholder="Search" />
                       </div>
                       <p>2</p>
                        <i className="bi bi-basket2-fill"></i>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
  
  export default Header
  