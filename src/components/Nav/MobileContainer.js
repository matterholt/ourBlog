import {useState} from 'react'
import HomeLinkContainer from "./HomeLinkContainer";
import LinkContainer from "./LinkContainer";
import SiteName from "../svg/SiteName";
import PageSubtitle from "../general/PageSubtitle";




const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    if (!isOpen) {
            return(
                <div onClick={() => setIsOpen(!isOpen)} className="p-2 bg_custom-dark text-white rounded-sm ">
              <p>MENU</p>
            </div>)
    } else {
        return (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border-gray-100 border-2 text-gray-400 rounded-sm "
          >
                <p>CLOSE</p>
                <LinkContainer/>
          </div>
        );
        }
}

export default function MobileContainer() {
    return (
      <div className="m-5 flex flex-row justify-between items-center">
        <HomeLinkContainer styleAttribute={"bg-white"}>
          <SiteName styles="m-auto" />
          <PageSubtitle />
        </HomeLinkContainer>
        <Menu />
      </div>
    );
}