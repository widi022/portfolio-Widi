"use client";

import Image from "next/image";
import { Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import MessageStatus from "@/components/MessageStatus";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Section } from "@/components/ui/section";
import { Textarea } from "@/components/ui/textarea";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "form" | "success" | "error"
  >("form");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      // maaf coach tidak ada API nya
      await Promise.resolve();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  }

  function handleOpenChange(open: boolean) {
    setIsOpen(open);

    if (!open) {
      setSubmitStatus("form");
    }
  }

  return (
    <Section
      id="home"
      background="hero"
      className="min-h-screen px-5 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-0 xl:px-0"
    >
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 sm:gap-12 md:grid-cols-2 lg:min-h-[756px] lg:gap-8 xl:max-w-7xl">
        <div className="order-2 md:order-1 md:pr-2 lg:pr-8">
          <p className="mb-4 text-base sm:mb-6 sm:text-lg">
            Hi. I&apos;m Edwin Anderson
          </p>

          <h1 className="text-[3rem] font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-[3.5rem] lg:text-7xl xl:text-[5.5rem]">
            FRONT <span className="font-charm font-normal">END</span>
            <br />
            DEVELOPER
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:mt-8 sm:text-base sm:leading-8">
            Passionate about frontend development, I focus on crafting digital
            products that are visually polished, performance-optimized, and
            deliver a consistent experience across all platforms.
          </p>

          <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button
                variant="portfolio"
                size="portfolio"
                className="mt-8 w-full sm:w-72 lg:mt-10"
              >
                <Mail className="size-5" />
                Hire Me
              </Button>
            </DialogTrigger>

            <DialogContent className="overflow-hidden rounded-none border-white/15 bg-black p-0 text-white sm:max-w-lg">
              {submitStatus === "success" ? (
                <MessageStatus
                  status="success"
                  onAction={() => setIsOpen(false)}
                />
              ) : submitStatus === "error" ? (
                <MessageStatus
                  status="error"
                  onAction={() => setSubmitStatus("form")}
                />
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="bg-[radial-gradient(circle_at_top,#075a68,transparent_70%)] px-6 pb-6 pt-8">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-white">
                        Let&apos;s Work Together
                      </DialogTitle>
                      <DialogDescription className="text-zinc-300">
                        Tell me briefly about your project or opportunity.
                      </DialogDescription>
                    </DialogHeader>
                  </div>

                  <div className="grid gap-5 px-6 py-6">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="border-white/15 bg-white/5 text-white placeholder:text-zinc-500"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="border-white/15 bg-white/5 text-white placeholder:text-zinc-500"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        required
                        className="min-h-28 border-white/15 bg-white/5 text-white placeholder:text-zinc-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="portfolioPill"
                      className="mt-2 h-11"
                    >
                      <Send />
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>

        <div className="relative order-1 flex h-[690px] items-start justify-center sm:h-[720px] md:order-2 md:h-auto md:pr-6 lg:absolute lg:right-[calc((100vw-100%)/-2+1.5rem)] lg:top-0 lg:pr-0 xl:right-[calc((100vw-100%)/-2+2rem)]">
          <Image
            src="/images/hero.png"
            alt="Portrait of Edwin Anderson"
            width={341}
            height={671}
            priority
            sizes="(max-width: 639px) 341px, (max-width: 1023px) 390px, 430px"
            className="w-[341px] max-w-full sm:w-[390px] lg:w-[430px]"
          />
        </div>
      </div>
    </Section>
  );
}
