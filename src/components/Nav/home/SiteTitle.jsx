import HomeLinkContainer from "./HomeLinkContainer";
import PageSubtitle from "./PageSubtitle";
import WebSiteSVGIcon from "../../svg/WebSiteSVGIcon";

export default function SiteTitle() {
  return (
    <div className=" w-3/4 grid items-center text-center px-2">
      <HomeLinkContainer>
        <WebSiteSVGIcon styles="m-auto w-48" />
      </HomeLinkContainer>
      <PageSubtitle />
    </div>
  );
}

