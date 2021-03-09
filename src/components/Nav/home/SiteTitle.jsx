import HomeLinkContainer from "./HomeLinkContainer";
import PageSubtitle from "./PageSubtitle";
import WebSiteSVGIcon from "../../svg/WebSiteSVGIcon";

export default function SiteTitle() {
  return (
    <div className="grid place-items-center w-3/4">
      <HomeLinkContainer>
        <WebSiteSVGIcon styles="m-auto w-48" />
      </HomeLinkContainer>
      <PageSubtitle />
    </div>
  );
}