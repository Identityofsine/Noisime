import { tv } from 'tailwind-variants'

const input = tv({
  base: /*tw:*/ `
    flex flex-col gap-1 overflow-y-auto max-h-60 p-2 rounded-md border border-gray-300 
    shadow-lg bg-white transition-colors duration-200
  `
})

interface ISoundSelectorProps {
  className?: string
  sounds: (Record<string, string | number> & { soundId: string })[]
  isActive?: boolean
  handleSoundSelect?: (soundId: string) => void
}

function SoundSelector({
  sounds,
  className = '',
  isActive = false,
  handleSoundSelect = () => {}
}: ISoundSelectorProps) {
  return (
    <div
      className={`
        relative w-full
        ${!isActive ? 'hidden' : 'block'}
      `}
    >
      <div
        className={input({
          className: `absolute top-full z-10 mt-2 w-full ${className}`
        })}
      >
        {sounds.map(sound => (
          <button
            key={sound.soundId}
            className="w-full rounded-md px-3 py-2 text-left transition-colors hover:bg-gray-100"
            onClick={() => handleSoundSelect(sound.soundId)}
          >
            <span className="text-sm font-medium">{sound.soundId}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SoundSelector
