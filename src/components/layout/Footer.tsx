import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper px-6 md:px-12 pt-12 pb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-paper/10 pb-8 mb-6 gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/images/logo.png"
            alt="Laura Fancy Store"
            width={160}
            height={64}
            className="h-16 w-auto object-contain filter invert mix-blend-screen opacity-90"
          />
        </div>
        <div className="flex flex-wrap gap-7">
          <Link
            href="/products"
            className="text-paper/50 hover:text-paper text-[10px] tracking-[0.2em] uppercase transition-colors"
          >
            Catalog
          </Link>
          <Link
            href="/#story"
            className="text-paper/50 hover:text-paper text-[10px] tracking-[0.2em] uppercase transition-colors"
          >
            Story
          </Link>
          <Link
            href="/#process"
            className="text-paper/50 hover:text-paper text-[10px] tracking-[0.2em] uppercase transition-colors"
          >
            Process
          </Link>
          <Link
            href="/#contact"
            className="text-paper/50 hover:text-paper text-[10px] tracking-[0.2em] uppercase transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-3.5" aria-label="Social media links">
          <a
            href="https://www.tiktok.com/@laura.fancy.store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-[0_4px_14px_rgba(37,244,238,0.55)]"
            aria-label="Laura Fancy Store on TikTok"
            title="Follow Laura Fancy Store on TikTok"
          >
            <svg className="w-[38px] h-[38px]" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#010101" />
              <path d="M14.5 6.2c.6.9 1.5 1.5 2.5 1.6v1.8c-.8 0-1.6-.3-2.3-.7v4.6c0 2.1-1.7 3.8-3.8 3.8-1.8 0-3.2-1.2-3.7-2.9-.2-.7-.1-1.5.3-2.1.5-1 1.5-1.7 2.6-1.7v1.8c-.7.1-1.3.7-1.3 1.4 0 .8.6 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4V4.6h2c0 .5.4 1.1.9 1.6z" fill="#25F4EE" transform="translate(-0.6, -0.4)" />
              <path d="M14.5 6.2c.6.9 1.5 1.5 2.5 1.6v1.8c-.8 0-1.6-.3-2.3-.7v4.6c0 2.1-1.7 3.8-3.8 3.8-1.8 0-3.2-1.2-3.7-2.9-.2-.7-.1-1.5.3-2.1.5-1 1.5-1.7 2.6-1.7v1.8c-.7.1-1.3.7-1.3 1.4 0 .8.6 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4V4.6h2c0 .5.4 1.1.9 1.6z" fill="#FE2C55" transform="translate(0.6, 0.4)" />
              <path d="M14.5 6.2c.6.9 1.5 1.5 2.5 1.6v1.8c-.8 0-1.6-.3-2.3-.7v4.6c0 2.1-1.7 3.8-3.8 3.8-1.8 0-3.2-1.2-3.7-2.9-.2-.7-.1-1.5.3-2.1.5-1 1.5-1.7 2.6-1.7v1.8c-.7.1-1.3.7-1.3 1.4 0 .8.6 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4V4.6h2c0 .5.4 1.1.9 1.6z" fill="#FFFFFF" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/laura_fancy_store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-[0_4px_16px_rgba(225,48,108,0.65)]"
            aria-label="Laura Fancy Store on Instagram"
            title="Follow Laura Fancy Store on Instagram"
          >
            <svg className="w-[38px] h-[38px]" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ig-gradient-next" x1="15%" y1="100%" x2="85%" y2="0%">
                  <stop offset="0%" stopColor="#FFD600" />
                  <stop offset="25%" stopColor="#FF6A00" />
                  <stop offset="50%" stopColor="#EE0979" />
                  <stop offset="75%" stopColor="#D6249F" />
                  <stop offset="100%" stopColor="#7B1FA2" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="12" fill="url(#ig-gradient-next)" />
              <rect x="6.2" y="6.2" width="11.6" height="11.6" rx="3.4" fill="none" stroke="#FFFFFF" strokeWidth="1.4" />
              <circle cx="12" cy="12" r="2.9" fill="none" stroke="#FFFFFF" strokeWidth="1.4" />
              <circle cx="15.2" cy="8.8" r="0.8" fill="#FFFFFF" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61593616455086"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-[0_4px_16px_rgba(24,119,242,0.65)]"
            aria-label="Laura Fancy Store on Facebook"
            title="Follow Laura Fancy Store on Facebook"
          >
            <svg className="w-[38px] h-[38px]" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#1877F2" />
              <path d="M15.12 12.58l.45-2.95h-2.83V7.71c0-.81.39-1.6 1.67-1.6h1.29V3.6a15.7 15.7 0 00-2.3-.2c-2.35 0-3.89 1.42-3.89 4.01v2.22H6.92v2.95h2.59V20h3.2v-7.42h2.41z" fill="#ffffff" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] tracking-wider text-paper/30 gap-2">
        <span>©2026 Laura Fancy Store — All Rights Reserved.</span>
        <span className="font-hand text-sm italic">Made with love.</span>
      </div>
    </footer>
  );
}
