import './Skills.css'


const Skills = () => {
  return (
    <>
      <section id="about" className="skills-wrapper bg-white">
        <div className="container">
          <div className="">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading">Skills</h2>
            </div>

            <div className= "langIconWrapper">
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/React-icon.png" alt="React Logo"/>
                </div>
                <div className="iconSub">React</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/javascript.svg" alt="JavaScript Logo" />
                </div>
                <div className="iconSub">JavaScript</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/html5-color.svg" alt="HTML5 Logo" />
                </div>
                <div className="iconSub">HTML5</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/css3-color.svg" alt="CSS3 Logo" />
                </div>
                <div className="iconSub">CSS3</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80 showcase-inner" src="../../public/angular-color.svg" alt="AngularJS Logo" />
                </div>
                <div className="iconSub">AngularJS</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/Npm-logo.svg" alt="NPM Logo" />
                </div>
                <div className="iconSub">NPM</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/nodejs.svg" alt="Node.JS Logo" />
                </div>
                <div className="iconSub">Node.JS</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/git.svg" alt="Git Logo" />
                </div>
                <div className="iconSub">Git</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/Postgres.svg" alt="SQL Logo" />
                </div>
                <div className="iconSub">SQL</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/express.png" alt="Express.JS Logo" />
                </div>
                <div className="iconSub">Express.JS</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon35" src="../../public/gulp.svg" alt="Gulp Logo" />
                </div>
                <div className="iconSub">Gulp</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/PHP-logo.svg" alt="PHP Logo" />
                </div>
                <div className="iconSub">PHP</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/jquery-icon.png" alt="jQuery Logo" />
                </div>
                <div className="iconSub">jQuery</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/Wordpress.svg" alt="AngularJS Logo" />
                </div>
                <div className="iconSub">Wordpress</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/sass2.png" alt="Sass Logo" />
                </div>
                <div className="iconSub">Sass</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/Boostrap_logo.svg" alt="Bootstrap Logo" />
                </div>
                <div className="iconSub">Bootstrap</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/pscs6.png" alt="Photoshop Logo" />
                </div>
                <div className="iconSub">Adobe Photoshop</div>
              </div>
              <div className="langIconWrap">
                <div className='imgWrapper'>
                <img className="langIcon80" src="../../public/coding.png" alt="Brackets" />
                </div>
                <div className="iconSub">(More to come!)</div>
              </div>

            </div>
                
          </div>
        </div>
      </section>

      <div className="" data-parallax="scroll" data-image-src="../../public/background1.JPG"></div>
    </>
  )
};

export default Skills;