import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <Image
            src="/romcode.png"
            alt="RomeCode"
            width={120}
            height={40}
            className="mx-auto animate-pulse"
            priority
          />
        </div>
        
        <div className="flex space-x-2 justify-center items-center">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
        </div>
        
        <p className="mt-4 text-desgray text-sm">Loading RomeCode...</p>
      </div>
    </div>
  )
} 