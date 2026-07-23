'use client'

import { ArrowUpRight, Music as MusicIcon } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import YouTube, { type YouTubePlayer } from 'react-youtube'

const socialLinks = [
  { 
    name: 'GitHub', 
    handle: '@daimx387-rgb', 
    url: 'https://github.com/daimx387-rgb',
    icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/github/light.svg',
    color: '#ffffff',
    hoverColor: '#ffffff'
  },
  { 
    name: 'Instagram', 
    handle: '@daimxsso', 
    url: 'https://www.instagram.com/daimxsso/',
    icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/instagram/default.svg',
    color: '#E4405F',
    hoverColor: '#E4405F'
  },
  { 
    name: 'Discord', 
    handle: 'daimx_1234', 
    url: 'https://discord.com/channels/@me',
    icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/discord/default.svg',
    color: '#5865F2',
    hoverColor: '#5865F2'
  },
  { 
    name: 'TikTok', 
    handle: '@daimx.dev', 
    url: 'https://www.tiktok.com/@daimx.dev',
    icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/tiktok/default.svg',
    color: '#000000',
    hoverColor: '#25F4EE'
  },
  { 
    name: 'Snapchat', 
    handle: '@daimx_dev', 
    url: 'https://www.snapchat.com/add/daimx_dev',
    icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/snapchat/default.svg',
    color: '#FFFC00',
    hoverColor: '#FFFC00'
  },
  { 
    name: 'YouTube', 
    handle: '@DaimX-c5v', 
    url: 'https://www.youtube.com/@DaimX-c5v',
    icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/youtube/default.svg',
    color: '#FF0000',
    hoverColor: '#FF0000'
  },
  { 
    name: 'X (Twitter)', 
    handle: '@daimxdev', 
    url: 'https://x.com/daimxaistartup',
    icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/x/default.svg',
    color: '#ffffff',
    hoverColor: '#ffffff'
  },
  { 
    name: 'Reddit', 
    handle: 'u/daimsarwar', 
    url: 'https://www.reddit.com/user/daimsarwar/',
    icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/reddit/default.svg',
    color: '#FF4500',
    hoverColor: '#FF4500'
  },
  { 
    name: 'LinkedIn', 
    handle: 'daim-x', 
    url: 'https://www.linkedin.com/in/daim-x/',
    icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/linkedin/default.svg',
    color: '#0A66C2',
    hoverColor: '#0A66C2'
  },
]

function ClientStars({ count, bright }: { count: number; bright: boolean }) {
  const [stars, setStars] = useState<React.ReactNode[]>([])
  useEffect(() => {
    const result: React.ReactNode[] = []
    if (!bright) {
      for (let i = 0; i < count; i++) {
        result.push(
          <div
            key={`star-d-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 1.5 + 0.3 + 'px',
              height: Math.random() * 1.5 + 0.3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
              animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        )
      }
    } else {
      const colors = ['rgba(180,200,255,0.8)', 'rgba(255,200,180,0.7)', 'rgba(200,255,220,0.6)', 'rgba(255,220,255,0.5)', 'rgba(200,220,255,0.7)']
      for (let i = 0; i < count; i++) {
        result.push(
          <div
            key={`star-b-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              backgroundColor: colors[i % colors.length],
              boxShadow: `0 0 ${Math.random() * 6 + 2}px ${colors[i % colors.length]}`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        )
      }
    }
    setStars(result)
  }, [count, bright])
  return <div className="absolute inset-0 overflow-hidden">{stars}</div>
}

function FloatingDust({ count }: { count: number }) {
  const [particles, setParticles] = useState<React.ReactNode[]>([])
  useEffect(() => {
    const result: React.ReactNode[] = []
    for (let i = 0; i < count; i++) {
      result.push(
        <div
          key={`dust-${i}`}
          className="absolute rounded-full bg-blue-300/20"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animation: `float-dust ${Math.random() * 10 + 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      )
    }
    setParticles(result)
  }, [count])
  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{particles}</div>
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef<YouTubePlayer | null>(null)


  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let animFrame: number
    let targetX = -100
    let targetY = -100
    let currentX = -100
    let currentY = -100
    let velocityX = 0
    let velocityY = 0
    let rotation = 0
    let scale = 1
    let pulse = 0
    let lastTime = performance.now()

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 16, 3)
      lastTime = now

      // Smooth spring physics
      const springK = 0.1 * dt
      const damping = 0.88

      const dx = targetX - currentX
      const dy = targetY - currentY

      velocityX = (velocityX + dx * springK) * damping
      velocityY = (velocityY + dy * springK) * damping

      currentX += velocityX * dt
      currentY += velocityY * dt

      // Speed & rotation
      const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY)
      const targetRotation = speed > 0.2 ? Math.atan2(velocityY, velocityX) * (180 / Math.PI) * 0.08 : 0
      const targetScale = 1 + Math.min(speed * 0.006, 0.25)

      // Smooth lerp for rotation and scale
      rotation += (targetRotation - rotation) * 0.08 * dt
      scale += (targetScale - scale) * 0.06 * dt

      // Subtle pulse when idle
      pulse += 0.03 * dt
      const pulseScale = 1 + Math.sin(pulse) * 0.03

      const finalScale = scale * pulseScale

      animFrame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    animFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animFrame)
    }
  }, [])

  const onPlayerReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target
    event.target.playVideo()
    setIsPlaying(true)
  }

  const onPlayerStateChange = (event: { target: YouTubePlayer; data: number }) => {
    if (event.data === (window as any).YT.PlayerState.ENDED) {
      event.target.playVideo()
    }
  }

  const toggleMusic = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo()
        setIsPlaying(false)
      } else {
        playerRef.current.playVideo()
        setIsPlaying(true)
      }
    }
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black" style={{ cursor: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ctext x='0' y='28' font-size='28' fill='white' opacity='0.8'%3E%E2%9C%97%3C/text%3E%3C/svg%3E\") 16 16, auto" }}>
      {/* Background with parallax and animations */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <Image
          src="/cosmic-bg.png"
          alt="Cosmic space landscape"
          fill
          className="object-cover animate-cosmic-float"
          priority
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.05s ease-out',
          }}
        />
        {/* Animated overlay with glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 animate-cosmic-pulse" />

        <ClientStars count={60} bright={false} />
        <ClientStars count={20} bright={true} />

        {/* Shooting stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="shooting-star shooting-star-1" />
          <div className="shooting-star shooting-star-2" />
          <div className="shooting-star shooting-star-3" />
        </div>

        {/* Nebula clouds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[500px] h-[500px] top-[-10%] left-[-5%] rounded-full bg-purple-900/5 blur-[100px] animate-nebula-drift" />
          <div className="absolute w-[400px] h-[400px] top-[20%] right-[-8%] rounded-full bg-blue-900/5 blur-[80px] animate-nebula-drift" style={{ animationDelay: '3s' }} />
          <div className="absolute w-[350px] h-[350px] bottom-[10%] left-[30%] rounded-full bg-indigo-900/4 blur-[90px] animate-nebula-drift" style={{ animationDelay: '6s' }} />
        </div>

        <FloatingDust count={30} />
      </div>




      {/* YouTube Player */}
      <YouTube
        videoId="xE2xV6m1q50"
        onReady={onPlayerReady}
        onStateChange={onPlayerStateChange}
        opts={{
          height: '0',
          width: '0',
          playerVars: {
            autoplay: 0,
            controls: 0,
            loop: 1,
            playlist: 'xE2xV6m1q50',
          },
        }}
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
      />

{/* Content */}
        <div className="relative z-20 min-h-screen w-full flex flex-col px-8 lg:px-16">
        {/* Header */}
        <header className="pt-4 pb-2 flex items-center justify-between">
          {/* Motivational Line - Top Center */}
          <div className="absolute left-1/2 top-3 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <p 
              className="text-sm tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white/70 to-gray-500"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.35em' }}
            >
              Hey, I'm Daim X
            </p>
        </div>

        {/* Music Button */}
        <div className="flex items-center gap-4 ml-auto">

            <button 
              onClick={toggleMusic}
              className={`w-10 h-10 rounded-full border transition-all duration-300 flex items-center justify-center opacity-0 animate-fade-in backdrop-blur-sm ${
                isPlaying 
                  ? 'border-blue-500/50 bg-blue-500/10 shadow-lg shadow-blue-500/30' 
                  : 'border-white/10 bg-white/5 hover:bg-white/10'
              }`}
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <MusicIcon className={`w-4 h-4 transition-colors ${isPlaying ? 'text-blue-400' : 'text-blue-400'}`} />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-8 lg:px-16 py-8">
          <div className="max-w-2xl text-center">
            {/* Motivational Quote */}
            <div className="mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}>
              <p 
                className="text-2xl lg:text-3xl italic text-white/50 leading-relaxed"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                &ldquo;The future belongs to those who believe
                <br />
                in the beauty of their dreams.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="w-8 h-px bg-white/20" />
                <span 
                  className="text-xs text-white/30 tracking-widest uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Eleanor Roosevelt
                </span>
                <div className="w-8 h-px bg-white/20" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-9xl lg:text-[10rem] font-bold mb-6 tracking-tight opacity-0 animate-slide-up leading-none"
              style={{ 
                animationDelay: '0.6s', 
                animationFillMode: 'forwards',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              <span className="text-white" style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.4)) drop-shadow(0 0 60px rgba(255,255,255,0.15))' }}>
                Daim
              </span>
              {' '}
              <span className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 300, filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.4)) drop-shadow(0 0 60px rgba(255,255,255,0.15))' }}>
                X
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-gray-400 mb-8 font-light opacity-0 animate-slide-up max-w-md mx-auto" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              Building the future with code and AI.
            </p>

            {/* Divider */}
            <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent mb-8 opacity-0 animate-slide-up mx-auto" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }} />

            {/* CTA Button */}
            <button className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-sm text-white/80 hover:text-blue-400 flex items-center gap-2 group opacity-0 animate-slide-up mx-auto" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              <span className="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center text-xs text-blue-500">◎</span>
              Focus • Build • Grow
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pb-12 px-8">
          {/* Social Links */}
          <div className="mb-12 opacity-0 animate-slide-up flex justify-center" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center">
              {socialLinks.map((link, i) => {
                return (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-lg group relative overflow-hidden"
                    style={{ minWidth: '140px' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 30px ${link.hoverColor}15`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {/* Arrow icon top-right */}
                    <div className="absolute top-3 right-3">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60 transition-colors" />
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${link.color}18` }}
                      >
                        <img
                          src={link.icon}
                          alt={link.name}
                          className="w-5 h-5"
                          style={{
                            filter: link.color === '#ffffff'
                              ? 'brightness(0) invert(1)'
                              : `drop-shadow(0 0 4px ${link.color}40)`
                          }}
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="text-left">
                      <div className="text-sm font-medium text-white mb-0.5">{link.name}</div>
                      <div className="text-xs text-gray-500 truncate">{link.handle}</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs text-gray-500 opacity-0 animate-fade-in" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            <div>© 2025 Daim X. All rights reserved.</div>



            <div className="flex items-center gap-1 text-gray-500">
              <span>♡</span>
              <span>Made with passion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles to globals */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }


        @keyframes cosmic-float {
          0%, 100% { transform: scale(1.05) translate(0, 0); }
          33% { transform: scale(1.05) translate(10px, -10px); }
          66% { transform: scale(1.05) translate(-5px, 5px); }
        }

        @keyframes cosmic-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes moon-drift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(8px, -5px) rotate(1deg); }
          50% { transform: translate(-3px, -8px) rotate(-0.5deg); }
          75% { transform: translate(-8px, -2px) rotate(0.5deg); }
        }

        @keyframes moon-breathe {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }

        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 0; }
          5% { opacity: 1; }
          15% { opacity: 1; }
          30% { transform: translateX(400px) translateY(400px) rotate(-45deg); opacity: 0; }
          100% { opacity: 0; }
        }

        @keyframes nebula-drift {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          33% { transform: translate(30px, -20px) scale(1.05); opacity: 0.7; }
          66% { transform: translate(-20px, 15px) scale(0.95); opacity: 0.4; }
        }

        @keyframes float-dust {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(15px, -25px) scale(1.2); opacity: 0.6; }
          50% { transform: translate(-10px, -40px) scale(0.8); opacity: 0.2; }
          75% { transform: translate(20px, -15px) scale(1.1); opacity: 0.5; }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }


        .animate-cosmic-float {
          animation: cosmic-float 8s ease-in-out infinite;
        }

        .animate-cosmic-pulse {
          animation: cosmic-pulse 6s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .shooting-star {
          position: absolute;
          width: 120px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 30%, rgba(200,220,255,1) 50%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,0) 100%);
          border-radius: 50%;
          opacity: 0;
          filter: blur(0.3px);
        }

        .shooting-star::after {
          content: '';
          position: absolute;
          right: 0;
          top: -1px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 0 8px 2px rgba(200,220,255,0.8), 0 0 15px 4px rgba(180,200,255,0.4);
        }

        .shooting-star-1 {
          top: 15%;
          left: 10%;
          animation: shooting-star 8s ease-in infinite;
          animation-delay: 2s;
        }

        .shooting-star-2 {
          top: 40%;
          left: 55%;
          width: 80px;
          animation: shooting-star 10s ease-in infinite;
          animation-delay: 5s;
        }

        .shooting-star-3 {
          top: 70%;
          left: 30%;
          width: 100px;
          animation: shooting-star 12s ease-in infinite;
          animation-delay: 9s;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}
