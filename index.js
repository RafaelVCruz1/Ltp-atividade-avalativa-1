class Noticia {
  constructor(titulo, data_publicacao, resumo, texto) {
    this.titulo = titulo;
    this.data_publicacao = data_publicacao
    this.resumo = resumo
    this.texto = texto
  }

  mostrarNoticia(){
   return this.titulo + "\n" + "\n" + this.data_publicacao + "\n" + "\n" + this.resumo + "\n" + "\n" + this.texto
}
  
}


let noticia = new Noticia("MPE abre inquérito para apurar falta de medicamentos no Hospital Municipal de Ivinhema", "23/03/2022", "O Ministério Público Estadual (MPE), por meio da 2ª Promotoria de Justiça de Ivinhema, tornou pública a instauração do Inquérito Civil n. 06.2022.00000264- 7, para apurar a falta ou insuficiência de medicamentos para a realização de cirurgias e internações no âmbito do Hospital Municipal de Ivinhema.", "O procedimento é assinado pelo promotor Allan Thiago Barbosa Arakaki e tem o MPE como parte requerente, onde, na mesma publicação em diário oficial, foi tornada pública a instauração do Inquérito Civil n. 06.2022.00000276- 9, que visa apurar “denúncia de possível assédio moral, ocorrido em 17/03/2022”, nas dependências do mesmo hospital. O procedimento também tem o MPE como requerente, já o requerido é o prefeito Juliano Barros Donato, mais conhecido, especialmente nas redes sociais, como Juliano Ferro – o prefeito “mais louco do Brasil - barracão véio assombrado.")

console.log(noticia.mostrarNoticia())