import { motion } from 'motion/react';
import { Clock, Mail, RefreshCw, Server, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans text-slate-200">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+Cjwvc3ZnPg==')] pointer-events-none opacity-50" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-3xl w-full"
      >
        {/* Main Card */}
        <div className="bg-slate-900/40 backdrop-blur-2xl border border-slate-800/60 rounded-[2rem] p-8 md:p-14 shadow-2xl text-center overflow-hidden relative">
          
          {/* Top decorative line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

          {/* Animated Icon Container */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-24 h-24 mx-auto mb-10"
          >
            <div className="absolute inset-0 bg-indigo-500/20 rounded-3xl rotate-6" />
            <div className="absolute inset-0 bg-blue-500/20 rounded-3xl -rotate-6" />
            <div className="relative w-full h-full bg-slate-900 border border-slate-700/50 rounded-2xl flex items-center justify-center shadow-inner">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Server className="w-10 h-10 text-indigo-400" />
              </motion.div>
            </div>
            
            {/* Pulsing dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-900"></span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            系统升级维护中
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-slate-400 mb-12 leading-relaxed max-w-xl mx-auto"
          >
            为了给您提供更优质的服务和更安全的环境，我们正在对 <span className="text-indigo-400 font-semibold px-1">bornforthis.cn</span> 进行全面升级。期间网站将暂时无法访问，给您带来的不便敬请谅解。
          </motion.p>

          {/* Status Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
          >
            <div className="bg-slate-800/30 rounded-2xl p-5 border border-slate-700/30 flex flex-col items-center justify-center gap-3 transition-colors hover:bg-slate-800/50">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-1">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-slate-300 text-sm font-medium">数据安全保障</span>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-5 border border-slate-700/30 flex flex-col items-center justify-center gap-3 transition-colors hover:bg-slate-800/50">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-1">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-slate-300 text-sm font-medium">预计恢复：稍后</span>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-5 border border-slate-700/30 flex flex-col items-center justify-center gap-3 transition-colors hover:bg-slate-800/50">
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mb-1">
                <Mail className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="text-slate-300 text-sm font-medium">联系我们</span>
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button 
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="group relative px-8 py-3.5 bg-white text-slate-900 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 mx-auto disabled:opacity-70 disabled:hover:scale-100 cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
              {isRefreshing ? '正在刷新...' : '刷新页面'}
            </button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 text-slate-500 text-sm flex items-center gap-2"
      >
        <span>&copy; {new Date().getFullYear()} bornforthis.cn</span>
        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
        <span>All rights reserved.</span>
      </motion.div>
    </div>
  );
}
