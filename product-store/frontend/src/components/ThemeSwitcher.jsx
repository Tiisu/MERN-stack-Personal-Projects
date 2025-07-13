import React from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes';

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

  return (
    <div>
        <div>
            {
                theme === 'light' ? (
            <MoonIcon className='inline-block mr-2' /> 
              
                ) : (
                    <SunIcon className='inline-block mr-2' /> 
                )
            }   
        </div>
    </div>
  )
}

export default ThemeSwitcher