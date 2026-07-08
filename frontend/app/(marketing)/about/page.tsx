import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About — TSAPtest Private Wealth",
};

const principles = [
  {
    title: "Discretion",
    body: "Client affairs are discussed with no one. The firm does not publish client names, and never will.",
  },
  {
    title: "Independence",
    body: "Employee-owned and free of product relationships. Advice is the only thing the firm sells.",
  },
  {
    title: "Stewardship",
    body: "Capital is treated as something held in trust for the next generation, because it usually is.",
  },
];

const partners = [
  {
    initials: "HA",
    name: "Helen Ashworth",
    role: "Managing Partner",
    creds: "CFA · 29 years in practice",
  },
  {
    initials: "RO",
    name: "Raymond Okafor",
    role: "Chief Investment Officer",
    creds: "CFA · 24 years in practice",
  },
  {
    initials: "MB",
    name: "Marcus Bell",
    role: "Partner, Client Advisory",
    creds: "CFP® · 18 years in practice",
  },
  {
    initials: "SL",
    name: "Sarah Lindqvist",
    role: "Partner, Trusts & Estates",
    creds: "JD, TEP · 21 years in practice",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero eyebrow="About the firm" title="Built to be small" />

      <div className="max-w-[820px] mx-auto px-6 sm:px-10 pt-20 pb-16">
        <p className="text-lg leading-[1.75] text-ink">
          TSAPtest was founded in 2001 by three advisors who left larger
          institutions with the same conviction: that private wealth is
          served best by a firm with no products to sell and few enough
          clients to know each one well. Twenty-five years later the firm
          remains employee-owned, fee-only, and deliberately limited in size.
          Growth, where it happens, comes by referral.
        </p>
        <p className="mt-5.5 text-base leading-[1.75] text-body">
          The practice serves a limited number of families, most of whom
          have been clients for more than a decade. Advisors carry no sales
          targets. The measure of the firm is whether a family&apos;s affairs
          are in order — nothing else.
        </p>
      </div>

      <div className="bg-offwhite px-6 sm:px-10 py-16">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {principles.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-[10px] shadow-[0_6px_20px_rgba(0,0,0,0.07)] py-10 px-8"
            >
              <h3 className="text-xl font-bold text-navy">{p.title}</h3>
              <p className="mt-3 text-sm leading-[1.6] text-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-6 sm:px-10 pt-20 pb-[90px]">
        <div className="text-center mb-12">
          <div className="text-sm font-bold tracking-[2px] text-blue uppercase">
            Leadership
          </div>
          <h2 className="mt-3.5 text-[32px] sm:text-[40px] font-bold text-navy">
            The partners
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {partners.map((p) => (
            <div key={p.initials} className="text-center">
              <div className="w-[110px] h-[110px] rounded-full bg-navy text-white text-[30px] font-bold flex items-center justify-center mx-auto mb-4.5">
                {p.initials}
              </div>
              <h3 className="text-base font-bold text-navy">{p.name}</h3>
              <div className="text-[13px] font-semibold text-blue mt-1.5">
                {p.role}
              </div>
              <div className="text-xs text-body mt-1.5">{p.creds}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
