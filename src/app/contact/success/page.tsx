import { P } from "@/app/lib/P";
import Link from "next/link";

export default function ContactSuccessPage() {
  return (
    <div>
      <P>Contact form submitted successfully.</P>
      <Link href="/" className="font-bold underline">
        Back to home page
      </Link>
    </div>
  );
}
