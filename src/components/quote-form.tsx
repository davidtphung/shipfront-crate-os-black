"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type QuoteDraft = {
  name: string;
  email: string;
  phone: string;
};

const empty: QuoteDraft = {
  name: "",
  email: "",
  phone: "",
};

export function QuoteForm() {
  const [draft, setDraft] = useState<QuoteDraft>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteDraft, string>>>( {});

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
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-xl rounded-[20px] border border-[#222] bg-[#000000] p-6 sm:p-8"
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
        <p className="text-[13px] text-[#9a9a9a]">Required: Name, Email, Phone.</p>
        <Button
          type="submit"
          className="min-h-11 rounded-[12px] bg-[#FF6A00] text-black hover:bg-[#FF6A00] hover:brightness-95"
        >
          Submit
        </Button>
      </div>
    </form>
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
      <Label htmlFor={id} className="whitespace-nowrap text-[#f5f5f5]">
        {required ? `${label} *` : label}
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
