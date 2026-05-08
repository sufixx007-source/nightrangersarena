import React from "react";
import Link from "next/link";
import { Gamepad2, Globe, Play, Mail, Box } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden">
                <img
                  src="/companyIcon.png"
                  alt="Night Rangers Arena Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-gradient">
                NIGHT RANGERS <span className="text-slate-900">ARENA</span>
              </span>
            </Link>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Night Rangers Arena is a premier game development studio focused
              on crafting high-fidelity simulations and immersive mobile gaming
              experiences for a global audience.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Globe, href: "https://night-rangers-pp.netlify.app/", color: "hover:bg-blue-500" },
                { icon: Play, href: "https://play.google.com/store/apps/developer?id=Night+Rangers+Arena", color: "hover:bg-green-500" },
                { icon: Mail, href: "mailto:aliahmad0262626@gmail.com", color: "hover:bg-red-500" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={cn(
                    "w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-sm",
                    social.color
                  )}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Games", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              {[
                {
                  name: "Privacy Policy",
                  href: "https://night-rangers-pp.netlify.app/",
                },
                { name: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Night Rangers Arena. All rights
            reserved.
          </p>
          <p>Designed for the ultimate gaming experience.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
