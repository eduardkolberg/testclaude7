interface PageContentProps {
  title: string;
  id?: string;
}

export default function PageContent({ title, id }: PageContentProps) {
  return (
    <article className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{title}</h1>
      {id && <p className="text-sm text-gray-500 mb-4">Abschnitt {id}</p>}

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-4">Wichtige Informationen</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-4">Unsere Vorteile</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>Professionelle Betreuung rund um die Uhr</li>
          <li>Gemütliche und barrierefreie Räumlichkeiten</li>
          <li>Individuelle Pflege nach Ihren Bedürfnissen</li>
          <li>Familiäre Atmosphäre in kleiner Gemeinschaft</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
          &ldquo;Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.&rdquo;
        </blockquote>

        <p className="text-gray-600 leading-relaxed">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
          dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </article>
  );
}
