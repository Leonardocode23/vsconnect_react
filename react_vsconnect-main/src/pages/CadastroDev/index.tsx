import "./style.css"

function CadastroDev() {



    return (
        <>
         <div id="sombra"></div>
    <header>
        <div className="container header_conteudo">
            {/* <!-- <a className="menu_barras" href="#"><img onClick={mostrarMenu()} src="../Imagens/Menu de barras.svg" alt=""/></a> -->
            <!-- Acessibilidade ARIA
            aria-label = para indicar o que o elemento faz.
            aria-expanded = atributo que salva o status do botão (expandido ou nao - true ou false).
            aria-control = especifica qual elemento esta sendo controlado atraves do Id.
            aria-haspopup = indica que o elemento tem um popup (true ou false).
            --> */}
            <a className="menu_barras" id="menu_barras" aria-label="abrir menu" aria-expanded="false"
                aria-controls="menu_links" aria-haspopup="true" onClick={mostrarMenu()} href="#">
                <div className="barras"></div>
            </a>
            <img className="header_logo" src="../img/logo.svg" alt=""/>
            <nav>
                <div id="menu_links" className="menu_links">
                    <a href="../Home/index.html">home</a>
                    <a href="#">serviços</a>
                    <a href="../CadastroDev/index.html">cadastro</a>
                </div>
                <a className="header_icone_login" href="../Login/index.html">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path
                            d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                    </svg>
                </a>
                <a className="header_botao_login" href="../Login/index.html">login</a>
            </nav>
        </div>
    </header>
            <main className="main_cadastro">
                <div className="container container_cad">
                    <div className="cad_conteudo">
                        <h1>Cadastro</h1>
                        <hr/>
                            <form className="cad_formulario" action="">
                                <div className="cad_box_input">
                                    <label htmlFor="nome">Nome Completo:</label>
                                    <input type="text" id="nome" placeholder="Digite aqui seu nome:"/>
                                </div>
                                <div className="cad_box_input">
                                    <label htmlFor="email">E-mail:</label>
                                    <input type="email" id="email" placeholder="Digite aqui seu e-mail:"/>
                                </div>
                                <div className="cad_box_input">
                                    <label htmlFor="senha">Senha:</label>
                                    <input type="password" id="senha" placeholder="Digite aqui sua senha:"/>
                                </div>

                                <span>Endereço:</span>
                                <hr/>

                                    <div className="cad_box_input">
                                        <label htmlFor="cep">Cep:</label>
                                        <input type="text" id="cep" maxLength={9} onKeyUp={mascaraCep}
                                            placeholder="Digite aqui seu Cep:"/>
                                    </div>

                                    <div className="cad_box_input">
                                        <label htmlFor="logradouro">Logradouro:</label>
                                        <input type="text" id="logradouro" placeholder="Digite aqui seu Logradouro:"/>
                                    </div>

                                    <div className="cad_linha1_input">
                                        <div className="cad_box_input2">
                                            <label htmlFor="numero">Numero:</label>
                                            <input type="text" id="numero" placeholder="Digite o Nº:"/>
                                        </div>

                                        <div className="cad_box_input2">
                                            <label htmlFor="bairro">Bairro:</label>
                                            <input type="text" id="bairro" placeholder="Digite aqui seu Bairro:"/>
                                        </div>
                                    </div>

                                    <div className="cad_linha2_input">
                                        <div className="cad_box_input2">
                                            <label htmlFor="cidade">Cidade:</label>
                                            <input type="text" id="cidade" placeholder="Digite aqui sua Cidade:"/>
                                        </div>

                                        <div className="cad_box_input2">
                                            <label className="cad_uf" htmlFor="uf">UF:</label>
                                            <input type="text" id="uf" maxLength={2} placeholder="Digite a UF:" />
                                        </div>
                                    </div>

                                    <div className="cad_linha_checkbox">
                                        <span>Cliente</span>
                                        <div className="cad_container_checkbox">
                                            <input className="cad_checkbox" type="checkbox" name="checkbox" id="checkbox" />
                                            <label className="cad_label" htmlFor="checkbox"></label>
                                            <div className="cad_box_checkbox"></div>
                                            <div className="cad_hard_skill">
                                                <span>Hard Skills</span>
                                                <hr />
                                                <div className="cad_box_skills">
                                                    <span>Selecione uma Skill para adicionar</span>
                                                    <div className="cad_linha_select">
                                                        <select name="" id="cad_select_skill">
                                                            <option value="" selected disabled>Selecione</option>
                                                        </select>
                                                        <input type="button" value="Inserir" id="cad_btn_inserir" />
                                                    </div>
                                                    <div id="cad_lista_skills">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span>Desenvolvedor</span>
                                    </div>


                                    <input className="cad_botao" type="button" value="Cadastrar"/>
                                    </form>
                                </div>
                            </div>
                        </main>

                    </>

                    )
}
                    export default CadastroDev