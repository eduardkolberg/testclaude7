export default function ContactSection() {
  return (
    <section className="bg-white py-[60px] px-5" aria-labelledby="contact-title">
      <div className="max-w-[1200px] mx-auto">
        <h2 id="contact-title" className="text-[32px] font-bold text-[#13263f] mb-10 text-center">
          Beratung & Kontakt
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#F5F7F9] rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-[#13263f] mb-3">Adresse</h3>
            <address className="text-base text-[#333435] leading-relaxed not-italic">
              WG Südstadt<br />
              Musterstraße 123<br />
              38100 Braunschweig
            </address>
          </div>

          <div className="bg-[#F5F7F9] rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-[#13263f] mb-3">Telefon</h3>
            <p className="text-base text-[#333435] leading-relaxed">
              <a href="tel:053118054700" className="hover:text-[#0688B5] transition-colors">
                Tel: (0531) 180 54 700
              </a>
              <br />
              Fax: (0531) 180 54 701<br />
              Mo-Fr: 9:00 - 17:00 Uhr
            </p>
          </div>

          <div className="bg-[#F5F7F9] rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-[#13263f] mb-3">E-Mail & Anfahrt</h3>
            <p className="text-base text-[#333435] leading-relaxed">
              <a href="mailto:info@wg-suedstadt.de" className="hover:text-[#0688B5] transition-colors">
                info@wg-suedstadt.de
              </a>
              <br />
              <a href="#anfahrt" className="text-[#0562a8] hover:underline font-medium">
                Route berechnen
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
