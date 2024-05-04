import { Language } from "@/types/github/language";

export default function GitHubTopLanguages({
  data,
}: {
  data: Array<Language>;
}): Array<JSX.Element> {
  return data.map((language: Language) => (
    <a
      className="inline-flex items-center px-3 py-1 text-sm font-medium leading-5 rounded-full"
      href={`https://github.com/timmo001?tab=repositories&language=${language.name.toLowerCase()}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: language.contrastColor,
        backgroundColor: language.color,
      }}
    >
      {language.name}
    </a>
  ));
}
