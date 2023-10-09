import Image from 'next/image'
import Link from 'next/link'
import SkillIcon from './components/skillIcon'

export default function Home() {
  return (
    <main>
      <div className='px-4'>
        <header class="container mx-auto">
          <h1 id="logo" >Nicholas Cocks</h1>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/nicholas-cocks/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/NicholasCocks" target="_blank">Github</a></li>
            <li><a href="mailto:nick@caveat.nyc" target="_blank">Email</a></li>
          </ul>
        </header>
        <section id="one" class="container mx-auto">
          <h3 className='text-lg'>About Myself</h3>
          <p>My name is Nicholas Cocks and Im a Full-Stack Engineer.</p>
          <p>My resume can be found <Link target="_blank" href="/images/Nicholas Cocks Full-Stack Developer Resume 2023.pdf">here!</Link></p>
          <p>I am a software Engineer with years of experience building out robust, beautiful, reliable and test-covered web pages and applications. 
          As detailed in my resume and below, I have proficiency in a diverse array of technologies. 
          Additionally, my adaptability from years of various engineering work, 
          combined with the eagerness to learn and collaborate, 
          I believe would make me a strong and affable contributer to any company.</p>
          <p>Iam a solar engineer, turned audio engineer turned software engineer. I just love building things!</p>
          <p>Lets connect!</p>
        </section>
        <section id="two" class="container mx-auto">
          <h3 className='text-lg'>Things I Can Do</h3>
            
          <ul class="feature-icons grid grid-cols-2 gap-4">
            {skillsRaw.map((skillObject, index) => {
              return (
                  <SkillIcon 
                    key={index} 
                    skillObject={skillObject} />
              )
              })}
          </ul>
        </section>

        <section id="three" class="container mx-auto">
          <h3 className='text-lg'>Projects</h3>
            <div class=" flex flex-direction-col mx-10">
              <a 
                href="https://nicholascocks.github.io/Synthesthesia/" 
                target="_blank" 
                class="image">
                Synthesthesia
              </a>
              <div className='flex items-center justify-center'>
                <Image 
                src="/images/synthesthesia.gif" 
                width={200}
                height={100}
                alt=""
                className='mr-8' />
                <p>A fun and meditative drawing app; this project required using quadratic equations to refine brush strokes, complex debouncing implementations to create a smooth musical tones, and some pretty complex Fast Fourier Transform (FFT) implementation to create the frequency displays. 
                Theres also an autumn themed brush!</p>
              </div>
            </div>
        </section>
      </div>
    </main>
  )
}

const skillsRaw = [
  {text: "Javascript", src: "logo-javascript.svg", alt: "Javascript Logo Icon"},
  {text: "Python", src: "python-logo-only.svg", alt: "Python Logo Icon"},
  {text: "React", src: "react.svg", alt: "React Logo Icon"},
  {text: "Vue", src: "Vue.js_Logo_2.svg.png", alt: ""},
  {text: "Ruby On Rails", src: "rails-1.svg", alt: "Ruby on Rails Logo Icocn"},
  {text: "Node", src: "nodejs-icon.svg", alt: "Node JS Icon"},
  {text: "Google Cloud Platform", src: "Google-cloud-02.png", alt: "Google Cloud Platform Logo Icon"},
  {text: "Figma", src: "128px-Figma-logo.svg.png", alt: "Figma Logo Icon"},
  {text: "Next.js", src: "nextjs-icon-svgrepo-com.svg", alt: "Next JS Logo Icon"},
  {text: "Webpack", src: "webpack-icon.svg", alt: "Webpack Icon"},
  {text: "Amazon Web Services (AWS)", src: "aws-2.svg", alt: "Amazon Web Services Logo Icon"},
  {text: "Postgresql", src: "postgresql.svg", alt: "Postgresql Logo Icon"},
]