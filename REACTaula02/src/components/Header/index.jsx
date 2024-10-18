import styles from '../Header/Header.module.css'
import logo from '../../assets/logo-header.svg'
import carrinho from '../../assets/mini-cart.svg'
import { Link } from 'react-router-dom'



function Header (){
    return(
        <header className= {styles.header}>
          <div className={styles.headerTop}>
             
             <img src={logo} alt="" />
             <nav>
                <div>
                <input type="text" placeholder='Pesquisar produto' />
                <button className="search-btn">
                <i className="fa fa-search"></i>
                </button>
                </div>
                
                <div>
                <a href="">Cadastre-se</a>
                <button>Entrar</button>
                <a href=""><img src={carrinho} alt="" /></a>

                </div>
                
             </nav> 
           </div>
           <div className={styles.headerBottom}> 
               <Link to="/home">Home</Link>
               <Link to="/home">Produtos</Link>
               <Link to="/home">Categorias</Link>
               <Link to="/home">Meus pedidos</Link>
               <Link to="/login">Login</Link>
               {/* <a href="" className={styles.navLinks}>home</a>
               <a href="">Produtos</a>
               <a href="">Categorias</a>
               <a href="">Meus pedidos</a> */}
           </div>

        </header>
       















    )
}

export default Header