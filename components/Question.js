import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet, TextInput, ImageBackground, TouchableOpacity, AsyncStorage, Picker, ScrollView} from 'react-native';
 
 
 
type Props = {};
export default class Question extends Component<Props> {

    

    state ={
        usuario: '', 
        sexo:[
            {
                id: 1,
                nome: 'Selecione o sexo',
            },
            {
                id: 2,
                nome: 'Masculino'                
            },{
                id: 3,
                nome: 'Feminino'
            }
        ],
        idade: '',
        email: '',
        senha: '',
        alergiaAlimento: '',
        confirmaSenha: '',
        tipoUsuario: '',
        radio_props: [
            {label: 'Sim', value: 1 },
            {label: 'Não', value: 0 }
          ],
        resultSexo: '',
        participantes: [],
        teste: false,  
    };

    clearfields = async() =>{
        this.setState({
            usuario: '',
            senha: '',
            confirmaSenha: '',
            email: '',
            alergiaAlimento: '',
            idade: '',
        });
    }

    verificarSenha(senha, confirmaSenha){
        if(senha == confirmaSenha){
            return true;
        }else{
            
            return false;            
        }
    }

    async componentDidMount(){
        const participante = JSON.parse(await AsyncStorage.getItem("@CadastroSensory:sensoryIFRNparticipante")) || [];
       this.setState({
            participantes: participante
        });
    }

    emailExist(email){
        const participantes = this.state.participantes;
        for(var i = 0;i<participantes.length;i++){
            if(participantes[i].email == email){
                return true;
            }
        }
        return false;
    }

    voltarLogin = async() =>{
        this.props.navigation.navigate('LoginScreen');
    }

    cadastrarUsuario = async (usuario, senha, confirmaSenha, email, alergiaAlimento, idade, resultSexo) =>{
        if(usuario != '' && senha != '' && confirmaSenha != '' &&
        email != '' && alergiaAlimento != '' && resultSexo != '' && idade != ''){
            if(this.verificarSenha(senha, confirmaSenha)){
                if(this.emailExist(email)){
                    alert("Email já está cadastrado no sistema"); 
                }else{
                    const participante = {
                        id: Math.floor((Math.random() * 1000)),
                        usuario: usuario,
                        senha: senha,
                        email: email,
                        alergiaAlimento: alergiaAlimento,
                        idade: idade,
                        tipoUsuario: 'Participante',
                        resultSexo: resultSexo,
                    }
                   await this.setState({
                        participantes:[
                          ...this.state.participantes,
                          participante,
                        ]
                      });
             
                    await AsyncStorage.setItem("@CadastroSensory:sensoryIFRNparticipante", JSON.stringify(this.state.participantes));
                    
                    alert("Participante cadastrado com sucesso!");
                    this.props.navigation.navigate('LoginScreen');
                }                
            }else{
                alert("Senhas não são iguais!");
                this.setState({
                    senha: '',
                    confirmaSenha: ''
                });
            }
        }else{
            alert("Preencha todos os campos!");
        }
    }


    render() {
        return (
           
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTex}>Robinho ajeite essa parte</Text>
                </View>
                
                <ScrollView>  
                   <View style={styles.form}>
                        <TextInput
                            style={styles.boxTextInput}
                            placeholder="Usuario"  
                            autoFocus
                            value={this.state.usuario}
                            onChangeText={usuario => this.setState({usuario})}                          
                            /> 
                        <TextInput
                            style={styles.boxTextInput}
                            placeholder="Se possui alguma alergia de algum alimento"  
                            autoFocus
                            value={this.state.alergiaAlimento}
                            onChangeText={alergiaAlimento => this.setState({alergiaAlimento})}
                            /> 
                        <Picker 
                            style={styles.select}
                            selectedValue={this.state.resultSexo}
                            onValueChange={(itemValue, itemIndex) => this.setState({resultSexo: itemValue})}>
                                {
                                    this.state.sexo.map(
                                        sexo =>
                                    <Picker.Item key={sexo.id} label={sexo.nome} value={sexo.nome} style={styles.selectedValue}/>
                                )}
                        </Picker>
                        <TextInput
                            style={styles.boxTextInput}
                            placeholder="Idade"  
                            autoFocus
                            value={this.state.idade}
                            onChangeText={idade => this.setState({idade})}                          
                            />            
                        <TextInput
                            style={styles.boxTextInput}
                            placeholder="Email"  
                            autoFocus
                            value={this.state.email}
                            onChangeText={email => this.setState({email})}                          
                            />                                 
                        <TextInput 
                            secureTextEntry={true}
                            placeholder="Senha"
                            style={styles.boxTextInput} 
                            autoFocus
                            value={this.state.senha}
                            onChangeText={senha => this.setState({senha})}
                            />
                        <TextInput 
                            secureTextEntry={true}
                            placeholder="Confirma Senha"
                            style={styles.boxTextInput} 
                            autoFocus
                            value={this.state.confirmaSenha}
                            onChangeText={confirmaSenha => this.setState({confirmaSenha})}
                            />
                    </View>
                    <View style={styles.bodyButton}>
                        <TouchableOpacity onPress={() => this.cadastrarUsuario(this.state.usuario, this.state.senha, this.state.confirmaSenha, this.state.email, this.state.alergiaAlimento, this.state.resultSexo, this.state.idade)} style={[styles.button, styles.buttonCadastro]}>
                            <Text style={styles.buttonTex}>Cadastrar-se</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.clearfields()} style={[styles.button, styles.buttonClear]}>
                            <Text style={styles.buttonTex}>Limpar Campos</Text>
                        </TouchableOpacity> 
                        <TouchableOpacity onPress={() => this.voltarLogin()} style={[styles.button, styles.buttonVoltar]}>
                            <Text style={styles.buttonTex}>Voltar ao login</Text>
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
    buttonClear:{
        backgroundColor: '#948E8E',
        width: '33%',
        marginLeft: '1.5%',
      },
    buttonCadastro:{
        backgroundColor: '#948E8E',
        alignSelf: 'center',
        width: '33%',
      },
    buttonVoltar:{
        backgroundColor: '#948E8E',
        width: '33%',
        marginLeft: '1.5%',
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
 