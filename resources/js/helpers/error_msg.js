const error_msg = {
  mensagem_generica() {
    return 'Tente mais tarde ou entre em contacto com o administrador do sistema.';
  },
  get(status) {
    const x = `e${status}`;
    return this[x] ? this[x]() : {
      titulo: 'Erro desconhecido',
      mensagem: '',
      solucao: this.mensagem_generica(),
    };
  },
  e300() {
    return {
      titulo: 'Múltiplas escolhas',
      mensagem: 'Isso pode ocorrer quando houver várias extensões de tipo de arquivo disponíveis ou se o servidor estiver enfrentando desambiguação de sentido de palavra.',
      solucao: this.mensagem_generica(),
    };
  },
  e301() {
    return {
      titulo: 'O recurso movido permanentemente',
      mensagem: 'Uma página  Web ou recurso foi substituído permanentemente por um recurso diferente.',
      solucao: this.mensagem_generica(),
    };
  },

  e302() {
    return {
      titulo: 'Ver Outros',
      mensagem: 'Encontramos o recurso solicitado. No entanto, seu computador não consegiu fazer a leitura apropriada.',
      solucao: this.mensagem_generica(),
    };
  },
  e304() {
    return {
      titulo: ' O recurso solicitado não foi modificado',
      mensagem: 'O recurso solicitado já foi armazenado na memoria do computador e não foram alterados.',
      solucao: this.mensagem_generica(),
    };
  },
  e400() {
    return {
      titulo: 'Solicitação inválida',
      mensagem: 'O servidor não pode retornar uma resposta devido a um erro no cliente. ',
      solucao: 'Tente verificar se todos os campos estão preenchido de forma correta, e tente novamente.',
    };
  },
  e401() {
    return {
      titulo: 'Não autorizado',
      mensagem: 'Você ou o seu Grupo de usuários não tem autorização para visualizar este recurso.',
      solucao: 'Solicite ao administrador do sistema que lhe conceda a devida autorização.',
    };
  },
  e404() {
    return {
      titulo: 'Recurso não encontrado',
      mensagem: 'Você ou o seu Grupo de usuários não tem autorização para visualizar este recurso.',
      solucao: this.mensagem_generica(),
    };
  },
  e403() {
    return {
      titulo: 'Acesso proibido',
      mensagem: 'Você ou o seu Grupo de usuários não tem autorização para visualizar este recurso.',
      solucao: 'Solicite ao administrador do sistema que lhe conceda a devida autorização.',
    };
  },
  e422() {
    return {
      titulo: 'Credenciais informadas não correspondem com nossos registros.',
      mensagem: 'Você ou o seu Grupo de usuários não tem autorização para visualizar este recurso.',
      solucao: 'Tente novamente',
    };
  },
  e429() {
    return {
      titulo: ' “Muitos pedidos.”',
      mensagem: 'Você enviou muitas solicitações em um determinado período de tempo.',
      solucao: 'Aguarde 1 minuto e tente novamente.',
    };
  },

};
export default error_msg;
