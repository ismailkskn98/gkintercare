import CtaBanner from "../common/ctaBanner";
import StatsBar from "../common/statsBar";
import BeforeAfterGallery from "./beforeAfterGallery";
import BeforeAfterIntro from "./beforeAfterIntro";

const filterKeys = ["all", "face", "neck", "nose", "eyes", "breast", "body"];

function createStaticCases(beforeAfterPage) {
  return beforeAfterPage.cases.map((item, index) => ({
    ...item,
    id: `static-${index}`,
    categoryKey: filterKeys[index + 1] || "face",
    isStatic: true,
  }));
}

export default function BeforeAfterContent({ activeFilters = {}, cases = null, content }) {
  const { beforeAfterPage, ui } = content;
  const displayCases = Array.isArray(cases) ? cases : createStaticCases(beforeAfterPage);

  return (
    <>
      <BeforeAfterIntro hero={beforeAfterPage.hero} />
      <BeforeAfterGallery
        cases={displayCases}
        emptyText={beforeAfterPage.emptyText}
        emptyTitle={beforeAfterPage.emptyTitle}
        filters={beforeAfterPage.filters}
        initialFilters={activeFilters}
        labels={beforeAfterPage.labels}
      />
      <StatsBar className="pb-[clamp(1.5rem,7vw,3.5rem)]" decorated={false} stats={beforeAfterPage.stats} />
      <CtaBanner title={beforeAfterPage.cta.title} text={beforeAfterPage.cta.text} button={beforeAfterPage.cta.button} eyebrow={ui.ctaEyebrow} className="py-18 md:py-24" />
    </>
  );
}
