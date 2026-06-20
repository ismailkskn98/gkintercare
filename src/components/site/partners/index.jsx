import PartnerBenefits from "./partnerBenefits";
import PartnerClosingCta from "./partnerClosingCta";
import PartnerRequestSection from "./partnerRequestSection";
import PartnersIntro from "./partnersIntro";
import PartnershipModels from "./partnershipModels";

export default function PartnersContent({ content }) {
  const { partnersPage, contact } = content;

  return (
    <>
      <PartnersIntro hero={partnersPage.hero} />
      <PartnerRequestSection form={partnersPage.form} />
      <PartnershipModels models={partnersPage.models} />
      <PartnerBenefits benefits={partnersPage.benefits} />
      <PartnerClosingCta cta={partnersPage.cta} whatsappHref={contact.whatsappHref} />
    </>
  );
}
