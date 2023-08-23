//estilização
import "./style.css";


import { useParams} from "react-router-dom"

import { useEffect, useState } from "react";

import api from "../../utils/api";

function VisualizarServico() {

    const {idServico} = useParams()    

    const [titulo, setTitulo] = useState<string>("")
    const [valor, setValor] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const [listaSkills, setListaSkills] = useState<string[]>([])

    function buscarServicoPorID(){
        api.get(`servicos/${idServico}`).then((response:any) => {
            setTitulo(response.data.nome)
            setValor(response.data.valor)
            setDescricao(response.data.descricao)
            setListaSkills(response.data.techs)
        }).catch((error) => {
            console.log("Erro ao buscar os dados", error)
        })
    }

    useEffect(() => {
        buscarServicoPorID()
        document.title = "Serviço " + titulo + " - VSConnect"
    },[])


    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{titulo}</h2>
                        <span>R${valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                        {
                            listaSkills.map((skill:any, index: number) => {
                                return <span key={index}>{skill}</span>
                            })
                        }
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;