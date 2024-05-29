import { ShoppingCartSimple, User } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar(){  

return(
    <>
    <div className='w-full flex justify-center py-4
                               bg-indigo-900 text-white'>
    
        <div className="container flex justify-between text-lg">
                    
            <Link to="/home" className="text-2xl font-bold">Farmácia Carioca</Link>
            <div></div>
            <div className='flex gap-4'>               
                <Link to='/categoria' className='hover:underline'>Categorias</Link>
                <Link to='/cadastrarCategoria' className='hover:underline'>Cadastra Categoria</Link>
                <ShoppingCartSimple size={32} />
                <User size={32} />
            </div>
        </div>
    </div>
</>
)
}

export default Navbar