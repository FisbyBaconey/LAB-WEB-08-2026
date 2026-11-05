// Cap status ala kartu peminjaman perpustakaan.
export default function Stempel({ tersedia }) {
  return (
    <span
      className={
        "inline-block -rotate-6 rounded-sm border-2 px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-[0.2em] outline outline-1 outline-offset-2 mix-blend-multiply " +
        (tersedia ? "border-moss text-moss outline-moss/60" : "border-stamp text-stamp outline-stamp/60")
      }
    >
      {tersedia ? "Tersedia" : "Sedang Dipinjam"}
    </span>
  );
}
