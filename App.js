import React, { Component } from 'react';
import {
  Platform
} from 'react-native';

import {createSwitchNavigator, createStackNavigator, createDrawerNavigator} from 'react-navigation';
import LoginScreen from './telas/LoginScreen';
import CadastroScreen from './telas/CadastroScreen';
import LoadingLoginScreen from './telas/LoadingLoginScreen';
import Admin from './telas/Admin';
import Coordenador from './telas/Coordenador';
import Participante from './telas/Participante';
import LogoutScreen from './telas/LogoutScreen';
import CadastrarSensoryScreen from './telas/CadastrarSensoryScreen';
import ListSensory from './components/ListSensory';
import Question from './components/Question';
import ListParticipantes from './telas/ListParticipantes';
 

type Props = {};
export default class App extends Component<Props> {

  
  render() {
    return (
      <Switch />
    );
  }
}

const DrawerAdmin = createDrawerNavigator(
  {
    Admin: Admin,
    LogoutScreen: LogoutScreen,
  },
  {
    initialRouteName: 'Admin',
  }
);

const DrawerCoordenador = createDrawerNavigator(
  {
    Coordenador: Coordenador,
    ListParticipantes: ListParticipantes,
    LogoutScreen: LogoutScreen,
  },
  {
    initialRouteName: 'Coordenador',
  }
);

const DrawerParticipante = createDrawerNavigator(
  {
    
    Participante: Participante,
    LogoutScreen: LogoutScreen,
  },
  {
    initialRouteName: 'Participante',
  }
);

const StackAdmin = createStackNavigator(
  {
    DrawerAdmin: DrawerAdmin,
  },
  {
    initialRouteName: 'DrawerAdmin',
  }
);

const StackCoordenador = createStackNavigator(
  {
    CadastrarSensoryScreen: CadastrarSensoryScreen, 
    
    DrawerCoordenador: DrawerCoordenador,
  },
  {
    initialRouteName: 'DrawerCoordenador',
  }
);

const StackParticipante = createStackNavigator(
  {
    Question: Question,
    ListSensory: ListSensory,
    DrawerParticipante: DrawerParticipante,
  },
  {
    initialRouteName: 'DrawerParticipante',
  }
);

const Switch = createSwitchNavigator(
  {
    LoginScreen: LoginScreen,
    LoadingLoginScreen: LoadingLoginScreen,
    CadastroScreen: CadastroScreen,
    StackAdmin: StackAdmin,
    StackCoordenador: StackCoordenador,
    StackParticipante: StackParticipante,
  },
  {
    initialRouteName: 'LoadingLoginScreen',
  }
);




