import './Rodape.css';
const Rodape = (props) => {
    const anoAtual = new Date().getFullYear();
    return (
        <footer className="rodape">
            <p> React Básico - {anoAtual} - {props.criador}</p>
        </footer>
    );
}
export default Rodape;