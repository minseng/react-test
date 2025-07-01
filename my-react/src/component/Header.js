import styled from 'styled-components';
import styles from "./Header.module.css";


const Header = ()=> {

const HeaderWrapper = styled.header`
    background: #f5f5f5;
    padding: 20px;
    `;

    return (
        <header>
            <HeaderWrapper>안녕</HeaderWrapper>
        <div className="d-flex" >
            <div className="d-l">
            <a href="" className={styles.logo + ' text-red-500'}>로고</a>
            <a href="#" className={`${styles.logo} text-red-500 text-[80px]`}>로고</a>

            <a href="#" className="text-[40px]">로고</a>

            <a href="#" className="text-[30px]">로고</a>

            </div>
            <div className="d-r">
            <nav className={styles["nav-item"]}>
                    메뉴항목
                </nav>
            </div>
        </div>
    </header>
    )
    
};



export default Header;