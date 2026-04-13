import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { ArrowRight, ThumbsUp, Share2, Newspaper, PenLine } from "lucide-react";
import { Link } from "react-router-dom";
import blogFutureImaging from "@/assets/blog-future-imaging.jpg";
import blogDetail1 from "@/assets/blog-future-imaging-detail1.jpg";
import blogDetail2 from "@/assets/blog-future-imaging-detail2.jpg";

const Blog = () => (
  <Layout>
    <PageHero title="Blog & News" subtitle="Latest insights on medical equipment and healthcare technology" icon1={Newspaper} icon2={PenLine} />

    <section className="section-padding">
      <div className="container max-w-4xl">
        {/* Featured Article */}
        <article className="bg-card rounded-xl border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="h-72 overflow-hidden">
            <img src={blogFutureImaging} alt="The Future of Medical Imaging Technology" loading="lazy" width={640} height={512} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded">Technology</span>
              <span className="text-xs text-muted-foreground">Jan 10, 2026</span>
            </div>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              The Future of Medical Imaging Technology
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The landscape of medical imaging is evolving rapidly with breakthroughs in artificial intelligence, 3D imaging, and cloud-based diagnostics. AI-powered systems can now detect anomalies in X-rays, CT scans, and MRIs with remarkable accuracy, enabling faster and more precise diagnoses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cloud-based PACS solutions are transforming how hospitals store and share imaging data, allowing radiologists to access patient scans from anywhere in the world. This shift towards digital infrastructure is reducing costs and improving collaboration between healthcare professionals.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div>
                <img src={blogDetail1} alt="AI-powered diagnostics" loading="lazy" width={640} height={512} className="rounded-lg w-full h-48 object-cover mb-2" />
                <p className="text-xs text-muted-foreground text-center">AI-powered diagnostic imaging</p>
              </div>
              <div>
                <img src={blogDetail2} alt="Cloud-based imaging systems" loading="lazy" width={640} height={512} className="rounded-lg w-full h-48 object-cover mb-2" />
                <p className="text-xs text-muted-foreground text-center">Cloud-based imaging review</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Portable and point-of-care imaging devices are making diagnostics accessible even in remote and rural areas. Compact ultrasound machines, handheld X-ray systems, and mobile C-Arms bring hospital-grade imaging to the patient's bedside, ambulances, and field clinics.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Radping is at the forefront of these innovations, integrating smart software with our imaging equipment to deliver next-generation diagnostic solutions that are both affordable and accessible for healthcare facilities across India and developing international markets.
            </p>

            <div className="flex items-center justify-between border-t border-border pt-4">
              <div className="flex items-center gap-4">
                <button className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <ThumbsUp className="w-4 h-4" /> Like
                </button>
                <button className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
              <Link to="/contact" className="text-primary text-sm font-semibold font-heading inline-flex items-center gap-1 hover:gap-2 transition-all">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  </Layout>
);

export default Blog;
