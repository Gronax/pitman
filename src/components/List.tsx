import styles from '../styles/list.module.scss'
import { Props } from '../types/layout'

const List = ({ children, title }: Props) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.listContainer}>
        {children}
      </div>
    </>
  )
}

export default List
