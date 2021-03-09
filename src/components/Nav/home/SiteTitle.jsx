import HomeLinkContainer from "./HomeLinkContainer";
import PageSubtitle from "./PageSubtitle";
import WebSiteSVGIcon from "../../svg/WebSiteSVGIcon";

export default function SiteTitle() {
  return (
    <div className="grid place-items-center bg-red-400">
      <HomeLinkContainer>
        <WebSiteSVGIcon styles="m-auto w-48" />
      </HomeLinkContainer>
      <PageSubtitle />
    </div>
  );
}

