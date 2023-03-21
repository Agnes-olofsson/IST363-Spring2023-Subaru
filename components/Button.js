import classnames from 'classnames/bind';
import styles from './button.module.css';

let cx = classnames.bind(styles);

const Button = ({
    clickHandler, //avalable to be used from the header page
    label ="Default",
    type="secondary"  //deconstructing
}) => { 
    let buttonClasses = cx({
        btn: true,
        primary: type === "primary",
        secondary: type === "secondary"
    });                                                      //the () håller alltid i props = man kan skriva label === betyder check to see if true
    
    return <button onClick={clickHandler} className={buttonClasses}>{label}</button>
}
export default Button