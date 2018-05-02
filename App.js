
import React, { Component } from 'react';
import {View,Alert,TextInput,} from 'react-native';
import { Container, Header, Content, Footer,Text,Button,Right, }
from 'native-base';


class App extends Component {
  constructor(){
    super()
    this.state = {massa:'',tinggi:'', hasil:'',diagnosa:''}
  }

  submitHandler = () => {
    let massa = this.state.massa
    let tinggi = this.state.tinggi * 0.010 
    let hasil = this.state.hasil
    let diagnosa = this.state.diagnosa
    
    const IMT = (massa / Math.pow(tinggi,2))

    this.setState({
        hasil:IMT
      })

    if (IMT < 18.5) {
      this.setState({
        diagnosa:'BB Anda Kurang'
      })
    } else if( IMT > 18.5 && IMT < 24.9){
      this.setState({
        diagnosa:'BB Anda Ideal'
      })
    } else if(IMT > 25.0 && IMT < 29.9){
      this.setState({
        diagnosa:'BB Anda Berlebih'
      })
    } else if(IMT > 30.0 && IMT < 39.9){
      this.setState({
        diagnosa:'BB Anda Sangat Berlebih'
      })
    } else if(IMT>39.9){
      this.setState({
        diagnosa:'Obesitas'
      })
    }
    }
  
  onSumbitChangeHandlerMassa = (val) =>{
    this.setState({
      massa: val
    })
  }
 
  onSumbitChangeHandlerTinggi = (val) => {
    this.setState({
      tinggi: val
    })
  }

  render() {
    return (
      <Container>


<Header style = {{ backgroundColor:'green'}}>
<Text style ={{alignSelf:'center',color:'white'}}>INDEKS MASA TUBUH </Text>
</Header> 


        <TextInput 
          placeholder="Massa (Kg)"
          style={{width:'100%',alignSelf:'center'}}
          onChangeText={this.onSumbitChangeHandlerMassa}
        />
        <TextInput
          placeholder="Tinggi (Cm)"
          style={{ width: '100%',alignSelf:'center'}}          
          onChangeText={this.onSumbitChangeHandlerTinggi}
        />

      <Button full style = {{ alignSelf:'center',backgroundColor:'green',width: 380,
      height: 45, margin:50}}
      onPress={this.submitHandler}>
      <Text> HITUNG MT </Text>
      </Button>

      <Content  style = {{ alignSelf:'center'}}>
      <Text  style = {{ alignSelf:'center'}}>Massa tubuh:</Text>
      <Text style = {{ alignSelf:'center',fontWeight:'bold'}}>{this.state.massa} Kg</Text>
      <Text  style = {{ alignSelf:'center'}}>Tinggi badan:</Text>
      <Text  style = {{ alignSelf:'center',fontWeight:'bold'}}>{this.state.tinggi} Cm</Text>
      <Text  style = {{ alignSelf:'center'}}>Indeks massa tubuh</Text>      
      <Text  style = {{ alignSelf:'center',fontWeight:'bold'}}>{this.state.hasil}</Text>      
      <Text  style = {{ alignSelf:'center'}}>Diagnosa</Text>      
      <Text  style = {{ alignSelf:'center',color:'black',fontWeight:'bold'}}>{this.state.diagnosa}</Text>      
      </Content>

      </Container>
    );
  }
}

export default App;