import PanelLogin from "../../components/panel-login";
export default function InvestorsPage() {
  return <PanelLogin type="Investor" arabic="مُسْتَثْمِر" title="Invest in the future of work." description="Discover the founders, ideas, and opportunities shaping the GCC." bullets={["Curated opportunities", "Founder-first access", "A front-row seat to change"]} translations={{ type: "مُسْتَثْمِر", title: "استثمر في مستقبل العمل.", description: "اكتشف المؤسسين والأفكار والفرص التي تشكل مستقبل الخليج.", bullets: ["فرص منتقاة", "وصول مباشر إلى المؤسسين", "موقع متقدم لمتابعة التغيير"] }} />;
}
