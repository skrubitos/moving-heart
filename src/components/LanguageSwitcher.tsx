import { useTranslation } from "react-i18next";

const flags = [
  { lang: "hr", src: "https://flagcdn.com/hr.svg", label: "HR" },
  { lang: "en", src: "https://flagcdn.com/gb.svg", label: "EN" },
] as const;

interface Props {
  /** Stack flags vertically instead of side by side */
  vertical?: boolean;
}

const LanguageSwitcher = ({ vertical = false }: Props) => {
  const { i18n } = useTranslation();
  const current = i18n.language;

  return (
    <div className={`flex ${vertical ? "flex-col gap-1.5" : "flex-row items-center gap-2"}`}>
      {flags.map(({ lang, src, label }) => {
        const active = current === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => i18n.changeLanguage(lang)}
            title={label}
            className={`flex items-center gap-1 transition-opacity duration-200 ${
              active ? "opacity-100" : "opacity-40 hover:opacity-70"
            }`}
          >
            <img
              src={src}
              alt={label}
              width={24}
              height={18}
              className="rounded-sm object-cover w-6 h-[18px]"
            />
            {!vertical && (
              <span
                className={`text-[11px] font-bold leading-none ${
                  active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
