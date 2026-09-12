"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X, type LucideIcon } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { industryIcons } from "@/components/industries/industryIcons";
import { serviceIcons } from "@/components/services/serviceIcons";
import { Button } from "@/components/ui/Button";
import { nav } from "@/config/site";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

type MenuItem = { href: string; title: string; sub: string; icon: LucideIcon; badge?: string };
type Menu = { items: MenuItem[]; allLabel: string; allHref: string; cols: 2 | 3 };

const menus: Record<string, Menu> = {
  "/services/": {
    allLabel: "View all services",
    allHref: "/services/",
    cols: 2,
    items: services.map((s, i) => ({
      href: `/services/${s.slug}/`,
      title: s.title,
      sub: s.tagline,
      icon: serviceIcons[s.slug],
      badge: i === 0 ? "Flagship" : undefined,
    })),
  },
  "/industries/": {
    allLabel: "View all industries",
    allHref: "/industries/",
    cols: 2,
    items: industries.map((i) => ({
      href: `/industries/${i.slug}/`,
      title: i.title,
      sub: i.hook,
      icon: industryIcons[i.slug],
    })),
  },
};

function MegaMenu({ menu, open, onOpen, onClose }: { menu: Menu; open: boolean; onOpen: () => void; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <m.div
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          className="absolute left-1/2 top-full z-50 w-[44rem] -translate-x-1/2 pt-4"
        >
          <div className="overflow-hidden rounded-3xl border border-line bg-paper p-3 shadow-card-hover">
            <div className={cn("grid gap-1", menu.cols === 3 ? "grid-cols-3" : "grid-cols-2")}>
              {menu.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-mist"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist transition-colors group-hover:bg-black group-hover:text-cream">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-1.5 text-sm font-semibold">
                      {item.title}
                      {item.badge && (
                        <span className="rounded-full bg-black px-1.5 py-0.5 text-[0.5625rem] font-semibold uppercase tracking-wider text-cream">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted">{item.sub}</span>
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href={menu.allHref}
              onClick={onClose}
              className="mt-2 flex items-center justify-between rounded-2xl bg-black px-4 py-3 text-sm font-medium text-cream transition-colors hover:bg-ink"
            >
              {menu.allLabel}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const openMenu = (key: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setActiveMenu(key);
  };
  const closeMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActiveMenu(null), 120);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes whichever menu is open (mega menu on desktop, drawer on mobile).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setActiveMenu(null);
      setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeMobile = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={cn(
          "container-x flex h-16 items-center justify-between rounded-full border px-5 transition-all duration-300 sm:px-6",
          scrolled || activeMenu
            ? "border-line bg-paper/85 shadow-card backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="/" aria-label="Surge AI home" className="text-ink">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href);
            const menu = menus[item.href];
            const isOpen = activeMenu === item.href;
            const link = (
              <Link
                href={item.href}
                aria-haspopup={menu ? "true" : undefined}
                aria-expanded={menu ? isOpen : undefined}
                onFocus={menu ? () => openMenu(item.href) : undefined}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active || isOpen ? "bg-mist text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
                {menu && <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")} />}
              </Link>
            );
            if (!menu) return <span key={item.href}>{link}</span>;
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => openMenu(item.href)}
                onMouseLeave={closeMenu}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setActiveMenu(null);
                }}
              >
                {link}
                <MegaMenu menu={menu} open={isOpen} onOpen={() => openMenu(item.href)} onClose={closeMenu} />
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact/" arrow>
            Start Your Project
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-mist lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container-x mt-3 lg:hidden"
          >
            <div className="max-h-[calc(100vh-7rem)] overflow-y-auto rounded-3xl border border-line bg-paper p-3 shadow-card-hover">
              <nav className="flex flex-col" aria-label="Mobile">
                {nav.map((item) => {
                  const menu = menus[item.href];
                  if (!menu) {
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobile}
                        className="rounded-2xl px-4 py-3 font-display text-lg font-medium text-ink hover:bg-mist"
                      >
                        {item.label}
                      </Link>
                    );
                  }
                  const expanded = mobileExpanded === item.href;
                  return (
                    <div key={item.href}>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={closeMobile}
                          className="flex-1 rounded-2xl px-4 py-3 font-display text-lg font-medium text-ink hover:bg-mist"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-label={expanded ? `Hide ${item.label.toLowerCase()}` : `Show ${item.label.toLowerCase()}`}
                          aria-expanded={expanded}
                          onClick={() => setMobileExpanded(expanded ? null : item.href)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-mist"
                        >
                          <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} />
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {expanded && (
                          <m.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mb-2 ml-4 flex flex-col border-l border-line pl-2">
                              {menu.items.map((m) => (
                                <Link
                                  key={m.href}
                                  href={m.href}
                                  onClick={closeMobile}
                                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-mist"
                                >
                                  <m.icon className="h-4 w-4 text-muted" strokeWidth={1.75} />
                                  {m.title}
                                </Link>
                              ))}
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>
              <div className="mt-2 border-t border-line pt-3" onClick={closeMobile}>
                <Button href="/contact/" arrow className="w-full">
                  Start Your Project
                </Button>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
