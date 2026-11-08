import type { Outcome } from "@/data/portfolio";

/** Turns a share link into an embeddable preview URL + a human label. */
export function describeOutcome(outcome: Outcome): { embedUrl?: string; label: string } {
  const { url } = outcome;
  let embedUrl: string | undefined;
  let label = outcome.label;

  const gdoc = url.match(/docs\.google\.com\/(document|presentation|spreadsheets)\/d\/([^/]+)/);
  const gdrive = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  const loom = url.match(/loom\.com\/share\/([a-z0-9]+)/i);
  const tableau = url.match(/public\.tableau\.com\/(?:app\/profile\/[^/]+\/viz|views)\/([^/?#]+)\/([^/?#]+)/);
  const powerbi = /app\.powerbi\.com\/view\?r=/.test(url);

  if (outcome.embed) {
    embedUrl = url;
  } else if (gdoc) {
    embedUrl = `https://docs.google.com/${gdoc[1]}/d/${gdoc[2]}/preview`;
    label ??= { document: "Google Docs", presentation: "Google Slides", spreadsheets: "Google Sheets" }[
      gdoc[1] as "document" | "presentation" | "spreadsheets"
    ];
  } else if (gdrive) {
    embedUrl = `https://drive.google.com/file/d/${gdrive[1]}/preview`;
    label ??= "Google Drive";
  } else if (loom) {
    embedUrl = `https://www.loom.com/embed/${loom[1]}`;
    label ??= "Loom";
  } else if (tableau) {
    embedUrl = `https://public.tableau.com/views/${tableau[1]}/${tableau[2]}?:showVizHome=no&:embed=true`;
    label ??= "Tableau Public";
  } else if (powerbi) {
    embedUrl = url;
    label ??= "Power BI";
  } else if (url.startsWith("/") && /\.html?$/.test(url)) {
    // A page hosted inside this site (e.g. /embeds/dashboard.html)
    embedUrl = url;
    label ??= "Interactive dashboard";
  }

  if (!label) {
    try {
      label = new URL(url).hostname.replace(/^www\./, "");
    } catch {
      label = "Link";
    }
  }
  return { embedUrl, label };
}
