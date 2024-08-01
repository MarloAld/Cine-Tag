import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext()
FavoritosContext.displayName = "Favoritos"

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([])

    return (
        <FavoritosContext.Provider
        value={{favorito, setFavorito}}
        >
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext(){ //Declara hook personalizado (hook sempre começa com use)
    const {favorito, setFavorito} = useContext(FavoritosContext) //Semelhante ao useState, mas utilizando o contexto favoritos

    function adicionarFavorito(novoFavorito) { //Cria a função de favoritar
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id) //Verifica se o favorito já está favoritado 
        //(Método some verifica se pelo menos um elemento do array passa no teste)

        let novaLista = [...favorito] //Salva o valor atual de favoritos na variável novaLista

        if(!favoritoRepetido) { //Verifica se não existe nenhum favorito repetido
            novaLista.push(novoFavorito) //Adiciona o novo favorito na variável novaLista
            return setFavorito(novaLista) //Retorna através do método setFavorito a lista atualizada e sai da função
        }
        //Se existir elemento repetido
        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);//Remove o elemento que está repetido através do filter
        return setFavorito(novaLista)//Retorna através do método setFavorito a lista atualizada e sai da função
    }

    return {favorito, adicionarFavorito} //Retorna a lista de favoritos e a função de adicionar
}