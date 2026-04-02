export default function BlogsAdmin() {
  return (
    <div className="animate-in fade-in duration-300">
      <h1 className="text-4xl font-black font-outfit mb-8 drop-shadow-lg text-white">Manage Blogs</h1>
      <div className="bg-black/80 backdrop-blur-2xl p-10 border border-white/5 rounded-3xl shadow-2xl flex flex-col items-center justify-center py-40 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="text-6xl mb-4">✍️</div>
        <h2 className="text-2xl font-bold text-white mb-2">CMS Initialization Pending</h2>
        <p className="text-gray-500 max-w-sm">The Headless CMS (Content Management System) integration is pending database provisioning.</p>
      </div>
    </div>
  )
}
