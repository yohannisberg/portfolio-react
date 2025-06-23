
const Navbar = () => {
  return (
    <nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top">
      <div className="container">
        <div className="navbar-header page-scroll">
          <button
            type="button"
            className="noggleTest"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span> <i className="fa fa-bars"></i>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">John D'Agostino</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a className="page-scroll" href="#about">Skills</a></li>
            <li><a className="page-scroll" href="#services">Likes</a></li>
            <li><a className="page-scroll" href="#portfolio">Portfolio</a></li>
            <li><a className="page-scroll" href="#team">About</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
