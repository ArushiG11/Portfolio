import Chat from '@/components/Chat';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-indigo-100 dark:from-zinc-900 dark:to-black text-black dark:text-white flex items-center justify-center p-4">
      <Chat />
    </main>
  );
}
