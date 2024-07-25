import Rodape from "components/Rodape";

const { default: Cabecalho } = require("components/Cabecalho");

function Inicio() {
    return (
        <>
            <Cabecalho />

            <Rodape />
        </>
    )
}

export default Inicio