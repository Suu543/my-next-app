import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>
        안녕하세요 - {session && <span>{session.user!.name}</span>} 반갑습니다
      </h1>
      <Link href="/users">Users</Link>
    </main>
  );
}
