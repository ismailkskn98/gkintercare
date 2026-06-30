import ContactIntro from "./contactIntro";
import ContactSection from "./contactSection";

export default function ContactContent({ content }) {
  const { contactPage, contact } = content;

  return (
    <>
      <ContactIntro hero={contactPage.hero} />
      <ContactSection contact={contact} contactPage={contactPage} />
    </>
  );
}
