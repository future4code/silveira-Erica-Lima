import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])

  const onClickCurtida = (event) => {
    // setCurtido(event.target.value)
    if(curtido){
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)
    }else {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas + 1)
    }
  };

  const onClickComentario = (event) => {
    // setNumeroComentarios(event.target.value)
     setComentando(!comentando)
  };


  const enviarComentario = (comentario) => {
    // setComentando(comentario.target.value)
    const listaDeComentarios = [...setComentarios, comentario]

    setComentarios({
      comentarios: listaDeComentarios,
      comentando: false,
      numeroComentarios: setNumeroComentarios + 1
    })
  };


  const iconeCurtida = setCurtido ?  (iconeCoracaoPreto) : (iconeCoracaoBranco) 

  const caixaDeComentario =  setComentando ? (
    <SecaoComentario enviarComentario={enviarComentario}/>
  ): (
    
  setComentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          // icone={iconeCurtida}
        icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          // valorContador={numeroCurtidas}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          // valorContador={numeroComentarios}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {/* {caixaDeComentario} */}
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post