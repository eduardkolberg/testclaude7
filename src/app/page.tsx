import Link from "next/link";
import { menuData } from "@/lib/menu-data";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Willkommen in der Senioren-WG Braunschweig
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Selbstbestimmt leben in familiärer Gemeinschaft. Entdecken Sie unser
          einzigartiges Wohnkonzept für Senioren im Herzen von Braunschweig.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        {menuData.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              <Link href={`/${section.slug}`} className="hover:underline">
                {section.title}
              </Link>
            </h2>
            {section.children && (
              <ul className="space-y-2">
                {section.children.map((child) => (
                  <li key={child.id}>
                    <Link
                      href={`/${section.slug}/${child.slug}`}
                      className="text-gray-600 hover:text-blue-600 hover:underline"
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <section className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Haben Sie Fragen?
        </h2>
        <p className="text-gray-600 mb-6">
          Wir beraten Sie gerne persönlich und unverbindlich.
        </p>
        <Link
          href="/information-kontakt/kontakt/kontaktformular"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Kontakt aufnehmen
        </Link>
      </section>
    </div>
  );
}
