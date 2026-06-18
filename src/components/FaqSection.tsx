"use client";

import Image from "next/image";
import { MessageSquareText } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const faqs = [
  {
    question: "Do you work on freelance or remote projects?",
    answer: "Yes, I work with clients and teams remotely.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  {
    question: "Can you convert Figma or Sketch designs into code?",
    answer: "Yes, I translate design files into responsive frontend code.",
  },
  {
    question: "Do you collaborate with backend developers or teams?",
    answer: "Yes, I enjoy collaborating across product and engineering teams.",
  },
  {
    question: "Are you available for full-time roles?",
    answer: "I am open to discussing the right opportunity.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  function selectFaq(index: number) {
    const normalizedIndex = (index + faqs.length) % faqs.length;
    setOpenIndex(normalizedIndex);

    const carousel = carouselRef.current;
    const card = carousel?.children[normalizedIndex] as HTMLElement | undefined;
    card?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <Section id="faq" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-5">
        <div className="mb-12 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-4xl font-semibold lg:text-5xl">
              Still Got Questions?
            </h2>
            <p className="mt-5 text-zinc-400">
              I&apos;ve listed answers to questions I often get as a frontend
              developer.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-12 w-28 bg-black text-zinc-400"
              onClick={() => selectFaq(openIndex - 1)}
            >
              Prev
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 w-28 bg-black text-white"
              onClick={() => selectFaq(openIndex + 1)}
            >
              Next
            </Button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="scrollbar-hidden flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={faq.question}
                type="button"
                onClick={() => selectFaq(index)}
                className={`flex min-h-[470px] min-w-[78%] snap-start flex-col border p-5 text-left sm:min-w-[42%] lg:min-w-[22%] ${
                  isOpen
                    ? "border-[#20a4b8] bg-[#126a76]"
                    : "border-white/15 bg-black"
                }`}
              >
                <div className="flex items-start justify-between">
                  {isOpen ? (
                    <Image
                      src="/images/pablo.png"
                      alt=""
                      width={80}
                      height={80}
                      className="size-20 rounded-full object-cover"
                    />
                  ) : (
                    <span />
                  )}
                  <MessageSquareText className="size-7" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-semibold leading-tight">
                    {faq.question}
                  </h3>
                  {isOpen && (
                    <p className="mt-5 text-sm leading-7 text-white/90">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
