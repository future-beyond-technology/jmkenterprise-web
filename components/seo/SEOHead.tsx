type JsonLdObject = Record<string, unknown>;

type SEOHeadProps = {
  id?: string;
  data: JsonLdObject | JsonLdObject[];
};

export function SEOHead({ id = "json-ld", data }: SEOHeadProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
