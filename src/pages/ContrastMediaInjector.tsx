import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Download, CheckCircle2 } from "lucide-react";
import injectorSingle from "@/assets/injector-single.jpg";
import injectorDual from "@/assets/injector-dual.jpg";
import injectorAngio from "@/assets/injector-angio.jpg";
import injectorMri from "@/assets/injector-mri.jpg";

const models = [
  {
    id: "single",
    name: "Radping Zenith S – CT Single Head Pressure Injector",
    image: injectorSingle,
    description:
      "Zenith CT injector is controlled by a computer system. It takes advantage of specialized syringes and other accessories, so the cost of injection is very low. The delivery rate and volume satisfy all the criteria required by enhanced CT scan.",
    features: [
      "Delivery rate range: 0.1 ml/s to 9.9 ml/s satisfies all requirements for enhanced CT scan",
      "One to four phase injections meet a variety of CT injection needs",
      "Large-size disposable syringe meets various volume requirements",
      "Highest pressure limit increases process safety",
      "Relay input/output interface connects to different CT scan facilities safely",
      "Small diameter pipe tube reduces contrast agent waste",
      "Long-distance control box for monitoring from control or scanning room",
    ],
    specs: [
      ["Flow Rate", "0.1 to 9.9 ml/sec in 0.1 ml/sec increments"],
      ["Syringe Capacity", "Zenith S – 200 ml"],
      ["Volume", "1 ml to syringe capacity in 0.1 ml increments"],
      ["Preset Limit", "50 psi default, user settable 100 to 300 psi"],
      ["Injection/Scan Delay", "0 to 99 seconds in 1 sec increments"],
    ],
  },
  {
    id: "dual",
    name: "Radping Zenith D – CT Dual Head Pressure Injector",
    image: injectorDual,
    description:
      "Zenith Dual Syringe CT Injector can match all the demands of contrast-enhanced scan for Multislice-CT (MS-CT) including the most advanced clinical applications.",
    features: [
      "Large color touch-screen for intuitive operation and injection planning",
      "Clear and intelligible operation screen",
      "Flexible injection design: from simple 1-phase single syringe to complex 6-phase dual syringe",
      "Elaborate assistant tray for fluid bottles and connector tubing",
    ],
    specs: [
      ["Flow Rate", "0.1 to 10 ml/sec in 0.1 ml/sec increments"],
      ["Syringe Capacity", "Zenith D – 200 ml"],
      ["Volume", "1 ml to syringe capacity in 0.1 ml increments"],
      ["Preset Limit", "325 psi default, user settable 100 to 300 psi"],
      ["Injection/Scan Delay", "0 to 600 seconds in 1 sec increments"],
    ],
  },
  {
    id: "angio",
    name: "Radping Zenith Cardio – Angio Pressure Injector",
    image: injectorAngio,
    description:
      "Designed for cardiac catheterization and angiography procedures, the Zenith Cardio Angio injector delivers precise contrast media injection with high pressure capability for demanding vascular imaging.",
    features: [
      "Large color touch-screen for intuitive operation",
      "Clear and perspicuous operate screen",
      "Multiple, safe and reliable ports for different imaging equipment",
      "High pressure capability up to 1200 psi for angiography",
    ],
    specs: [
      ["Flow Rate", "0.1 to 50 ml/sec in 0.1 ml/sec increments"],
      ["Volume", "0.1 ml to max syringe capacity in 0.1 ml increments"],
      ["Syringe Capacity", "150 ml"],
      ["Pressure Limit", "Settable 300–1200 psi in 1 psi increments"],
    ],
  },
  {
    id: "mri",
    name: "Radping Zenith MR – MRI Pressure Injector",
    image: injectorMri,
    description:
      "Radping Zenith MR Injector with non-magnetic structure can meet all your needs in CE-MR imaging. Compatible with magnetic force up to 3T MR imaging systems. Delivers saline after contrast medium injection to enhance imaging quality.",
    features: [
      "Excellent performance with 8 Amp hour battery for longer scan times",
      "Independent KVO procedure to prevent blood coagulation",
      "On-screen tutorial for simplified set-up",
      "Flexible power management with integrated continuous battery charger",
      "Mobile configuration available for MR trailers",
      "Multi-phase injection control",
      "Non-magnetic structure for MR safety",
    ],
    specs: [
      ["Flow Rate", "0.1 to 10 ml/sec in 0.1 ml/sec increments"],
      ["Syringe Capacity", "65 ml"],
      ["Volume", "0.1 ml to syringe capacity in 0.1 ml increments"],
      ["Pressure Limit", "300 psi factory set"],
      ["Scan Delay", "0 to 1000 seconds in 0.1 sec increments"],
    ],
  },
];

const ContrastMediaInjector = () => (
  <Layout>
    <section className="gradient-bg py-16">
      <div className="container">
        <Link
          to="/products"
          className="inline-flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground text-sm mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-primary-foreground">
          Contrast Media Injector
        </h1>
        <p className="text-primary-foreground/80 mt-2 max-w-2xl">
          Zenith CT injector is made for the injection of contrast agent in enhanced imaging of CT scan, MRI and DSA angiography systems. One of the national standard Contrast Media Injectors.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container space-y-16">
        {models.map((model, i) => (
          <div
            key={model.id}
            className={`grid lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
          >
            <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="bg-muted rounded-xl overflow-hidden border border-border">
                <img
                  src={model.image}
                  alt={model.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain p-4"
                />
              </div>
            </div>
            <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <h2 className="text-xl md:text-2xl font-heading font-bold mb-3 text-foreground">
                {model.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {model.description}
              </p>

              <h3 className="font-heading font-bold text-lg mb-3">Key Features</h3>
              <ul className="space-y-2 mb-6">
                {model.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <h3 className="font-heading font-bold text-lg mb-3">Specifications</h3>
              <div className="border border-border rounded-lg overflow-hidden mb-6">
                {model.specs.map(([k, v]) => (
                  <div key={k} className="flex border-b border-border last:border-0">
                    <div className="w-1/3 p-3 bg-muted font-heading font-semibold text-sm">{k}</div>
                    <div className="w-2/3 p-3 text-muted-foreground text-sm">{v}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="gradient-bg text-primary-foreground border-0 font-heading font-semibold hover:opacity-90">
                  <FileText className="w-4 h-4 mr-2" /> Request Quote
                </Button>
                <Button variant="outline" className="font-heading text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                  <Download className="w-4 h-4 mr-2" /> Download Brochure
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default ContrastMediaInjector;
