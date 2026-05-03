import { motion } from 'motion/react';
import { Mail, MessageCircle, RefreshCw, Sparkles, Copy, CheckCircle2, Activity, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('准备中...');
  const [timeRemaining, setTimeRemaining] = useState(60);

  const TOTAL_TIME = 3600; // 60 minutes in seconds

  useEffect(() => {
    let start = localStorage.getItem('upgrade_start_time');
    if (!start) {
      start = Date.now().toString();
      localStorage.setItem('upgrade_start_time', start);
    }

    const timer = setInterval(() => {
      const elapsed = (Date.now() - parseInt(start || '0')) / 1000;
      
      if (elapsed >= TOTAL_TIME) {
        setProgress(100);
        setStage('升级成功');
        setTimeRemaining(0);
        clearInterval(timer);
        return;
      }

      let currentProgress = 0;
      let currentStage = '';

      // 阶段：build(25m=1500s), 打包(2m=120s), 推送(30m=1800s), 解压(3m=180s)
      if (elapsed < 1500) {
        currentStage = '正在 Build...';
        currentProgress = (elapsed / 1500) * 40; // 0-40%
      } else if (elapsed < 1620) {
        currentStage = '正在打包...';
        currentProgress = 40 + ((elapsed - 1500) / 120) * 5; // 40-45%
      } else if (elapsed < 3420) {
        currentStage = '正在推送...';
        currentProgress = 45 + ((elapsed - 1620) / 1800) * 45; // 45-90%
      } else {
        currentStage = '正在解压...';
        currentProgress = 90 + ((elapsed - 3420) / 180) * 9.9; // 90-99.9%
      }

      setProgress(currentProgress);
      setStage(currentStage);
      setTimeRemaining(Math.ceil((TOTAL_TIME - elapsed) / 60));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    localStorage.removeItem('upgrade_start_time'); // Reset timer on refresh for demo purposes
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('Jiabcdefh');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-200 font-sans selection:bg-violet-500/30 relative flex items-center justify-center p-4 sm:p-6 md:p-12">
      
      {/* Premium Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Subtle Background Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-fuchsia-600/10 blur-[120px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 relative z-10"
      >
        {/* Left Column: Main Content & Contacts */}
        <div className="lg:col-span-2 flex flex-col gap-4 md:gap-6">
          
          {/* Main Hero Card */}
          <motion.div variants={itemVariants} className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/60 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-xs font-medium text-zinc-300 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                系统维护中
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                我们正在升级 <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                  bornforthis.cn
                </span>
              </h1>

              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                为了给您提供更卓越的体验、更快的访问速度以及更安全的数据保护，我们正在进行一次全面的系统升级。网站暂时无法访问，感谢您的耐心等待。
              </p>
            </div>

            {/* Decorative abstract shapes inside hero */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-3xl" />
          </motion.div>

          {/* Contacts Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* Email Card */}
            <motion.div variants={itemVariants} className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/60 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-violet-500/30 transition-colors duration-500">
              <a href="mailto:aiyuechuang@gmail.com" className="absolute inset-0 z-20" aria-label="Send email to aiyuechuang@gmail.com"></a>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                <Mail className="w-24 h-24 text-violet-400" />
              </div>
              
              <div className="relative z-10 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-4 border border-violet-500/20">
                  <Mail className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">邮件联系</h3>
                <p className="text-sm text-zinc-400">随时发送邮件给我们</p>
              </div>

              <div className="relative z-10 inline-flex items-center justify-between w-full p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50 group-hover:bg-zinc-800 transition-colors group/btn">
                <span className="text-zinc-200 font-medium truncate mr-2">aiyuechuang@gmail.com</span>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>

            {/* WeChat Card */}
            <motion.div variants={itemVariants} className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/60 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#07C160]/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                <MessageCircle className="w-24 h-24 text-[#07C160]" />
              </div>
              
              <div className="relative z-10 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#07C160]/10 flex items-center justify-center mb-4 border border-[#07C160]/20">
                  <MessageCircle className="w-6 h-6 text-[#07C160]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">微信沟通</h3>
                <p className="text-sm text-zinc-400">添加微信获取实时进度</p>
              </div>

              <button onClick={handleCopy} className="relative z-10 inline-flex items-center justify-between w-full p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50 hover:bg-zinc-800 transition-colors group/btn cursor-pointer">
                <span className="text-zinc-200 font-medium truncate mr-2">Jiabcdefh</span>
                {copied ? (
                  <CheckCircle2 className="w-4 h-4 text-[#07C160]" />
                ) : (
                  <Copy className="w-4 h-4 text-zinc-500 group-hover/btn:text-[#07C160] transition-colors" />
                )}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Status & Animation */}
        <motion.div variants={itemVariants} className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/60 rounded-[2rem] p-8 md:p-10 flex flex-col relative overflow-hidden">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-fuchsia-400" />
              实时状态
            </h3>
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</span>
          </div>

          {/* Abstract Animation Area */}
          <div className="flex-1 flex items-center justify-center min-h-[200px] lg:min-h-0 relative mb-12">
            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Outer spinning dashed ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-[2px] border-dashed border-zinc-700/50"
              />
              {/* Inner spinning ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-violet-500/30 border-t-violet-500"
              />
              {/* Center glowing orb */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 blur-md"
              />
              <div className="absolute w-16 h-16 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="mt-auto space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm items-end">
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-300 font-medium">{stage}</span>
                  {timeRemaining > 0 && (
                    <span className="text-xs text-zinc-500">预计剩余 {timeRemaining} 分钟</span>
                  )}
                </div>
                <span className="text-violet-400 font-medium tabular-nums">{progress.toFixed(2)}%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full relative"
                >
                  <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30 animate-[shimmer_2s_infinite]" />
                </motion.div>
              </div>
            </div>

            <button 
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="w-full py-4 bg-zinc-100 hover:bg-white text-zinc-900 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer group"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
              {isRefreshing ? '正在刷新...' : '刷新页面'}
            </button>
          </div>
        </motion.div>

      </motion.div>
      
      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 text-zinc-600 text-sm font-medium"
      >
        &copy; {new Date().getFullYear()} bornforthis.cn
      </motion.div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
