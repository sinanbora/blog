
const filterList = ['Hepsi','benim yazılarım','hayat','gezi','eğlence','can','iş']

export default function ProjectFilter({currentFilter, changeFilter}) {
    const handleClick = (newFilter) =>{
        changeFilter(newFilter)
    }
    return (
        <div className="project-filter">
            <nav>
                <p>Filtrele : </p>
                {filterList.map((f)=>(
                    <button 
                        key={f}
                        onClick={()=>handleClick(f)} 
                        className={currentFilter === f ? 'active' : ''}
                    >{f}</button>
                ))}
            </nav>
        </div>
    )
}
