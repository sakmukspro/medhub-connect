import { Link } from "react-router-dom";
import { ArrowRight, ThumbsUp, Share2 } from "lucide-react";
import blogFutureImaging from "@/assets/blog-future-imaging.jpg";
import blogDetail1 from "@/assets/blog-future-imaging-detail1.jpg";
import blogDetail2 from "@/assets/blog-future-imaging-detail2.jpg";

const BlogSection = () => (
  <section className="section-padding">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Latest News</span>
        <h2 className="section-title mt-2">From Our Blog</h2>
      </div>

      {/* Featured Blog Post */}
      <div className="bg-card rounded-xl border border-border overflow-hidden group" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="h-64 lg:h-auto overflow-hidden">
            <img src={blogFutureImaging} alt="The Future of Medical Imaging Technology" loading="lazy" width={640} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="p-6 lg:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded">Technology</span>
              <span className="text-xs text-muted-foreground">Jan 10, 2026</span>
            </div>
            <h3 className="font-heading font-bold text-xl lg:text-2xl mb-3 group-hover:text-primary transition-colors">
              The Future of Medical Imaging Technology
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The landscape of medical imaging is evolving rapidly with breakthroughs in artificial intelligence, 3D imaging, and cloud-based diagnostics. AI-powered systems can now detect anomalies in X-rays, CT scans, and MRIs with remarkable accuracy, enabling faster and more precise diagnoses. Cloud-based PACS solutions are transforming how hospitals store and share imaging data, allowing radiologists to access patient scans from anywhere in the world.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Radping is at the forefront of these innovations, integrating smart software with our imaging equipment to deliver next-generation diagnostic solutions that are both affordable and accessible for healthcare facilities across India.
            </p>

            {/* Inline images */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <img src={blogDetail1} alt="AI-powered diagnostics" loading="lazy" width={640} height={512} className="rounded-lg w-full h-32 object-cover" />
              <img src={blogDetail2} alt="Cloud-based imaging" loading="lazy" width={640} height={512} className="rounded-lg w-full h-32 object-cover" />
            </div>

            <div className="flex items-center justify-between">
              <Link to="/blog" className="text-primary text-sm font-semibold font-heading inline-flex items-center gap-1 hover:gap-2 transition-all">
                Read Full Article <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-4">
                <button className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <ThumbsUp className="w-4 h-4" /> Like
                </button>
                <button className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlogSection;
