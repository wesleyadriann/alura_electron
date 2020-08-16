const jsonfile = require('jsonfile-promised');
const fs = require('fs');
const moment = require('moment');

class Data {
  static criaArquivoDeCurso(nomeDoArquivo, conteudo) {
    return new Promise((resolve, reject) => {
      jsonfile.writeFile(nomeDoArquivo, conteudo)
        .then(() => {
          console.log(`${nomeDoArquivo} criado com sucesso`)
          resolve();
        })
        .catch(reject);
    })
  }

  static async salvaDados(nomeCurso, tempo) {
    const arquivoDoCurso = `${__dirname}/data/${nomeCurso}.json`;
    const arquivoExiste = fs.existsSync(arquivoDoCurso);
    if(!arquivoExiste) {
      await this.criaArquivoDeCurso(arquivoDoCurso, {});
    }
    this.adicionaTempoAoCurso(arquivoDoCurso, tempo);

  }

  static adicionaTempoAoCurso(arquivoDoCurso , tempo) {
    const dados = {
      ultimoEstudo: moment().format(),
      tempo: tempo,
    };

    jsonfile.writeFile(arquivoDoCurso, dados)
      .then(() => console.log('salvo com sucesso'))
      .catch(console.log);
  }

  static pegaDados(nomeCurso) {
    const arquivoDoCurso = `${__dirname}/data/${nomeCurso}.json`;
    return jsonfile.readFile(arquivoDoCurso);
  }
}

module.exports = Data;
