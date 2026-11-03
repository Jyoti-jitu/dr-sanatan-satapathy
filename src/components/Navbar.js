"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Calendar, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { doctorData } from "@/data/doctor";

const specialtiesList = [
  {
    name: "Brain Surgery",
    href: "/brain-surgery",
    desc: "Cranial tumors, neurotrauma, and vascular microsurgery"
  },
  {
    name: "Spine Surgery",
    href: "/spine-surgery",
    desc: "Cervical & lumbar decompression, stabilization, and disc repair"
  },
  {
    name: "Endoscopic Spine Surgery",
    href: "/endoscopic-spine-surgery",
    desc: "Sub-centimeter incisions for targeted disc removal"
  },
  {
    name: "Minimally Invasive Spine Surgery",
    href: "/minimally-invasive-spine-surgery",
    desc: "Muscle-sparing tubular access with rapid recovery"
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSpecialtiesOpen(false);
  }, [pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSpecialtiesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const isSpecialtyActive = specialtiesList.some(s => pathname === s.href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-subtle border-b border-neutral-border py-3"
          : "bg-white py-4 border-b border-neutral-border/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Wordmark */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-sm shrink-0 border border-neutral-border group-hover:border-teal transition-colors bg-white">
              <Image
                src="/images/logo.png"
                alt="Dr. Sanatan Satapathy - Neurosurgeon Logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg sm:text-xl text-navy-heading tracking-tight group-hover:text-teal transition-colors leading-tight">
                Dr. Sanatan Satapathy
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-teal tracking-wider uppercase">
                MCh Neurosurgery | Spine Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/") && pathname === "/"
                  ? "text-teal font-semibold"
                  : "text-navy-heading hover:text-teal hover:bg-neutral-offwhite"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-teal font-semibold"
                  : "text-navy-heading hover:text-teal hover:bg-neutral-offwhite"
              }`}
            >
              About
            </Link>

            {/* Specialities Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
                onMouseEnter={() => setSpecialtiesOpen(true)}
                className={`px-3 py-2 rounded-md text-sm font-medium inline-flex items-center gap-1 transition-colors ${
                  isSpecialtyActive
                    ? "text-teal font-semibold"
                    : "text-navy-heading hover:text-teal hover:bg-neutral-offwhite"
                }`}
                aria-expanded={specialtiesOpen}
              >
                <span>Specialities</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    specialtiesOpen ? "rotate-180 text-teal" : "text-neutral-body"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {specialtiesOpen && (
                <div
                  onMouseLeave={() => setSpecialtiesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-elevated border border-neutral-border py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3 pb-2 mb-1 border-b border-neutral-border/60">
                    <p className="text-[11px] font-semibold tracking-wider text-neutral-body uppercase">
                      Neurosurgical Expertise
                    </p>
                  </div>
                  {specialtiesList.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2.5 text-sm transition-colors rounded-lg mx-1.5 ${
                        pathname === item.href
                          ? "bg-teal-light text-teal font-semibold"
                          : "text-navy-heading hover:bg-neutral-offwhite hover:text-teal"
                      }`}
                    >
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-neutral-body mt-0.5 line-clamp-1">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/conditions"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/conditions")
                  ? "text-teal font-semibold"
                  : "text-navy-heading hover:text-teal hover:bg-neutral-offwhite"
              }`}
            >
              Conditions
            </Link>

            <Link
              href="/achievements"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/achievements")
                  ? "text-teal font-semibold"
                  : "text-navy-heading hover:text-teal hover:bg-neutral-offwhite"
              }`}
            >
              Achievements
            </Link>

            <Link
              href="/hospitals"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/hospitals")
                  ? "text-teal font-semibold"
                  : "text-navy-heading hover:text-teal hover:bg-neutral-offwhite"
              }`}
            >
              Hospitals
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-teal font-semibold"
                  : "text-navy-heading hover:text-teal hover:bg-neutral-offwhite"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal text-white text-sm font-semibold hover:bg-teal-dark shadow-sm hover:shadow transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal text-white text-xs font-semibold"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy-heading hover:bg-neutral-offwhite focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[110px] bg-white z-40 overflow-y-auto border-t border-neutral-border animate-in fade-in duration-200">
          <div className="px-6 py-6 space-y-4">
            <nav className="space-y-1">
              <Link
                href="/"
                className={`block py-3 px-3 rounded-lg text-base font-medium ${
                  pathname === "/" ? "bg-teal-light text-teal font-bold" : "text-navy-heading"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block py-3 px-3 rounded-lg text-base font-medium ${
                  pathname === "/about" ? "bg-teal-light text-teal font-bold" : "text-navy-heading"
                }`}
              >
                About Dr. Sanatan
              </Link>

              {/* Specialities Accordion in Mobile */}
              <div className="py-2 px-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-body mb-2">
                  Specialised Services
                </p>
                <div className="space-y-1.5 pl-2 border-l-2 border-teal/30">
                  {specialtiesList.map((spec) => (
                    <Link
                      key={spec.href}
                      href={spec.href}
                      className={`block py-2 text-sm font-medium ${
                        pathname === spec.href ? "text-teal font-bold" : "text-navy-heading"
                      }`}
                    >
                      {spec.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/conditions"
                className={`block py-3 px-3 rounded-lg text-base font-medium ${
                  pathname.startsWith("/conditions") ? "bg-teal-light text-teal font-bold" : "text-navy-heading"
                }`}
              >
                Conditions Directory
              </Link>
              <Link
                href="/achievements"
                className={`block py-3 px-3 rounded-lg text-base font-medium ${
                  pathname === "/achievements" ? "bg-teal-light text-teal font-bold" : "text-navy-heading"
                }`}
              >
                Awards & Timeline
              </Link>
              <Link
                href="/hospitals"
                className={`block py-3 px-3 rounded-lg text-base font-medium ${
                  pathname === "/hospitals" ? "bg-teal-light text-teal font-bold" : "text-navy-heading"
                }`}
              >
                Consultation Locations
              </Link>
              <Link
                href="/contact"
                className={`block py-3 px-3 rounded-lg text-base font-medium ${
                  pathname === "/contact" ? "bg-teal-light text-teal font-bold" : "text-navy-heading"
                }`}
              >
                Contact & Clinic Info
              </Link>
            </nav>

            <div className="pt-6 border-t border-neutral-border space-y-3">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal text-white font-semibold text-base shadow-sm"
              >
                <Calendar className="w-5 h-5" />
                <span>Request Appointment</span>
              </Link>

              <div className="p-4 rounded-xl bg-neutral-offwhite border border-neutral-border flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-body">
                  <p className="font-semibold text-navy-heading">Verified Medical Practice</p>
                  <p>Consultations at Sparsh Hospitals & KIMS, Bhubaneswar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

