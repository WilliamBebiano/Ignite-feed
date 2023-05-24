import styles from './Avatar.module.css'
import PropTypes from 'prop-types';

export function Avatar({hasBorder = true, src}){

 return(
    <img 
    src={src} 
    className={hasBorder? styles.avatarWithBorder :styles.avatar} />
  )
}

Avatar.propTypes = {
  hasBorder: PropTypes.bool.isRequired,
  src: PropTypes.string
}