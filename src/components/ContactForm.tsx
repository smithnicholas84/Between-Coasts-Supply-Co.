"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export default function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "submitting" });

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState({ status: "success" });
      form.reset();
    } catch (err) {
      setState({
        status: "error",
        message:
          err instanceof Error
            ? err.message
            : "Something went wrong. Email trade@betweencoastssupply.com.",
      });
    }
  }

  if (state.status === "success") {
    return (
      <div className="card p-10 md:p-12">
        <div className="flex items-center gap-3 text-[var(--color-amber)] mb-4">
          <Check size={22} />
          <p className="font-mono text-[11px] tracking-[0.24em] uppercase">
            Quote request received
          </p>
        </div>
        <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
          Got it. We&rsquo;ll reply within one business day.
        </h3>
        <p className="text-[var(--color-bone-2)] leading-relaxed max-w-lg">
          A member of the trade desk will follow up with landed pricing, lead
          times, and a delivery plan. If it&rsquo;s urgent, call (515) 555-0199.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-8 md:p-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Select
          label="I'm a…"
          name="role"
          required
          options={[
            "Fence contractor",
            "Landscape / design-build",
            "Custom builder",
            "Deck / dock contractor",
            "Architect / designer",
            "Commercial GC",
            "Millwork shop",
            "Marina / boat builder",
            "Hospitality group",
            "Other",
          ]}
        />
        <Select
          label="Species interest"
          name="species"
          required
          options={[
            "Teak",
            "Central American Cypress",
            "Both",
            "Not sure — help me spec",
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Estimated board feet" name="volume" placeholder="e.g. 2,500 BF" />
        <Field label="State" name="state" placeholder="IA · NE · KS · MN · MO · WI · CO · Other" />
      </div>

      <Textarea
        label="Project details"
        name="notes"
        rows={5}
        placeholder="Application, grade if known, finish, timeline. The more you tell us, the tighter the quote."
      />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-4 border-t border-white/10">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">
          We reply within one business day.
        </p>
        <button
          type="submit"
          disabled={state.status === "submitting"}
          className="btn-primary disabled:opacity-60 disabled:cursor-wait"
        >
          {state.status === "submitting" ? "Sending…" : "Send to trade desk"}
          <ArrowUpRight size={14} />
        </button>
      </div>

      {state.status === "error" && (
        <p className="text-[var(--color-amber-2)] text-sm" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">
        {label}{required && <span className="text-[var(--color-amber)]"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-[var(--color-midnight-3)] border border-white/10 px-4 py-3 text-[var(--color-bone)] placeholder:text-[var(--color-fog)] focus:border-[var(--color-amber)] focus:outline-none transition-colors"
      />
    </label>
  );
}

function Textarea({
  label, name, rows = 4, placeholder,
}: { label: string; name: string; rows?: number; placeholder?: string }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="mt-2 w-full bg-[var(--color-midnight-3)] border border-white/10 px-4 py-3 text-[var(--color-bone)] placeholder:text-[var(--color-fog)] focus:border-[var(--color-amber)] focus:outline-none transition-colors resize-y"
      />
    </label>
  );
}

function Select({
  label, name, options, required,
}: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">
        {label}{required && <span className="text-[var(--color-amber)]"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full bg-[var(--color-midnight-3)] border border-white/10 px-4 py-3 text-[var(--color-bone)] focus:border-[var(--color-amber)] focus:outline-none transition-colors"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
