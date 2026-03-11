"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "Weekly Lawn Mowing",
    message: "",
  });

  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("submitting");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/szymanski.mgt@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "New Szymanski Landscaping Lead",
            _template: "table",
            _captcha: "false",
            Name: formData.name,
            Phone: formData.phone,
            "Address / Town": formData.address,
            "Service Needed": formData.service,
            Message: formData.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitState("success");
      setFormData({
        name: "",
        phone: "",
        address: "",
        service: "Weekly Lawn Mowing",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitState("error");
    }
  };

  const services = [
    {
      title: "Weekly Lawn Mowing",
      description:
        "Reliable recurring mowing with trimming and clean edges to keep your property looking sharp all season.",
    },
    {
      title: "Spring & Fall Cleanups",
      description:
        "Leaf removal, debris cleanup, bed refreshes, and seasonal yard prep.",
    },
    {
      title: "Mulching & Bed Maintenance",
      description:
        "Fresh mulch installation and cleanup to improve curb appeal.",
    },
    {
      title: "General Yard Services",
      description:
        "Brush cleanup, property touch-ups, and one-time yard work.",
    },
  ];

  const serviceAreas = ["Sherborn", "Dover", "Wellesley", "Natick", "Framingham"];

  const galleryImages = [
    {
      src: "/images/mowing-1.jpeg",
      alt: "Freshly striped lawn after mowing service",
      caption: "Weekly lawn mowing",
    },
    {
      src: "/images/mowing-2.jpeg",
      alt: "Large striped lawn maintained by Szymanski Landscaping",
      caption: "Large property mowing",
    },
    {
      src: "/images/brush-clearing.jpeg",
      alt: "Brush clearing work in progress",
      caption: "Brush clearing",
    },
    {
      src: "/images/property-cleanup.jpeg",
      alt: "Yard cleanup area after clearing brush",
      caption: "Property cleanup",
    },
    {
      src: "/images/debris-removal.jpeg",
      alt: "Trailer loaded with yard debris for removal",
      caption: "Debris removal",
    },
    {
      src: "/images/tree-yard-work.jpeg",
      alt: "Tree cutting and yard work",
      caption: "Tree and yard work",
    },
    {
      src: "/images/garden-bed-cleanup.jpeg",
      alt: "Leaf cleanup and garden bed maintenance",
      caption: "Garden bed cleanup",
    },
    {
      src: "/images/leaf-cleanup.jpeg",
      alt: "Leaf removal service using mower",
      caption: "Leaf cleanup",
    },
    {
      src: "/images/seasonal-cleanup.jpeg",
      alt: "Leaf blowing and seasonal yard cleanup",
      caption: "Seasonal cleanup",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-bold tracking-tight">Szymanski Landscaping</p>
          </div>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-slate-600">
              Services
            </a>
            <a href="#about" className="hover:text-slate-600">
              About
            </a>
            <a href="#areas" className="hover:text-slate-600">
              Service Area
            </a>
            <a href="#photos" className="hover:text-slate-600">
              Photos
            </a>
            <a href="#contact" className="hover:text-slate-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-lime-50" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
              Now booking weekly lawn mowing
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Clean, reliable lawn care for a yard that stands out.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Szymanski Landscaping provides weekly mowing, seasonal cleanups,
              mulching, and general yard services for homeowners who want
              dependable work and a clean finish.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Request a Quote
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                View Services
              </a>
            </div>

            <div className="mt-8 grid max-w-md grid-cols-3 gap-4 text-sm">
              <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
                <p className="text-2xl font-bold">Weekly</p>
                <p className="mt-1 text-slate-600">Scheduled mowing options</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
                <p className="text-2xl font-bold">Local</p>
                <p className="mt-1 text-slate-600">Focused service area</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
                <p className="text-2xl font-bold">Fast</p>
                <p className="mt-1 text-slate-600">Simple quote process</p>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
              <div className="rounded-[1.5rem] bg-slate-900 p-8 text-white">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                  Featured Service
                </p>
                <h2 className="mt-3 text-3xl font-bold">Weekly Lawn Mowing</h2>
                <p className="mt-4 max-w-md text-slate-300">
                  A simple recurring service built for consistent curb appeal throughout
                  the growing season.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  <li>• Clean cut and trimmed finish</li>
                  <li>• Reliable weekly scheduling</li>
                  <li>• Ideal for busy homeowners</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Lawn care and yard work built around your property
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Local service with a strong focus on reliability
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I grew up doing a lot of work around the house, and over time that naturally
              turned into doing this kind of work for others. I take pride in keeping
              properties clean, well maintained, and looking their best. Outside of running
              Szymanski Landscaping, I study Environmental Science &amp; Policy with minors in
              GIS and Economics in school. When I’m not working or studying, I enjoy traveling
              and fishing whenever I get the chance.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Why homeowners choose us</h3>
            <div className="mt-6 space-y-5 text-slate-600">
              <p>• Clear quotes and responsive communication</p>
              <p>• Consistent weekly service options</p>
              <p>• Clean, professional finish on every visit</p>
              <p>• Local knowledge of neighborhood properties and seasonal needs</p>
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Service Area
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Proudly serving local homeowners
            </h2>
          </div>

          <p className="max-w-xl text-slate-600">
            Focused local coverage helps keep routes efficient and service dependable.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {serviceAreas.map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-6 text-center text-lg font-semibold shadow-sm"
            >
              {area}
            </div>
          ))}
        </div>
      </section>

      <section id="photos" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Photos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Recent Work
          </h2>
          <p className="mt-4 text-slate-600">
            Examples of lawn mowing, cleanups, and yard work completed for local homeowners.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-72 w-full object-cover"
              />
              <div className="px-4 py-3">
                <p className="text-sm font-semibold text-slate-700">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Reviews
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Google Reviews
            </h2>
            <p className="mt-4 text-slate-300">
              See what local homeowners are saying about Szymanski Landscaping.
            </p>
          </div>

          <div className="grid items-start gap-8 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
              <p className="text-lg leading-8 text-slate-200">
                Our customer reviews are hosted on Google. Click below to read
                real feedback from homeowners and see why clients continue to
                choose Szymanski Landscaping for mowing, cleanups, and yard
                services.
              </p>

              <a
                href="https://www.google.com/search?q=Szymanski+Landscaping&stick=H4sIAAAAAAAA_-NgU1I1qEhMSkpKsUhNs7C0NDdIM0uxAgmlJJtYGhmmGBomJiamJi9iFQ2uqsxNzCvOzlTwScxLKU5OLMjMSwcAC8cgKUEAAAA&hl=en-GB&mat=CfKbzgWc73cDElYBTVDHnuPBffD8o-f9DYwNIgwNqKOk1UH9ax2M2FDVlMKUP--9SrsAOgbfYsSzO9q-iSqK0qG5R8WUwaC9bzSLwGHK_v8ciOmkdHm3ZffZYWepPYnGdQ&authuser=1"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900"
              >
                View Google Reviews
              </a>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=Szymanski+Landscaping&output=embed"
                className="h-80 w-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Request a quote
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Ready for weekly mowing or a cleanup? Call or text with your address and the service you need.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">Phone</p>
                <a href="tel:6174703123" className="mt-2 block text-lg font-bold">
                  617-470-3123
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">Email</p>
                <a
                  href="mailto:szymanski.mgt@gmail.com"
                  className="mt-2 block break-all text-lg font-bold underline underline-offset-4"
                >
                  szymanski.mgt@gmail.com
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">Google Reviews</p>
                <a
                  href="https://www.google.com/search?q=Szymanski+Landscaping&stick=H4sIAAAAAAAA_-NgU1I1qEhMSkpKsUhNs7C0NDdIM0uxAgmlJJtYGhmmGBomJiamJi9iFQ2uqsxNzCvOzlTwScxLKU5OLMjMSwcAC8cgKUEAAAA&hl=en-GB&mat=CfKbzgWc73cDElYBTVDHnuPBffD8o-f9DYwNIgwNqKOk1UH9ax2M2FDVlMKUP--9SrsAOgbfYsSzO9q-iSqK0qG5R8WUwaC9bzSLwGHK_v8ciOmkdHm3ZffZYWepPYnGdQ&authuser=1"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-lg font-bold underline underline-offset-4"
                >
                  Leave a review on Google
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold">Send a message</h3>
              <p className="mt-2 text-slate-600">
                Fill this out to reach out about mowing, cleanups, or other yard work.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Address / Town
                </label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
                >
                  <option>Weekly Lawn Mowing</option>
                  <option>Spring Cleanup</option>
                  <option>Fall Cleanup</option>
                  <option>Mulching</option>
                  <option>Brush / Yard Cleanup</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                  placeholder="Tell me a little about the job..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="mt-6 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitState === "submitting" ? "Sending..." : "Send Inquiry"}
              </button>

              <p className="mt-4 text-sm text-slate-600">
                This form is set up to send leads to your email inbox.
              </p>

              {submitState === "success" && (
                <p className="mt-3 text-sm font-medium text-emerald-700">
                  Thanks — your message was sent successfully.
                </p>
              )}

              {submitState === "error" && (
                <p className="mt-3 text-sm font-medium text-red-600">
                  Something went wrong. Please call, text, or email instead.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}