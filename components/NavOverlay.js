import Button from './Button'
import styles from './navoverlay.module.css'

const NavOverlay = ({ closeHandler }) => {
    return <div className={styles.navoverlay}>
    <Button
    label="close"
    clickHandler= {closeHandler}
    />
    </div>

}
export default NavOverlay