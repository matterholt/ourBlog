import{useState,useEffect}from 'react'
import DesktopContainer from './DesktopContainer'

export default function Nav() {
  const [screenWidth, setScreenWidth] = useState(undefined)
  const mobileBreak = 300

  useEffect(() => {
    if (typeof window !== 'undefined'){
      function handleResize() {
        setScreenWidth(window.innerWidth)
      }
      window.addEventListener("resize", handleResize); 
      handleResize()
      return ()=> window.removeEventListener("resize",handleResize)
}
  }, [])
  
  return screenWidth > mobileBreak ?  <DesktopContainer/>:<h1>Mobile Nav</h1>

}


