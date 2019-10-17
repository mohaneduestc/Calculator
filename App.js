import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {
  state={
      result:'',
      finalResult:''
  }
  CalculateResult=()=>{
    let opt = this.state.result;
    this.setState({finalResult:eval(opt)})
  }
  validate=()=>{
    const opt = this.state.result;
    switch (opt.slice(-1)) {
        case '+':
        case '-':
        case '*':
        case '/':
            return false
    }
    return true
  }
    buttonPressed=(i)=>{
        if (i == '=') {
            return this.validate() && this.CalculateResult();
        } else {
            this.setState({result:this.state.result+i})
        }
        
    }
    operate=(operation)=>{
        switch(operation){
            case 'Del':
            let opt = this.state.result.split('');
                opt.pop()
                this.setState({result:opt.join('')})
                break;
            
            default:
                this.setState({result:this.state.result+operation})
        }

    }
    render() {
        let rows=[]
        let nums = [[1,2,3],[4,5,6],[7,8,9],[".",0,"="]]
        for (let i = 0; i < 4; i++) {
            let row =[]
            for (let j = 0; j < 3; j++) {
                row.push(
                    <TouchableOpacity onPress={()=>this.buttonPressed(nums[i][j])} style={styles.btn}>
                        <Text style={{fontSize:23, color:'#fff'}} >{nums[i][j]}</Text>
                    </TouchableOpacity>
                )  
            }
            rows.push( <View  style={styles.rows}>{row}</View>)
            
        }

        let columns=[]
        let operations = ["Del","+","-","*","/"]
        for (let i = 0; i < operations.length; i++) {
            columns.push(
                <TouchableOpacity style={styles.btn} onPress={()=>this.operate(operations[i])} >
                    <Text style={{fontSize:23, color:'#fff'}} >{operations[i]}</Text>
                </TouchableOpacity>
            ) 
        }
        let finalColumn=[]
        finalColumn.push(<View  style={styles.columns}>{columns}</View>)
    return (
      <View style={styles.container}>
      
          <View style={styles.result} >
            <Text style={styles.resultText}>{this.state.result}</Text>
          </View>
          <View style={styles.calculation} >
          <Text style={styles.calculationText}>{this.state.finalResult}</Text>
          </View>
          <View style={styles.buttons} >
            <View style={styles.numbers} >
                {rows}
               
            </View>
          <View style={styles.operations} >
            {finalColumn}
          </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    calculationText:{
        fontSize:50,
        alignItems:'flex-start',
        color:'#b4b4b4'
    },
    btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'stretch'
    },
    resultText:{
        fontSize:30,
        color:'#b4b4b4'
    },
    result:{
        flex:2,
        justifyContent:'center',
        alignItems:'flex-end',
        backgroundColor:'#fff'
    },
    calculation:{
        justifyContent:'center',
        alignItems:'flex-end',
        flex:1,
        backgroundColor:'#fff'
    },
    buttons:{
        flex:7,
        flexDirection:'row'
    },
    numbers:{
        flex:3,
        backgroundColor:'#434343'
    },
    operations:{
        flex:1,
        backgroundColor:'#636363'
    },
    rows:{
        flex:1,

        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    },
    columns:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
    }
})
