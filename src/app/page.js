import Image from 'next/image'
import Link from 'next/link'
import SkillIcon from './components/skillIcon'
import { faGoogle, faReact, faJs, faVuejs, faPython, faNodeJs, faAws, faFigma,  } from "@fortawesome/free-brands-svg-icons";
import { faGem, faDatabase, } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (  
    <>
      <section id="one">
        <h3>About Myself</h3>
        <p className='mb-2'>My name is Nicholas Cocks and Im a Full-Stack Engineer.</p>
        <p className='mb-2'>You can find my resume <Link target="_blank" href="/images/Nicholas Cocks Full-Stack Developer Resume 2023.pdf">here!</Link></p>
        <p className='mb-2'>I am a software Engineer with years of experience building out robust, beautiful, reliable and test-covered web pages and applications. 
        As detailed in my resume and below, I have proficiency in a diverse array of technologies. 
        Additionally, my adaptability from years of various engineering work, 
        combined with the eagerness to learn and collaborate, 
        I believe would make me a strong and affable contributer to any company.</p>
        <p className='mb-4'>I am a solar engineer, turned audio engineer turned software engineer.<br/> I just love building things!</p>
        <p>Lets connect!</p>
      </section>
      <section id="two">
        <h3>Things I Can Do</h3>
          
        <ul class="feature-icons grid grid-cols-2 gap-4 my-4">
          {skillsRaw.map((skillObject, index) => {
            return (
              <SkillIcon 
                key={index} 
                skillObject={skillObject} />
            )
            })}
        </ul>
      </section>
      <section id="three">
        <h3>Projects</h3>
          <div>
            <a 
              href="https://nicholascocks.github.io/Synthesthesia/" 
              target="_blank" 
              class="image pr-8">
              Synthesthesia
            </a>
            <div className='md:flex gap-4'>
              <Image 
                src="/images/synthesthesia.gif" 
                width={300}
                height={100}
                alt=""
                className='' />   
              <p>A fun and meditative drawing app; this project required using quadratic equations to refine brush strokes, complex debouncing implementations to create a smooth musical tones, and some pretty complex Fast Fourier Transform (FFT) implementation to create the frequency displays. 
              Theres also an autumn themed brush!</p>
            </div>
          </div>
      </section>
    </>
  )
}

const skillsRaw = [
  {text: "Javascript", src: faJs, alt: "Javascript Logo Icon"}, // yes
  {text: "Python", src: faPython, alt: "Python Logo Icon"}, // yes
  {text: "React", src: faReact, alt: "React Logo Icon"}, // yes
  {text: "Vue", src: faVuejs, alt: ""}, // yes
  {text: "Ruby On Rails", src: faGem, alt: "Ruby on Rails Logo Icocn"},
  {text: "Node", src: faNodeJs, alt: "Node JS Icon"}, // yes
  {text: "Figma", src: faFigma, alt: "Figma Logo Icon"}, // yes
  {text: "Amazon Web Services (AWS)", src: faAws, alt: "Amazon Web Services Logo Icon"}, // yes
  {text: "Google Cloud Platform", src: faGoogle, alt: "Google Cloud Platform Logo Icon"}, // google
  {text: "SQL", src: faDatabase, alt: "database Icon"}, // database 
]

const rejects = [
  {text: "Next.js", src: "nextjs-icon-svgrepo-com.svg", alt: "Next JS Logo Icon"},
  {text: "Webpack", src: "webpack-icon.svg", alt: "Webpack Icon"},
]