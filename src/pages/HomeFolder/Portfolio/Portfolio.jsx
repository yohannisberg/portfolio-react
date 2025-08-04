import './Portfolio.css';
import ProjectCard from './ProjectCard';


const Portfolio = () => {

  return (
    <section className="portfolio-comp portfolio-wrapper">

      <div className="max-1280">
        <div className="header-wrap text-center">
          <h2 className="section-heading">Portfolio</h2>
        </div>
      </div>

      <ProjectCard />
      
      <div className="port-flex-wrapper portfolio-container">
        <div className="flex-wrap1">

          <div className="col-lg-6 col-sm-6 portfolio-item">
            <div href="#" className="portfolio-link">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"></div>
              </div>
              <img src="../../public/sandovalNew500.jpg" className="img-responsive img-border-shadow" alt="" />
            </div>
            
            <div className="portfolio-caption">
              <h4>Sandoval Design & Marketing</h4>
              <div className="type-of-site">
                <i>Official website for agency</i>
              </div>

              <div className="accordion-flip button-container button-flip3d-vertical1">
                <div className="toggle-flip flipper flipper-flip3d-vertical1">
                  <div className="button button-3d front">Info</div>
                  <div className="button button-3d back">Close</div>
                </div>
              </div>
                
              <div className="panel">
                <div className="portfolio-item-inner">
                  <div className='portfolioLinksWrapper'>
                    <div className='portfolioLinks comingSoon'>Still in the works</div>
                  </div>
                  <div className='displayDescription'>
                    <p className="text-muted">Created while at Sandoval Design & Marketing</p>
                    <a href="http://sandovaldesign.com/" target="_blank" className="">
                      <img src="../../public/sandovalLogo.png" alt="" />
                    </a>
                    <p className="text-muted">I developed the entire fully responsive website</p>
                    <p className="text-muted"><b>Technologies:</b> PHP, Wordpress, Gravity Forms, Git, Gulp, SASS & HTML</p>
                    <p className="text-muted"><b>Functionality: </b>User can find information regarding the agency and contact the team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

                <div className="col-lg-6 col-sm-6 portfolio-item">

                        <div href="#" className="portfolio-link">
                            <a href="http://golfssacredjourney.online/" target="_blank" className="portfolio-link">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                    </div>
                                </div>
                                <img src="../../public/golf500.jpg" className="img-responsive img-border-shadow" alt="" />
                            </a>
                        </div>
                        <div className="portfolio-caption">
                            <h4>Golf's Sacred Journey: The Sequel</h4>
                            <div className="type-of-site"><i>Official landing page for HarperCollins book</i></div>
                            <div className="accordion-flip button-container button-flip3d-vertical1">
                                <div className="toggle-flip flipper flipper-flip3d-vertical1">
                                <div className="button button-3d front">
                                Info
                                </div>
                                <div className="button button-3d back">
                                Close
                                </div>
                                </div>
                            </div>
                        <div className="panel">
                        <div className="portfolio-item-inner">
                            <div className='portfolioLinksWrapper'>
                                <div className='portfolioLinks'><a href='http://golfssacredjourney.online/' target="_blank">Live site</a></div>
                                <div className='portfolioLinks comingSoon'>Video Tour Coming Soon!</div>
                            </div>
                            <div className='displayDescription'>
                                <p className="text-muted">Created while at Sandoval Design & Marketing</p>
                                <a href="http://sandovaldesign.com/" target="_blank" className="">
                                    <img src="../../public/sandovalLogo.png" alt="" />
                                </a>
                                <p className="text-muted">I developed the entire fully responsive landing page in one day</p>
                                <p className="text-muted"><b>Technologies:</b> PHP, Wordpress, Gulp, SASS & HTML</p>
                                <p className="text-muted"><b>Functionality: </b>User can find information regarding the book</p>
                            </div>
                        </div>
                      </div>
                    </div> 
                </div>

                <div className="col-lg-6 col-sm-6 portfolio-item">

                    <a href="http://wescompany.com/" target="_blank" className="portfolio-link">
                            <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                            </div>
                            </div>
                        <img src="../../public/wesco500two.jpg" className="img-responsive img-border-shadow" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>WEScompany</h4>
                        <div className="type-of-site"><i>Official website for electrical company</i></div>
                        <div className="accordion-flip button-container button-flip3d-vertical1">
                            <div className="toggle-flip flipper flipper-flip3d-vertical1">
                            <div className="button button-3d front">
                            Info
                            </div>
                            <div className="button button-3d back">
                            Close
                            </div>
                            </div>
                        </div>
                    <div className="panel">
                    <div className="portfolio-item-inner">
                        <div className='portfolioLinksWrapper'>
                            <div className='portfolioLinks'><a href='http://wescompany.com/' target="_blank">Live site</a></div>
                            <div className='portfolioLinks comingSoon'>Video Tour Coming Soon!</div>
                        </div>
                        <div className='displayDescription'>
                            <p className="text-muted">Created while at Sandoval Design & Marketing</p>
                            <a href="http://sandovaldesign.com/" target="_blank" className="">
                                <img src="../../public/sandovalLogo.png" alt="" />
                            </a>
                            <p className="text-muted">I developed the entire fully responsive website</p>
                            <p className="text-muted"><b>Technologies:</b> PHP, Wordpress, Gravity Forms, Gulp, SASS & HTML</p>
                            <p className="text-muted"><b>Functionality: </b>User can find information regarding WEScompany and contact their team</p>
                        </div>
                    </div>
                  </div>
                </div> 
            </div>

                <div className="col-lg-6 col-sm-6 portfolio-item">
                    <a href="http://fhl.movie/" target="_blank" className="portfolio-link">
                            <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                            </div>
                            </div>
                        <img src="../../public/fhl500.jpg" className="img-responsive img-border-shadow" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Faith, Hope & Love</h4>
                        <div className="type-of-site"><i>Official website for film</i></div>
                        <div className="accordion-flip button-container button-flip3d-vertical1">
                            <div className="toggle-flip flipper flipper-flip3d-vertical1">
                            <div className="button button-3d front">
                            Info
                            </div>
                            <div className="button button-3d back">
                            Close
                            </div>
                            </div>
                        </div>
                    <div className="panel">
                    <div className="portfolio-item-inner">
                        <div className='portfolioLinksWrapper'>
                            <div className='portfolioLinks'><a href='http://fhl.movie/' target="_blank">Live site</a></div>
                            <div className='portfolioLinks comingSoon'>Video Tour Coming Soon</div>
                        </div>
                        <div className='displayDescription'>
                            <p className="text-muted">Created while at Sandoval Design & Marketing</p>
                            <a href="http://sandovaldesign.com/" target="_blank" className="">
                                <img src="../../public/sandovalLogo.png" alt="" />
                            </a>
                            <p className="text-muted">I developed the entire fully responsive website in less than one week</p>
                            <p className="text-muted"><b>Technologies:</b> PHP, Wordpress, Gravity Forms, Git, Gulp, SASS & HTML</p>
                            <p className="text-muted"><b>Functionality: </b>User can find information regarding the film and contact the film's production company for further information</p>
                            <img src="../../public/fhlExtra300.jpg" className="champ" />
                            <p className="text-muted"><b>*I'm also an extra in this movie and can be seen in the home page's video <i className="em em-sunglasses"></i> </b></p>
                        </div>
                    </div>
                  </div>
                </div> 
            </div>

                <div className="col-lg-6 col-sm-6 portfolio-item">

                    <a href="http://gccollective.online/" target="_blank" className="portfolio-link">
                            <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                            </div>
                            </div>
                        <img src="../../public/gcc500.jpg" className="img-responsive img-border-shadow" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Great Commission Collective</h4>
                        <div className="type-of-site"><i>Official website for church collective</i></div>
                        <div className="accordion-flip button-container button-flip3d-vertical1">
                            <div className="toggle-flip flipper flipper-flip3d-vertical1">
                            <div className="button button-3d front">
                            Info
                            </div>
                            <div className="button button-3d back">
                            Close
                            </div>
                            </div>
                        </div>
                    <div className="panel">
                    <div className="portfolio-item-inner">
                        <div className='portfolioLinksWrapper'>
                            <div className='portfolioLinks'><a href='http://gccollective.online/' target="_blank">Live site</a></div>
                            <div className='portfolioLinks comingSoon'>Video Tour Coming Soon</div>
                        </div>
                        <div className='displayDescription'>
                            <p className="text-muted">Created while at Sandoval Design & Marketing</p>
                            <a href="http://sandovaldesign.com/" target="_blank" className="">
                                <img src="../../public/sandovalLogo.png" alt="" />
                            </a>
                            <p className="text-muted">I developed the entire fully responsive website in less than two weeks</p>
                            <p className="text-muted"><b>Technologies:</b> PHP, Wordpress, Gravity Forms, Git, Gulp, SASS & HTML</p>
                            <p className="text-muted"><b>Functionality: </b>User can find information regarding GCC and contact their team</p>

                            <img src="../../public/gccConf.jpg" className="champ" />
                            <p className="text-muted"><b>*This website was launched at a GCC conference in Scottsdale, AZ</b></p>
                        </div>
                    </div>
                  </div>
                </div> 
            </div>

                <div className="col-lg-6 col-sm-6 portfolio-item">
                    <a href="http://qualityflix.com/films/" target="_blank" className="portfolio-link">
                            <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                            </div>
                            </div>
                        <img src="../../public/qualityFlix500.jpg" className="img-responsive img-border-shadow" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Pure Flix / Quality Flix</h4>
                        <div className="type-of-site"><i>Official page for film company</i></div>
                        <div className="accordion-flip button-container button-flip3d-vertical1">
                            <div className="toggle-flip flipper flipper-flip3d-vertical1">
                            <div className="button button-3d front">
                            Info
                            </div>
                            <div className="button button-3d back">
                            Close
                            </div>
                            </div>
                        </div>
                    <div className="panel">
                    <div className="portfolio-item-inner">
                        <div className='portfolioLinksWrapper'>
                            <div className='portfolioLinks'><a href='http://qualityflix.com/films/' target="_blank">Live site</a></div>
                            <div className='portfolioLinks'><a href='https://www.youtube.com/watch?v=VxTAagihZjQ&feature=youtu.be' target="_blank">Video Tour</a></div>
                        </div>
                        <div className='displayDescription'>
                            <p className="text-muted">Created while at Sandoval Design & Marketing</p>
                            <a href="http://sandovaldesign.com/" target="_blank" className="">
                                <img src="../../public/sandovalLogo.png" alt="" />
                            </a>
                            <p className="text-muted">I developed the Films and TV Series pages for Quality Flix's official website</p>
                            <p className="text-muted"><b>Technologies:</b> PHP, Wordpress, Gulp, SASS & HTML</p>
                            <p className="text-muted"><b>Functionality: </b>User can find information regarding the independent film company Quality Flix</p>
                        </div>
                    </div>
                  </div>
                </div> 
            </div>

            <div className="col-lg-6 col-sm-6 portfolio-item">
                    <a href="http://sandovaldesign.com/portfolio/lovell-fairchild" target="_blank" className="portfolio-link">
                            <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                            </div>
                            </div>
                        <img src="../../public/sandoval500.jpg" className="img-responsive img-border-shadow" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Sandoval Design & Marketing</h4>
                        <div className="type-of-site"><i>Official page for agency</i></div>
                        <div className="accordion-flip button-container button-flip3d-vertical1">
                            <div className="toggle-flip flipper flipper-flip3d-vertical1">
                            <div className="button button-3d front">
                            Info
                            </div>
                            <div className="button button-3d back">
                            Close
                            </div>
                            </div>
                        </div>
                    <div className="panel">
                    <div className="portfolio-item-inner">

                        <div className='portfolioLinksWrapper'>
                          <div className='portfolioLinks'><a href='http://sandovaldesign.com/portfolio/lovell-fairchild' target="_blank">Live site</a></div>
                          <div className='portfolioLinks'><a href='https://www.youtube.com/watch?v=9YQ-wBq0RAo' target="_blank">Video Tour</a></div>
                        </div>
                        <div className='displayDescription'>
                        <p className="text-muted">Created while at Sandoval Design & Marketing</p>
                            <a href="http://sandovaldesign.com/" target="_blank" className="">
                                <img src="../../public/sandovalLogo.png" alt="" />
                            </a>

                        <p className="text-muted">I worked with Sandoval's design team to create a page that displayed their work creatively and comprehensively</p>

                        <p className="text-muted"><b>Technologies:</b> PHP, ScrollReveal.js, Slick Slider, Git, Gulp, CSS & HTML</p>

                        <p className="text-muted"><b>Functionality: </b>User can read about Sandoval's client and the website created for them, the slider's hover functionality was customly built for this page</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>

            <div className="col-lg-6 col-sm-6 portfolio-item">
                    <a href="http://17elements.com/" target="_blank" className="portfolio-link">
                            <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                            </div>
                            </div>
                        <img src="../../public/17elements500.jpg" className="img-responsive img-border-shadow" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>17 Elements</h4>
                        <div className="type-of-site"><i>Official landing page for consulting company</i></div>
                        <div className="accordion-flip button-container button-flip3d-vertical1">
                            <div className="toggle-flip flipper flipper-flip3d-vertical1">
                            <div className="button button-3d front">
                            Info
                            </div>
                            <div className="button button-3d back">
                            Close
                            </div>
                            </div>
                        </div>
                        <div className="panel">
                        <div className="portfolio-item-inner">

                        <div className='portfolioLinksWrapper'>
                          <div className='portfolioLinks'><a href='http://17elements.com/' target="_blank">Live site</a></div>
                          <div className='portfolioLinks'><a href='https://www.youtube.com/watch?v=nTNNX86ZKUg' target="_blank">Video Tour</a></div>
                        </div>
                        <div className='displayDescription'>
                        <p className="text-muted">Created while at Sandoval Design & Marketing</p>
                            <a href="http://sandovaldesign.com/" target="_blank" className="">
                                <img src="../../public/sandovalLogo.png" alt="" />
                            </a>

                        <p className="text-muted">I developed the official fully-responsive website for 17 Elements</p>

                        <p className="text-muted"><b>Technologies:</b> ScrollReveal.js, Git, Gulp, CSS & HTML</p>

                        <p className="text-muted"><b>Functionality: </b>User can read about and contact the company</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>

                <div className="col-lg-6 col-sm-6 portfolio-item">
                    <a href="http://www.vimeoclone.com/#!/" target="_blank" className="portfolio-link">
                            <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                            </div>
                        </div>
                        <img src="../../public/vimeo500.jpg" className="img-responsive img-border-shadow" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Vimeo.com (Partial Clone)</h4>
                        <div className="type-of-site"><i>Student project (Group)</i></div>
                        <div className="accordion-flip button-container button-flip3d-vertical1">
                            <div className="toggle-flip flipper flipper-flip3d-vertical1">
                            <div className="button button-3d front">
                            Info
                            </div>
                            <div className="button button-3d back">
                            Close
                            </div>
                            </div>
                        </div>
                    <div className="panel">
                    <div className="portfolio-item-inner">

                        <div className='portfolioLinksWrapper'>
                          <div className='portfolioLinks'><a href='http://vimeoclone.jdagostino.com/#!/' target="_blank">Live site</a></div>
                          <div className='portfolioLinks'><a href='https://github.com/DM21-Project/DM21-Group' target="_blank">GitHub</a></div>
                          <div className='portfolioLinks'><a href='https://www.youtube.com/watch?v=YLsPgNy84p4' target="_blank">Video Tour</a></div>
                        </div>
                        <p className="text-muted">Created while studying at DevMountain</p>
                            <a href="http://devmountain.com/" target="_blank" className="">
                                <img className="devMtnLogo" src="../../public/devMtn.png" alt="" />
                            </a>

                        <p className="text-muted">I designed the back-end endpoints and the front-end state management</p>

                        <p className="text-muted"><b>Technologies:</b> AngularJS, PostgreSQL, Node.js, Express.js, Git, Gulp, CSS & HTML</p>

                        <p className="text-muted"><b>Functionality: </b>User can sign in to their Vimeo account, upload/search videos, and post comments (comments posted through our clone will post on real Vimeo website)</p>
                </div>
            </div>
        </div>
    </div>

                    <div className="col-lg-6 col-sm-6 portfolio-item">
                    <a href="http://familyvideo.jdagostino.com/#!/" className="portfolio-link" target="_blank">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                            </div>
                        </div>
                        <img src="../../public/famVid500.jpg" className="img-responsive img-border-shadow" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>FamilyVideo.com (Partial Clone)</h4>
                        <div className="type-of-site"><i>Student project (Personal)</i></div>
                        <div className="accordion-flip button-container button-flip3d-vertical1">
                            <div className="toggle-flip flipper flipper-flip3d-vertical1">
                            <div className="button button-3d front">
                            Info
                            </div>
                            <div className="button button-3d back">
                            Close
                            </div>
                            </div>
                        </div>
                    <div className="panel">
                    <div className="portfolio-item-inner">

                        <div className='portfolioLinksWrapper'>
                          <div className='portfolioLinks'><a href='http://familyvideo.jdagostino.com/#!/' target="_blank">Live site</a></div>
                          <div className='portfolioLinks'><a href='https://github.com/yohannisberg/personal-project-family-video' target="_blank">GitHub</a></div>
                          <div className='portfolioLinks'><a href='https://www.youtube.com/watch?v=Dg6Btqb-wHw&feature=youtu.be' target="_blank">Video Tour</a></div>
                        </div>

                        <p className="text-muted">Created while studying at DevMountain</p>
                            <a href="http://devmountain.com/" target="_blank" className="">
                                <img className="devMtnLogo" src="../../public/devMtn.png" alt="" />
                            </a>

                        <p className="text-muted">For the accounts/shopping cart functionality, I created database tables utilizing a foreign key</p>

                        <p className="text-muted"><b>Technologies:</b> AngularJS, PostgreSQL, Git, Gulp, Node.js, Express.js, CSS & HTML</p>

                        <p className="text-muted"><b>Functionality:</b> User can create an account, sign in, search (items provided by Movie Database API), add/delete items from shopping cart, and empty shopping cart by going through a check out process</p>

                        <img src="../../public/champ.jpg" className="champ" />
                        <p className="text-muted"><b>*Voted "Best Presentation"​ by DevMountain's staff</b></p>
                    </div>
                </div>
            </div>
        </div>

            
        </div>
      </div>
    </section>
  )
};

export default Portfolio;