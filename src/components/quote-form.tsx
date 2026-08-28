"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type QuoteDraft = {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  message: string;
};

const empty: QuoteDraft = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  message: "",
};

export function QuoteForm() {
  const [draft, setDraft] = useState<QuoteDraft>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteDraft, string>>>({});
  const [preview, setPreview] = useState<QuoteDraft | null>(null);

  function update(field: keyof QuoteDraft, value: string) {
    setDraft((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof QuoteDraft, string>> = {};
    if (!draft.name.trim()) nextErrors.name = "Name is required.";
    if (!draft.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email.trim())) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!draft.phone.trim()) nextErrors.phone = "Phone is required.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setPreview(null);
      return;
    }
    setPreview(draft);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        onSubmit={onSubmit}
        className="rounded-[20px] border border-[#222] bg-[#000000] p-6 sm:p-8"
        noValidate
      >
        <div className="grid gap-5">
          <Field
            id="name"
            label="Name"
            required
            value={draft.name}
            error={errors.name}
            onChange={(value) => update("name", value)}
          />
          <Field
            id="email"
            label="Email"
            type="email"
            required
            value={draft.email}
            error={errors.email}
            onChange={(value) => update("email", value)}
          />
          <Field
            id="phone"
            label="Phone"
            type="tel"
            required
            value={draft.phone}
            error={errors.phone}
            onChange={(value) => update("phone", value)}
          />
          <Field
            id="company"
            label="Company Name"
            value={draft.company}
            onChange={(value) => update("company", value)}
          />
          <Field
            id="website"
            label="Website"
            type="url"
            value={draft.website}
            onChange={(value) => update("website", value)}
          />
          <div className="grid gap-2">
            <Label htmlFor="message" className="text-[#f5f5f5]">
              Message
            </Label>
            <Textarea
              id="message"
              value={draft.message}
              onChange={(event) => update("message", event.target.value)}
              className="min-h-28 border-[#222] bg-[#000000] text-[#f5f5f5]"
            />
          </div>
          <Button
            type="submit"
            className="min-h-11 rounded-[12px] bg-[#FF6A00] text-black hover:bg-[#FF6A00] hover:brightness-95"
          >
            Preview quote request
          </Button>
          <p className="text-[13px] text-[#9a9a9a]">
            Preview only. This form does not send a request.
          </p>
        </div>
      </form>
      <aside className="rounded-[20px] border border-[#222] bg-[#000000] p-6 sm:p-8">
        <p className="font-mono text-[11px] tracking-[0.16em] text-[#9a9a9a] uppercase">
          Preview
        </p>
        {preview ? (
          <dl className="mt-6 grid gap-4 text-[15px]">
            <PreviewRow label="Name" value={preview.name} />
            <PreviewRow label="Email" value={preview.email} />
            <PreviewRow label="Phone" value={preview.phone} />
            <PreviewRow label="Company Name" value={preview.company || "Not provided"} />
            <PreviewRow label="Website" value={preview.website || "Not provided"} />
            <PreviewRow label="Message" value={preview.message || "Not provided"} />
          </dl>
        ) : (
          <p className="mt-6 text-[16px] leading-relaxed text-[#9a9a9a]">
            Required fields are Name, Email, and Phone. Company Name, Website, and Message
            are optional. Review your details here before you copy them to email
            info@myshipfront.com.
          </p>
        )}
      </aside>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  required,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
  error?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-[#f5f5f5]">
        {label}
        {required ? <span className="text-[#FF6A00]"> *</span> : null}
      </Label>
      <Input
        id={id}
        type={type}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-11 border-[#222] bg-[#000000] text-[#f5f5f5]"
      />
      {error ? (
        <p id={`${id}-error`} className="text-[13px] text-[#FF6A00]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function PreviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[11px] tracking-[0.12em] text-[#9a9a9a] uppercase">
        {label}
      </dt>
      <dd className="mt-1 text-[#f5f5f5]">{value}</dd>
    </div>
  );
}
