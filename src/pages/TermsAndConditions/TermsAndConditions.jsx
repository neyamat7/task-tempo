import CookieSection from "./Cookies";
import PrivacySection from "./PrivacySection";
import RefundSection from "./RefundSection";
import TermsBanner from "./TermsBanner";
import TermsSection from "./TermsSection";

const TermsAndConditions = () => {
  return (
    <>
      <TermsBanner />
      <TermsSection />
      <PrivacySection />
      <CookieSection />
      <RefundSection />
    </>
  );
};

export default TermsAndConditions;
