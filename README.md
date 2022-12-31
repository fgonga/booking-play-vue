<p align="center">
  <a href="https://www.playframework.com/">
    <img src="https://raw.githubusercontent.com/fgonga/booking-play-vue/main/background.png" alt="Bootstrap logo" width="600" height="490">
  </a>
</p>
<h3 align="center">Booking Play Vue Spa</h3>

<p align="center">
Originalmente criado com o play framework e realmente inspirado no aplicativo de exemplo de reserva fornecidoby seam framework.
  <br>
  <br>
  <a href="https://github.com/fgonga/booking-play-vue/issues/new?assignees=-&labels=bug&template=bug_report.yml">Reportar Bug</a>
  ·
  <a href="https://github.com/fgonga/booking-play-vue/issues/new?assignees=&labels=feature&template=feature_request.yml">Solicitar recurso</a>
</p>


## Booking Play And Vue Spa

É uma versão melhorada do aplicativo original de exemplo do play framework, acrescendo o VueJs .



## Índice

- [Começando](#começando)
- [Estado](#status)
- [O que vem includio](#whats-included)
- [Bugs e novos recursos](#bugs-and-feature-requests)
- [Documentação](#documentation)
- [Contribuir](#contributing)
- [Versões](#versioning)
- [Criadores](#creators)
- [Agradecimentos](#thanks)
- [Copyright e licenças](#copyright-and-license)


## Começando

Opções de início rápido estão disponíveis:

- [Baixe e instale o Play Framework 1.5](https://www.playframework.com/documentation/1.5.x/install)
- Clone este repositorio: `git clone https://github.com/fgonga/booking-play-vue.git`
- Entre na pasta: `cd booking-play-vue`
- Instale as dependençias [npm](https://www.npmjs.com/): `npm install`
- Execute o script [npm](https://www.npmjs.com/): `npm run dev`
- Inicie o play [play](https://www.playframework.com/documentation/1.5.x/install): Play: `play run` 



## Estado




## O que tem dentro

No repositorio, você encontrará os seguintes diretórios e arquivos, agrupando logicamente os recursos.


  <summary>Front-End</summary>


  ```text
  ├── js
│   ├── app.js
│   ├── components
│   │   ├── App.vue
│   │   ├── Child.vue
│   │   └── index.js
│   ├── helpers
│   │   └── error_msg.js
│   ├── lang
│   │   ├── en.json
│   │   └── pt.json
│   ├── layouts
│   │   ├── default.vue
│   │   └── error.vue
│   ├── middleware
│   │   ├── admin.js
│   │   ├── auth.js
│   │   ├── check-auth.js
│   │   ├── guest.js
│   │   ├── locale.js
│   │   └── role.js
│   ├── pages
│   │   ├── application
│   │   ├── auth
│   │   │   └── login.vue
│   │   └── hotel
│   │       ├── index.vue
│   │       └── show.vue
│   ├── plugins
│   │   ├── axios.js
│   │   ├── fontawesome.js
│   │   ├── i18n.js
│   │   ├── index.js
│   │   └── toastr.js
│   ├── router
│   │   ├── index.js
│   │   └── routes.js
│   ├── services
│   │   ├── AuthService.js
│   │   └── HotelService.js
│   └── store
│       ├── helpers.js
│       ├── index.js
│       ├── modules
│       │   ├── auth.js
│       │   └── lang.js
│       └── mutation-types.js
└── scss
    ├── app.scss
    └── images
        └── hotel.jpg
  ```

<summary>Back-End</summary>


  ```text
  ├── Bootstrap.java
├── controllers
│   ├── Application.java
│   ├── BaseController.java
│   └── api
│       ├── Auth.java
│       ├── BaseApiController.java
│       └── Hotel.java
├── models
│   ├── Booking.java
│   ├── Hotel.java
│   └── User.java
├── repositores
│   ├── entities
│   │   ├── AbstractRepository.java
│   │   ├── AuthRepository.java
│   │   └── HotelsRepository.java
│   └── interfaces
│       └── RepositoryInterface.java
└── views
    └── Application
        └── index.html
  ```

## Bugs e solicitações de recursos

Tem um bug ou uma solicitação de recurso? Por favor, seja claro ao descrever o problema ou procure por um problema já resolvido. Se o seu problema ou ideia ainda não foi resolvido, [abra um novo problema](https://github.com/fgonga/booking-play-vue/issues/new/choose).


## Documentação


## Criadores

**Fabrício Gonga**

- <https://instagram.com/fgonga>
- <https://github.com/fgonga>

**Os criadores do play **

- <https://www.playframework.com/>

## Copyright e licença
Code released under the [MIT License](https://github.com/fgonga/booking-play-vue/blob/main/LICENSE). 
