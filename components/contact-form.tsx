"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-botanical-light p-12 text-center">
        <CheckCircle className="h-12 w-12 text-botanical" />
        <h3 className="mt-4 font-serif text-2xl font-semibold text-primary">
          Vielen Dank!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Ihre Anfrage ist bei uns eingegangen. Wir melden uns schnellstmöglich bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Name *
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Ihr vollständiger Name"
            className="rounded-xl bg-white py-3"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            E-Mail *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ihre@email.de"
            className="rounded-xl bg-white py-3"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Telefon
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Ihre Telefonnummer"
            className="rounded-xl bg-white py-3"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">
            Anlass
          </label>
          <select
            id="subject"
            name="subject"
            className="flex h-11 w-full rounded-xl border border-input bg-white px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Bitte wählen</option>
            <option value="hochzeit">Hochzeitsfloristik</option>
            <option value="trauer">Trauerfloristik</option>
            <option value="event">Eventfloristik</option>
            <option value="strauss">Sträuße & Geschenke</option>
            <option value="bio">Bio-Obst & Gemüse</option>
            <option value="sonstiges">Sonstiges</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Ihre Nachricht *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Beschreiben Sie uns Ihren Wunsch..."
          className="rounded-xl bg-white"
        />
      </div>

      <p className="text-xs text-muted-foreground">
        * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
      </p>

      <Button
        type="submit"
        className="w-full bg-botanical text-white hover:bg-botanical/90 rounded-full py-6 text-base sm:w-auto sm:px-10"
      >
        <Send className="mr-2 h-4 w-4" />
        Anfrage senden
      </Button>
    </form>
  );
}
