# Chatbot do Telegram com Dialogflow

Implementação de um chatbot no Telegram usando Node.js e a plataforma de linguagem natural da Google Dialogflow. Esse projeto foi desenvolvido como um exemplo para o lab *Construindo um chatbotfit no Telegram com Javascript e Node.Js* da [DIO](https://digitalinnovation.one/ "DIO"). Ele permite pesquisar no Youtube por vídeos de treinamento simples para realizar em casa.

### Tecnologias utilizadas

1. **Plataforma de entendimento de linguagem Natural Dialogflow** - disponível em:  [https://dialogflow.cloud.google.com](https://dialogflow.cloud.google.com/ "https://dialogflow.cloud.google.com")
2. **API de Bots do Telegram** - disponível em: [https://core.telegram.org/bots/api](https://core.telegram.org/bots/api "https://core.telegram.org/bots/api")
3. **Módulo de conexão Bot-Node *node-telegram-bot-api*** - disponível em: [https://www.npmjs.com/package/node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api "https://www.npmjs.com/package/node-telegram-bot-api")
4. **Módulo de buscas no Youtube *youtube-node***- disponível em: [https://www.npmjs.com/package/youtube-node](https://www.npmjs.com/package/youtube-node "https://www.npmjs.com/package/youtube-node")
5. **Módulo de integração Node - DialogFlow** - disponível em: [https://www.npmjs.com/package/dialogflow](https://www.npmjs.com/package/dialogflow "https://www.npmjs.com/package/dialogflow")

## Execução

Para executar a aplicação acesse o diretório principal dela e instale as dependências com o comando:

`npm install`

Para executar o Bot rode o comando:

`node index.js`

O Bot será iniciado e ficará escutando quaisquer mensagens que sejam mandadas para ele. Para testar a execução do serviço, abra o Telegram e procure por *DIO Fitness Bot Felipe*. Exemplo de perguntas:

- Me manda um vídeo de pernas
- Treino de bíceps
- Treinamento para braços

O Bot deve devolver uma mensagem com dois links para vídeos do Youtube que sejam referentes ao treinamento da parte do corpo pedida, como na imagem abaixo:

<p style="text-align:center"><img src="https://firebasestorage.googleapis.com/v0/b/repository-c12c5.appspot.com/o/Resposta%20Bot%20Telegram.png?alt=media&token=972198d9-d5f3-4164-92f3-adc41be57e7a" height="360"></p>

Para incrementar o projeto original foram adicionadas mais respostas no DialogFlow as requisições de treinos. Além disso, a saída de sugestões de vídeos foi melhorada, passando a exibir um vídeo por mensagem para facilitar a legibilidade do conteúdo sugerido.