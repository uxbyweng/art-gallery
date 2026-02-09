// pages/index.js

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Gallery App (web-recap-project-5)</h1>
      <Link href={`/gallery/`}>Zur Gallery Page</Link>
    </div>
  );
}
