import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet,Picker, TextInput, ImageBackground, TouchableOpacity, AsyncStorage, ScrollView} from 'react-native';
 
 
 
type Props = {};
export default class Question extends Component<Props> {

    

    state ={
        opicaoParticipante:[
            {
                id: 0,
                value: "Selecione sua Opinião",
            },
            {
                id: 1,
                value: "Desgostei muitíssimo"
            },
            {
                id: 2,
                value: "Desgostei muito",
            },
            {
                id: 3,
                value: "Desgostei moderadamente",
            },
            {
                id: 4,
                value: "Desgostei ligeiramente",                
            },
            {
                id: 5,
                value: "Nem gostei, nem desgostei"
            },
            {
                id: 6,
                value: "Gostei ligeiramente",
            },
            {
                id: 7,
                value: "Gostei moderadamente",
            },
            {
                id: 8,
                value: "Gostei muito"
            },
            {
                id: 9,
                value: "Gostei muitíssimo"
            }
        ],
        resultOpcao: '',
        usuario: '',
        participacoes: [],
    };
 

    async componentDidMount(){
        const participante = JSON.parse(await AsyncStorage.getItem("@SessaoLogin:sensoryIFRN")) || [];
        const participacoes = JSON.parse(await AsyncStorage.getItem("@Participancao:analise")) || [];
       this.setState({
            usuario: participante,
            participacoes: participacoes
        });         
    }

    registrarParticipacao = async(nomeUsuario, nomeProduto, resultOpcao)=>{
        const participacao={
            id: Math.floor((Math.random() * 1000)),
            nome: nomeUsuario,
            produto: nomeProduto, 
            resultOpcao: resultOpcao,
          }

          await this.setState({
            participacoes:[
              ...this.state.participacoes,
              participacao,
            ]
          });
      
          await AsyncStorage.setItem("@Participacao:analise", JSON.stringify(this.state.participacoes));
          alert("Participação com sucesso!");
          this.props.navigation.navigate('Participante');
    }

    render() {
        return (
           
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTex}>Avalie o produto: {this.props.navigation.state.params.produto}</Text>
                </View>
                
                <ScrollView>  
                   <View style={styles.form}>
                        <Picker 
                            style={styles.select}
                            selectedValue={this.state.resultOpcao}
                            onValueChange={(itemValue, itemIndex) => this.setState({resultOpcao: itemValue})}>
                                {
                                    this.state.opicaoParticipante.map(
                                        opcao =>
                                    <Picker.Item key={opcao.id} label={opcao.value} value={opcao.value} style={styles.selectedValue}/>
                                )}
                        </Picker>
                    </View>
                    <View style={styles.bodyButton}>
                        <TouchableOpacity onPress={() => this.registrarParticipacao(this.state.usuario.email, this.props.navigation.state.params.produto, this.state.resultOpcao)} style={[styles.button, styles.buttonCadastro]}>
                            <Text style={styles.buttonTex}>Salvar participacao</Text>
                        </TouchableOpacity>                                                   
                    </View>
                </ScrollView>   
                
            </View>
            
        );
    }    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ccc',
    },
    header:{
        backgroundColor: 'white',
        padding: 12,
        borderBottomWidth: 4.5,
        borderColor: 'green',
    },
    imagemFundo: {
        width: '100%', height: '100%',
      },
    headerTex: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    bodyForm:{
        height: '100%',
        backgroundColor: 'white',
        padding: 15,
    },
    form:{
        width: '98%',
        alignSelf: 'center',  
    },
    boxTextInput:{
        borderRadius: 50,
        backgroundColor: '#fff',
        margin: '2.5%',
    },

    buttonCadastro:{
        backgroundColor: '#948E8E',
        alignSelf: 'center',
        width: '33%',
      },
 
      button:{
        borderRadius: 5,       
        padding: 15,    
        marginTop: 5, 
                
      },
    
      buttonTex:{
        color: '#fff',
        fontSize: 17,
        textAlign: 'center',
     },

     bodyButton:{
        marginBottom: 100,
        alignSelf: 'center',        
        flexDirection: 'row',
        width: '98%',
     },

    select:{
        backgroundColor: '#fff',
        width: '95%',
        alignSelf: 'center',
    },
     

});
 