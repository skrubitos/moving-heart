import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim();
    const phone = formData.phone.trim();
    if (!name || !phone) return;

    toast({
      title: "Upit poslan!",
      description: "Javit ćemo vam se u najkraćem mogućem roku.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Kontaktirajte nas
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Zatražite besplatnu ponudu
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Odaberite najlakši način da nas kontaktirate. Odgovaramo u roku od 30 minuta tijekom radnog vremena.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Call Now */}
          <motion.a
            href="tel:+385976754606"
            className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Nazovite odmah</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Razgovarajte izravno s našim logističkim timom za brzu pomoć.
            </p>
            <span className="text-lg font-semibold text-foreground">+385 97 675 4606</span>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/385976754606?text=Pozdrav%2C%20želio%20bih%20zatražiti%20ponudu%20za%20usluge%20transporta."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Pišite nam na WhatsApp</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Brzo i jednostavno. Pošaljite nam poruku i dobit ćete odgovor u roku od par minuta.
            </p>
            <span className="text-lg font-semibold text-foreground">Kontaktirajte nas putem WhatsAppa</span>
          </motion.a>

          {/* Contact Form */}
          <motion.div
            className="p-8 rounded-2xl border border-border bg-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Pošaljite upit</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Vaše ime"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                maxLength={100}
                required
                className="rounded-xl"
              />
              <Input
                placeholder="Broj telefona"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                maxLength={20}
                required
                className="rounded-xl"
              />
              <Textarea
                placeholder="Specifikacija tereta i dodatne napomene..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                maxLength={1000}
                rows={4}
                className="rounded-xl resize-none"
              />
              <Button type="submit" className="w-full rounded-xl py-5 font-semibold transition-all duration-300 hover:scale-[1.02]">
                <Send className="mr-2 h-4 w-4" />
                Pošalji upit
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
