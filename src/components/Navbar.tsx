import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Usluge", href: "#services" },
  { label: "Zašto mi", href: "#trust" },
  { label: "Kontakt", href: "#contact" },
];

{/* Desktop */ }
<div className="hidden md:flex items-center gap-8">
  {links.map((l) => (
    <button
      key={l.href}
      onClick={() => scrollTo(l.href)}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      {l.label}
    </button>
  ))}
  <button
    onClick={() => scrollTo("#contact")}
    className="text-sm font-semibold px-5 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
  >
    Zatražite ponudu
  </button>
</div>

{/* Mobile toggle */ }
<button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
  {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
</button>
      </div >

  {/* Mobile menu */ }
  <AnimatePresence>
{
  open && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="md:hidden overflow-hidden border-b border-border bg-background"
    >
      <div className="px-6 py-4 flex flex-col gap-3">
        {links.map((l) => (
          <button
            key={l.href}
            onClick={() => scrollTo(l.href)}
            className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            {l.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo("#contact")}
          className="mt-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-center"
        >
          Zatražite ponudu
        </button>
      </div>
    </motion.div>
  )
}
      </AnimatePresence >
    </nav >
  );
};

export default Navbar;
