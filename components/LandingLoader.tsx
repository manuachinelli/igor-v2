'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LandingLoader() {
  const [step, setStep] = useState<'human' | 'logo' | 'text'>('human')
  const router = useRouter()

  useEffect(() => {
    const t1 = setTimeout(() => setStep('logo'), 2000)
    const t2 = setTimeout(() => setStep('text'), 3000)
    const t3 = setTimeout(() => router.push('/login'), 5000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-[#f9f9f9] flex-col transition-all duration-700 ease-in-out">
      {step === 'human' && (
        <img
          src="/human-outline.svg"
          alt="Human figure"
          className="w-28 h-28 opacity-100 transition-opacity duration-700"
        />
      )}

      {step === 'logo' && (
        <Image
          src="/logo.png"
          alt="IGOR logo"
          width={120}
          height={120}
          className="opacity-100 animate-pulse drop-shadow-lg transition-opacity duration-700"
        />
      )}

      {step === 'text' && (
        <div className="mt-4 text-center text-gray-700 transition-opacity duration-700">
          <p className="text-md italic">AI is taking over...</p>
          <p className="text-xl font-semibold mt-1">Bienvenido a IGOR</p>
        </div>
      )}
    </div>
  )
}
