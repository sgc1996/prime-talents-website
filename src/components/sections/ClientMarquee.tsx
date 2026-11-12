import React from "react";
import Image from "next/image";

const CLIENTS = [
  { name: "Apex Technologies", logo: "/images/clients/client-1.svg" },
  { name: "Ceylon Commercial Bank", logo: "/images/clients/client-2.svg" },
  { name: "Lanka Global Ports", logo: "/images/clients/client-3.svg" },
  { name: "Horizon Apparel Group", logo: "/images/clients/client-4.svg" },
  { name: "Colombo Pay FinTech", logo: "/images/clients/client-5.svg" },
  { name: "Vertex Regional Pharma", logo: "/images/clients/client-6.svg" },
];

export function ClientMarquee() {
  return (
    <section className="py-12 bg-white dark:bg-navy-900 border-y border-slate-200/80 dark:border-navy-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">
          Trusted by 150+ Leading Sri Lankan &amp; Regional Enterprises
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center mx-6 sm:mx-8 px-6 py-3 rounded-2xl bg-slate-50/50 dark:bg-navy-950/40 border border-slate-100 dark:border-navy-800/80 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:border-teal-500/40 hover:shadow-md transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer"
            >
              <Image
                src={client.logo}
                alt={`${client.name} partner logo`}
                width={140}
                height={36}
                className="h-7 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

