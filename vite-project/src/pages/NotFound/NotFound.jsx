import styles from './NotFound.module.css';
const NotFound = () => {
    return (
       <div className={styles.NotFound}>
        <h1>404</h1>
        <p>Página não encontrada</p>
         </div>
    );
};


export { NotFound };