import './Rodape.css';

const Rodape = (props) => {
    const anoAtual = new Date().getFullYear();

    return (
        <footer className="rodape">
            <p>
                Feito com React + Vite · {anoAtual} · {props.criador}
            </p>
        </footer>
    );
};

export default Rodape;
