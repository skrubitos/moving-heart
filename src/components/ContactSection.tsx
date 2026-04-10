import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Send, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";

const useScrollReveal = (delay = 0) => {
  const isMobileAtInit =
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 639px)").matches
      : false;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(!isMobileAtInit);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(max-width: 639px)").matches) return;
    let timer: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => { observer.disconnect(); clearTimeout(timer); };
  }, [delay]);

  return [ref, visible] as const;
};

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [whatsappRef, whatsappVisible] = useScrollReveal(0);
  const [phoneRef, phoneVisible] = useScrollReveal(150);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    toast({ title: t("contact.toastTitle"), description: t("contact.toastDesc") });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="mb-12 flex items-center justify-center gap-2.5 py-3 px-6 rounded-full border border-primary/25 bg-primary/5 w-fit mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Zap className="h-4 w-4 text-primary flex-shrink-0" />
          <span className="text-sm font-semibold text-primary">{t("contact.badge")}</span>
        </motion.div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            {t("contact.sectionBadge")}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">

          <div
            ref={whatsappRef}
            className={`will-change-transform transition-[opacity,transform] duration-500 ease-out ${
              whatsappVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
            }`}
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-8 rounded-2xl border-2 border-[#25D366]/30 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#25D366]/60 relative overflow-hidden"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20">
                {t("contact.recommended")}
              </span>
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-300 group-hover:scale-110">
                <MessageCircle className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {t("contact.whatsappDesc")}
              </p>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#25D366]/30">
                <MessageCircle className="h-4 w-4" />
                {t("contact.whatsappCta")}
              </span>
            </motion.a>
          </div>

          <div
            ref={phoneRef}
            className={`will-change-transform transition-[opacity,transform] duration-500 ease-out ${
              phoneVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
            }`}
          >
            <motion.a
              href={PHONE_HREF}
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/25"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-110">
                <Phone className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{t("contact.phoneTitle")}</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {t("contact.phoneDesc")}
              </p>
              <span className="text-l font-extrabold text-foreground tracking-tight">
                {PHONE_DISPLAY}
              </span>
              <span className="mt-1.5 text-xs text-muted-foreground">{t("contact.hours")}</span>
            </motion.a>
          </div>

          <motion.div
            className="p-8 rounded-2xl border border-border bg-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-1">{t("contact.formTitle")}</h3>
            <p className="text-xs text-muted-foreground mb-6">{t("contact.formDesc")}</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder={t("contact.namePlaceholder")}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                maxLength={100}
                required
                className="rounded-xl"
              />
              <Input
                placeholder={t("contact.phonePlaceholder")}
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                maxLength={20}
                required
                className="rounded-xl"
              />
              <Textarea
                placeholder={t("contact.messagePlaceholder")}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                maxLength={1000}
                rows={3}
                className="rounded-xl resize-none"
              />
              <Button
                type="submit"
                className="w-full rounded-xl py-5 font-bold shadow-md shadow-primary/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="mr-2 h-4 w-4" />
                {t("contact.submit")}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
