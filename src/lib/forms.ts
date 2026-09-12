import { site } from "@/config/site";

export type FormResult = { ok: true } | { ok: false; error: string };

export async function submitForm(
  formName: string,
  data: Record<string, string>,
): Promise<FormResult> {
  if (!site.web3formsKey) {
    return { ok: false, error: "Form delivery is not configured yet." };
  }
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: site.web3formsKey,
        from_name: `${site.name} website`,
        subject: `[${formName}] New submission`,
        ...data,
      }),
    });
    const json = (await res.json()) as { success?: boolean; message?: string };
    return json.success ? { ok: true } : { ok: false, error: json.message ?? "Submission failed." };
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }
}
