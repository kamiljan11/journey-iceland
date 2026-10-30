/* Browser side of the enquiry form: true only when /api/lead confirms the enquiry was delivered. */
// Server answers within ~8 s (parallel DB + email timeouts); past this the guest gets the fallback message.
const CLIENT_TIMEOUT_MS = 15_000;

export async function sendLead(payload: Record<string, string>, fetchImpl: typeof fetch = fetch): Promise<boolean> {
  try {
    const res = await fetchImpl('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true, // the request still completes if the guest closes the tab right after sending
      signal: AbortSignal.timeout(CLIENT_TIMEOUT_MS),
    });
    return res.ok;
  } catch {
    return false; // offline / network error: the form shows the WhatsApp / phone fallback
  }
}
