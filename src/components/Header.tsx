import { useEffect } from "react"
import { modeType } from "../types"

function Header({mode,setMode}:{mode:modeType,setMode:(mode:modeType) => void}) {

  
  useEffect(() => {
    document.body.classList.toggle('dark')  
  }, [mode])
  
  const typeIcon = mode === 'light' ? 'sun' : 'moon'

  return (
    <header className="flex items-center justify-between">
        <h1 className="text-2xl md:text-4xl font-semibold uppercase tracking-[8px] md:tracking-[12px] text-white">Todo</h1>
        <button onClick={() => setMode( mode === 'dark' ? 'light' : 'dark' )}>
            <img src={`icon-${typeIcon}.svg`} alt={`icon of ${typeIcon}`} />
        </button>
    </header>
  )
}

export default Header