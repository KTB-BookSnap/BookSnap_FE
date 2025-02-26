import Link from "next/link";

export default function Header() {
  return (
    <Link
      href="/"
      className="sticky top-0 w-full h-[80px] bg-amber-950 text-amber-50 text-[2.5rem] flex justify-start items-center px-5 z-10"
    >
      📚 &nbsp;BookSnap
    </Link>
  );
}
