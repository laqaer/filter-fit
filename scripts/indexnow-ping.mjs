const host = "filterfitguide.com";
const key = "a483eb8a1539f5af5bc504988deaf6ee";

export async function pingIndexNow(urls = process.argv.slice(2)) {
  if (urls.length === 0) {
    console.error("usage: node scripts/indexnow-ping.mjs https://filterfitguide.com/...");
    process.exitCode = 1;
    return;
  }

  for (const url of urls) {
    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      parsed = null;
    }
    if (!parsed || parsed.protocol !== "https:" || parsed.hostname !== host) {
      console.error(`URL must be an absolute https://${host}/... address: ${url}`);
      process.exitCode = 1;
      return;
    }
  }

  let response;
  try {
    response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key,
        keyLocation: `https://${host}/${key}.txt`,
        urlList: urls,
      }),
    });
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
    return;
  }

  const body = await response.text();
  console.log(response.status);
  console.log(body);

  const ok = (response.status >= 200 && response.status < 300) || response.status === 202;
  if (!ok) process.exitCode = 1;
}

const entry = process.argv[1];
if (entry && import.meta.url === new URL(entry, "file:").href) {
  await pingIndexNow();
}
