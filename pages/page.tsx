import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirect ke halaman utama jika tidak ada query `name`
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");

  if (!name) {
    return redirect("/"); // Arahkan ke halaman utama jika tidak ada nama
  }

  // Arahkan ke halaman dinamis berdasarkan nama pengguna
  const id = name.toLowerCase().replace(/\s+/g, "-");
  redirect(`/trias-zulfa/undangan/${id}`);
}