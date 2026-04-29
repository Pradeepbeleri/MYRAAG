import Sidebar from '@/components/sidebar'

export default function TranscriptLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Sidebar />
      <main className="ml-60 pt-16 p-8 transition-all">
        {children}
      </main>
    </div>
  )
}
