
export function Pizza ({icon, type, price, isActive, onClick, i}) {
         
    return ( 
      
    
     <button 
     key={i} 
     type="button" 
     className={`btn ${isActive ? 'btn-success' : 'btn-light'}`}
     onClick={onClick}
     >
        {icon} {type} ${price}
    </button>
        

    )
}
        