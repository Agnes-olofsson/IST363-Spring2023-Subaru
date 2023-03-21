import { useState } from 'react';
import Button from './Button';
import NavOverlay from './NavOverlay';

import styles from './header.module.css';

const Header = ({children}) => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    return <header className={styles.header}>
         <Button 
         label="Menu" 
         clickHandler={() => {
            setMenuVisible(true);
         }}
         />
        {isMenuVisible && 
        <NavOverlay 
        closeHandler={() => {
            setMenuVisible(false);
        }}
        />
    }
    {children}
    </header>
}
export default Header