import { links } from "../../data/links";
import useLanguage from "../../i18n/LanguageContext";

const contacts = [
    { label: { en: "Name", fr: "Nom" }, value: "Hugo de Dreux-Brézé" },
    { label: { en: "Personal Email", fr: "Email perso" }, value: links.email, href: `mailto:${links.email}` },
    { label: { en: "Student Email", fr: "Email étudiant" }, value: links.studentEmail, href: `mailto:${links.studentEmail}` },
    { label: "GitHub", value: "github.com/Hugoddb", href: links.github, external: true },
    { label: "LinkedIn", value: "linkedin.com/in/hugo-de-dreux-brézé", href: links.linkedin, external: true },
];

function ContactWindow() {

    const { t } = useLanguage();

    return (
      <div className="font-mono text-white text-sm sm:text-base md:text-lg p-5 md:p-8 leading-relaxed">

        <p>
          <span className="text-green-400">$hugodedreux-breze</span>  --contact
        </p>

        <dl className="mt-4 space-y-3 md:space-y-2">
          {contacts.map((contact) => (
            <div key={contact.value} className="flex flex-col md:flex-row md:items-baseline md:gap-3">

              <dt className="flex md:w-56 shrink-0 items-baseline gap-2 text-white">
                {t(contact.label)}
                <span className="hidden md:block flex-1 border-b-2 border-dotted border-slate-600" />
              </dt>

              <dd className="text-slate-300 break-all">
                {contact.href ? (
                  <a
                    href={contact.href}
                    {...(contact.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="underline hover:text-green-400"
                  >
                    {contact.value}
                  </a>
                ) : (
                  contact.value
                )}
              </dd>

            </div>
          ))}
        </dl>

        <p className="mt-6">
          <span className="text-green-400">$hugodedreux-breze</span>
          <span className="text-white animate-pulse"> ▋</span>
        </p>

      </div>
    );
  }

  export default ContactWindow;
