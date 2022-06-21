import { useState } from 'react';
import { useTheme } from '../hooks/useTheme'
import  './ThemeSelector.css'


const themeColors = ['#1abc9c','#e67e22','#34495e','#17c0eb','#ff4d4d']
export default function ThemeSelector() {
    const { changeColor } = useTheme();
    const [saveColor, setSaveColor] = useState('');
    
    return (
        <div className='theme-selector'>
            <div className='theme-buttons'>
                {themeColors.map(color => (
                    <div
                        key={color}
                        onClick={()=>{
                            changeColor(color)
                            localStorage.setItem('SelectedColor',setSaveColor(color))
                            console.log(localStorage.getItem('SelectedColor'))
                        }}
                        style={{background: localStorage.getItem('SelectedColor') || saveColor}}
                    />
                ))}
            </div>
        </div>
    )
}