import React, {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component{
  
  constructor(props){
    super(props);
    // cria os states para o texto e imagem
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    };

    // cria o bind do metodo quebrabiscoito
    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    // cria o array de frases
    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distancia entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];

  }

  quebraBiscoito(){
    //pega um numero aleatorio da array de frases, que nesse exemplo vai de 0 a 6.
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

    //passa então para a state textoFrase o numero escolhido para exibir a frase
    //muda tb o state da imagem para mudar para a imagem de biscoito aberto
    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
        />

        {/* onde sera exibida a frase ao quebrar o biscoito */}
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        {/* cria o botao para quebrar. o componente de botão foi o TouchableOpacity*/}
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
});

export default App;