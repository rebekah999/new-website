import ReactMarkdown from 'react-markdown'
import styles from './BackgroundArt.module.scss'
import Image from 'next/image'
import img from '@/public/img/new_headshot.png'

//If you want to change the code background, simply work with the code
// snippet below. If you're using a language other than javascript
// for the display, make sure to change the code language at the top.
const codeSnippet = `
\`\`\`javascript
const loader = new THREE.TextureLoader();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  70, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGL1Renderer({ antialias: true, });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

}
\`\`\`
`

export default function BackgroundArt() {
  return (
    <div className={styles.backgroundArt}>
      <ReactMarkdown className={styles.code}>{codeSnippet}</ReactMarkdown>
      <div className={styles.image}>
        <Image src={img} alt='background art' width={1920} height={1080} />
      </div>
      <svg
        width='302'
        height='256'
        viewBox='0 0 302 256'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13.9219 41.9773C53.2325 -20.8901 100.084 0.697903 182.754 25.2013C265.425 49.7047 293.734 38.1637 301.276 122.619C308.817 207.074 128.211 287.857 80.3513 242.415C32.4918 196.972 -25.3888 104.845 13.9219 41.9773Z'
          fill='none'
          fillOpacity='0.52'
        />
      </svg>
      <svg
        width='267'
        height='299'
        viewBox='0 0 267 299'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M126.228 1.18065C200.253 -3.06236 209.706 47.6499 237.476 129.281C265.247 210.912 291.025 227.348 226.454 282.303C161.883 337.259 -8.40907 236.535 1.0246 171.216C10.4583 105.897 52.2036 5.42366 126.228 1.18065Z'
          fill='none'
          fillOpacity='0.72'
        />
      </svg>
      <svg viewBox='0 0 478.9 448.2' width='0' height='0'>
        <clipPath
          id='blob2'
          clipPathUnits='objectBoundingBox'
          transform='scale(0.002088, 0.002231)'
        >
          <path
            d='M360.5,34.5c23.8,31,24,83,46.5,126.5s67.3,78.5,71.6,113.7c4.2,35.2-32,70.6-66.1,105.1s-66.2,68-101.5,68.4
            c-35.4,0.5-74.1-32.2-106.4-55.7c-32.4-23.5-58.4-37.9-99.1-55.8C64.8,318.8,9.3,297.5,1.1,266.9c-8.2-30.6,30.8-70.5,61.8-103.9
            c30.9-33.4,53.9-60.3,82.4-89.1C173.8,45,207.8,14.4,248.6,4C289.3-6.4,336.7,3.5,360.5,34.5z'
          />
        </clipPath>
      </svg>
    </div>
  )
}
