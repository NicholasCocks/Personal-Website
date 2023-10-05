import Image from 'next/image'

export default function Home() {

  // this will be the recreation of nicholascocks.github.io
  // TODO: Replace <img /> tags with Next.js Images
  return (
    <main>
    <h1 id="logo">Nicholas Cocks</h1>
    <ul className="icons">
      <li><a href="https://www.linkedin.com/in/nicholas-cocks/" target="_blank">LinkedIn</a></li>
      <li><a href="https://github.com/NicholasCocks" target="_blank">Github</a></li>
      <li><a href="mailto:nick@caveat.nyc" target="_blank">Email</a></li>
    </ul>

    <h3>About Myself</h3>
    <p>My name is Nicholas Cocks and Im a Full-Stack Engineer.</p>
    <p>My resume can be found here!</p>
    <p>I am a software Engineer with years of experience building out robust, beautiful, reliable and test-covered web pages and applications. 
    As detailed in my resume and below, I have proficiency in a diverse array of technologies. 
    Additionally, my adaptability from years of various engineering work, 
    combined with the eagerness to learn and collaborate, 
    I believe would make me a strong and affable contributer to any company.</p>
    <p>Iam a solar engineer, turned audio engineer turned software engineer. I just love building things!</p>
    <p>Lets connect!</p>
     
    <section id="two">
      <div class="container">
        <h3>Things I Can Do</h3>
        <ul class="feature-icons">


          <li class="htmlicon">
            <img src="images/logo-javascript.svg" class="htmllogo" />
            <p class="htmlptag">Javascript</p>
          </li>

          <li class="htmlicon">
            <img src="images/python-logo-only.svg" class="htmllogo" />
            <p class="htmlptag">Python</p>
          </li>

          <li class="htmlicon">
            <img src="images/react.svg" class="htmllogo" />
            <p class="htmlptag">React</p>
          </li>

          <li class="htmlicon">
            <img src="images/Vue.js_Logo_2.svg.png" class="htmllogo" />
            <p class="htmlptag">Vue.js</p>
          </li>

          <li class="htmlicon">
            <img src="images/rails-1.svg" class="htmllogo" />
            <p class="htmlptag">Ruby On Rails</p> 
          </li>
          
          <li class="htmlicon">
            <img src="images/nodejs-icon.svg" width="30" class="htmllogo" />
            <p class="htmlptag">Node</p>
          </li>

          <li class="htmlicon">
            <img src="images/Google-cloud-02.png" class="htmllogo" />
            <p class="htmlptag">Google Cloud Platform (GCP)</p>
          </li>

          <li class="htmlicon">
            <img src="images/128px-Figma-logo.svg.png" class="htmllogo" />
            <p class="htmlptag">Figma</p>
          </li>

          <li class="htmlicon">
            <img src="images/nextjs-icon-svgrepo-com.svg" class="htmllogo" />
            <p class="htmlptag">Next.js</p>
          </li>
          
          <li class="htmlicon">
            <img src="images/webpack-icon.svg" width="30" class="htmllogo" />
            <p class="htmlptag">Webpack</p>
          </li>

          <li class="htmlicon">
            <img src="images/aws-2.svg" width="30" class="htmllogo" />
            <p class="htmlptag">Amazon Web Services (AWS)</p>
          </li>

          <li class="htmlicon">
            <img src="images/postgresql.svg" width="30" class="htmllogo" />
            <p class="htmlptag">Postgresql</p>
          </li>
        </ul>
        <h4>Design Software Skills</h4>
        <ul class="feature-icons">

          <li class="htmlicon">
            <img src="images/indesign-cc.svg" class="htmllogo" />
            <p class="htmlptag">Adobe InDesign</p>
          </li> 

          <li class="htmlicon">
            <img src="images/lightroom-cc.svg" width="30" class="htmllogo" />
            <p class="htmlptag">Adobe Lightroom</p>
          </li>
        </ul>
      </div>
    </section>

    <section id="three">
    <h3>Projects</h3>
    <div class="features">
      <article>
        <a href="https://nicholascocks.github.io/Synthesthesia/" target="_blank" class="image"><img src="images/synthesthesia.gif" alt="" /></a>
        <div class="inner">
          <h4>Synthesthesia</h4>
          <p>A fun and meditative drawing app; this project required using quadratic equations to refine brush strokes, complex debouncing implementations to create a smooth musical tones, and some pretty complex Fast Fourier Transform (FFT) implementation to create the frequency displays. There's also an autumn themed brush!</p>
        </div>
      </article>
    </div>
    </section>
      
    </main>
  )
}
