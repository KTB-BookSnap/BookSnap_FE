import Link from "next/link";

export default function Header() {
  return (
    <Link
      href="/"
      className="w-full h-[100px] bg-amber-950 text-amber-50 text-[2.5rem] flex justify-start items-center px-5"
    >
      📚 &nbsp;BookSnap
    </Link>
  );
}
