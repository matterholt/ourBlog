import{useState,useEffect}from 'react'
import DesktopContainer from './DesktopContainer'
import MobileContainer from './MobileContainer'

export default function Nav() {
  const [screenWidth, setScreenWidth] = useState(undefined)
  const mobileBreak = 768;

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

  if (screenWidth === undefined) {
    return null
  } else if (screenWidth >= mobileBreak) {
    return <DesktopContainer />
  } else {
    return <MobileContainer />
  }


}


