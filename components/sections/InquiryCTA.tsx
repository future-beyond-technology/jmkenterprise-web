import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

const assurancePoints = [
  "Dedicated support for bulk and monthly repeat requirements",
  "Category-wise shortlisting to accelerate procurement decisions",
  "Quick coordination on commercial terms and dispatch planning"
];

export function InquiryCTA() {
  return (
    <section className="industrial-section-light border-t border-zinc-300">
      <div className="industrial-container grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="accent-kicker text-zinc-700">Inquiry Support</p>
          <h2 className="section-title text-zinc-900">Share Your Requirement and Get a Structured B2B Quote</h2>
          <p className="mt-4 max-w-2xl text-zinc-700">
            Send product names, target quantity, and delivery region. Our team will return a relevant
            product match with clear commercial information.
          </p>

          <ul className="mt-6 space-y-2 text-sm text-zinc-700">
            {assurancePoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#C40000]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="metal-panel panel-sheen p-6 text-center lg:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300">Business Enquiries</p>
          <h3 className="mt-3 text-3xl font-semibold text-white">Let Us Build Your Supply Plan</h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-zinc-300">
            Ideal for dealers, plant buyers, and project teams seeking continuity across machines,
            consumables, and hardware.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/dealer-inquiry" className="btn-primary">
              Submit Inquiry
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-subtle">
              WhatsApp Now
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
