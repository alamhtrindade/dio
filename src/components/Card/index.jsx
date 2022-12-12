import React from 'react'

import { FiThumbsUp } from 'react-icons/fi'

import { CardContainer, Content, HasInfo, ImageBackground, UserInfo, PostInfo, UserPicture } from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://www.vounajanela.com/wp-content/uploads/2016/09/capa-6-1050x599.jpg" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/47890311?v=4" />
                <div>
                    <h4>Alam Henrique</h4>
                    <p>Há 5 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4> Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito a curso de html e css no bootcamp dio do Globo avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}
 export { Card }