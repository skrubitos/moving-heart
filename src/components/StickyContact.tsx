import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const StickyContact = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.28 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/385976754606?text=Pozdrav%2C%20zainteresiran%20sam%20za%20usluge%20selidbe."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="group flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-xl shadow-[#25D366]/35 hover:shadow-[#25D366]/55 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="h-5 w-5 flex-shrink-0" />
            <span className="hidden sm:block">WhatsApp</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+385976754606"
            aria-label="Nazovite nas"
            className="group flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-accent text-accent-foreground font-bold text-sm shadow-xl shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 hover:scale-105"
          >
            <Phone className="h-5 w-5 flex-shrink-0" />
            <span className="hidden sm:block">Nazovite</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyContact;
