import PanelLogin from "../../components/panel-login";
export default function HunterPage() {
  return <PanelLogin type="Job hunter" arabic="باحث عن عمل" title="Find work that feels like you." description="A clearer path to meaningful opportunities across Saudi Arabia and the GCC." bullets={["Personalised opportunities", "Transparent salary ranges", "A community that gets it"]} translations={{ type: "باحث عن عمل", title: "اعثر على عمل يشبهك.", description: "طريق أوضح نحو فرص ذات معنى في السعودية ودول الخليج.", bullets: ["فرص مخصصة لك", "نطاقات رواتب واضحة", "مجتمع يفهمك"] }} />;
}
