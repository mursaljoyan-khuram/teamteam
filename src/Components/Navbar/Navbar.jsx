import "./Navbar.css";

function App() {
  return (
    <div className="app">

      <header className="navbar">

       
        <div className="logo">
          <img
            src="https://netlinks.af/_astro/logo.DUySRYvR_2j5iRN.avif"
            alt="NETLINKS"
          />
        </div>

        
        <nav className="menu">

          <div className="menuItem">
            <span>Solutions</span>
          
          </div>

          <div className="menuItem">
            <span>Services</span>
            
          </div>

          <div className="menuItem">
            <span>Industries</span>
           
          </div>

          <div className="menuItem">
            <span>Company</span>
            
          </div>

        </nav>

       
        <button className="startBtn">
          Get started 
        </button>

      </header>

     
    </div>
  );
}

export default App;