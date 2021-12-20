export class Arquivo {

  //Agenda (array) contendo as informações dos alunos.
  agenda : Array<any>;
  constructor () { 
     this.agenda  =  [ 
        { nome : 'Nattana Gasparim', ru : '1074299', curso : 'Análise e Desenvolvimento de Sistemas', nascimento : '19/08/1990' },
        { nome : 'Daniel Ciuciuricco', ru : '1542632', curso : 'Análise e Desenvolvimento de Coisas', nascimento : '06/06/1996' },
        { nome : 'Lele Gasparim', ru : '5252299', curso : 'Análise e Desenvolvimento de Sistemas', nascimento : '04/07/1995' },
        { nome : 'Laura Mandaçaia', ru : '1551025', curso : 'Design de Interiores', nascimento : '04/05/2020' },
        { nome : 'Alice Jataí', ru : '5895126', curso : 'Arquitetura', nascimento : '25/05/2022' },
     ]; 
  } 
}