import PanelLogin from "../../components/panel-login";
export default function EmployersPage() {
  return <PanelLogin type="Employer" arabic="صاحب عمل" title="Build the team that moves you forward." description="Connect with exceptional people across the Gulf, without the noise." bullets={["Reach high-intent talent", "Build your employer story", "Hire with confidence"]} translations={{ type: "صاحب عمل", title: "كوّن الفريق الذي يدفعك إلى الأمام.", description: "تواصل مع المواهب الاستثنائية في الخليج، بعيداً عن الضجيج.", bullets: ["الوصول إلى المواهب الجادة", "ابنِ قصة شركتك", "وظّف بثقة"] }} />;
}
