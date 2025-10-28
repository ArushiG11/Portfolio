import Chat from '@/components/Chat';
import PortfolioLayout from '@/components/PortfolioLayout';

export default function ChatPage() {
  return (
    <PortfolioLayout>
      <div className="relative z-10 min-h-screen p-4 pt-24">
        <Chat />
      </div>
    </PortfolioLayout>
  );
}
