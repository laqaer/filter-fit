export const dynamic = "force-static";

const PUB = process.env.ADSENSE_PUB_ID;

const PLACEHOLDER = `# FilterFit ads.txt placeholder
# Replace with authorized digital sellers before serving ads.
# filterfitguide.com
# Example (do not use until you have a real publisher ID):
# google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
`;

export async function GET() {
  const body =
    PUB && /^pub-\d{16}$/.test(PUB)
      ? `google.com, ${PUB}, DIRECT, f08c47fec0942fa0\n`
      : PLACEHOLDER;

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
