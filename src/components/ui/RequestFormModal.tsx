"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type RequestFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function RequestFormModal({ isOpen, onClose }: RequestFormModalProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const bodyStyleRef = useRef<{ overflow: string; paddingRight: string } | null>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (isOpen) {
      if (!bodyStyleRef.current) {
        bodyStyleRef.current = {
          overflow: document.body.style.overflow,
          paddingRight: document.body.style.paddingRight,
        };
      }
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      return;
    }

    const timeout = window.setTimeout(() => {
      if (bodyStyleRef.current) {
        document.body.style.overflow = bodyStyleRef.current.overflow;
        document.body.style.paddingRight = bodyStyleRef.current.paddingRight;
        bodyStyleRef.current = null;
      }
    }, 200);

    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timeout = window.setTimeout(() => setIsActive(true), 20);
      return () => window.clearTimeout(timeout);
      return;
    }

    setIsActive(false);
    const timeout = window.setTimeout(() => setShouldRender(false), 200);
    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  if (!shouldRender) return null;
  if (typeof document === "undefined") return null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return createPortal(
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8 transition-opacity duration-200 ease-out ${
        isActive ? "bg-black/50 opacity-100" : "bg-black/0 opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-2xl rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-opacity duration-200 ease-out sm:p-10 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="group absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-[#143B2E]"
          aria-label="Close"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-[#143B2E] transition-[stroke-width]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              className="transition-[stroke-width] group-hover:stroke-[3]"
            />
          </svg>
        </button>

        <h3 className="text-center font-sans text-2xl font-semibold leading-7 text-[#143B2E] sm:text-3xl">
          "Yes, I Want My
          <br />
          Surplus Refund Check"
        </h3>

        <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-sans text-sm font-semibold text-[#1F2A37]">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="h-11 w-full rounded-2xl border border-black/20 px-4 font-sans text-sm outline-none transition-colors focus:border-[#143B2E]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-sans text-sm font-semibold text-[#1F2A37]">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="h-11 w-full rounded-2xl border border-black/20 px-4 font-sans text-sm outline-none transition-colors focus:border-[#143B2E]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-sans text-sm font-semibold text-[#1F2A37]">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Phone"
              required
              className="h-11 w-full rounded-2xl border border-black/20 px-4 font-sans text-sm outline-none transition-colors focus:border-[#143B2E]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-sans text-sm font-semibold text-[#1F2A37]">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              required
              className="h-11 w-full rounded-2xl border border-black/20 px-4 font-sans text-sm outline-none transition-colors focus:border-[#143B2E]"
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-[#1F2A37]">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border border-black/30" />
            <span className="font-sans leading-[1.4]">
              I consent to receive SMS notifications, alerts, promotional messages and occasional marketing
              communications from Esquire Asset Recovery, LLC. Message frequency varies. Message and data
              rates may apply. Text HELP for assistance. Reply STOP at any time to unsubscribe.
            </span>
          </label>

          <button
            type="submit"
            className="mt-4 h-11 w-md self-center rounded-full bg-[#2E5B3A] font-sans text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#244A30]"
          >
            Please Expedite My Refund Check
          </button>
        </form>
      </div>
    </div>,
    document.body,
  );
}
