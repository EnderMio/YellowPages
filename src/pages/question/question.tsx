
import { View, Image } from "@tarojs/components";
import  { useState } from 'react';
import './question.scss'
import Click from '../question/imgs/click.png'

const Question=()=>{
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0);
    const[count3,setCount3]=useState(0);
    const[count4,setCount4]=useState(0);
    const[count5,setCount5]=useState(0);
    const[count6,setCount6]=useState(0);
    const[count7,setCount7]=useState(0);
    const[count8,setCount8]=useState(0);
    return(
        <View className="all">
            <View className="wrapper">
                <View className="number">1</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
                <View className="pic">
                    <Image src={Click} className="click" onClick={() => setCount1(count1 + 1)}></Image>
                    <View className="times">{count1}</View>
                </View>
            </View>
            <View className="wrapper">
                <View className="number">2</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
                <View className="pic">
                    <Image src={Click} className="click" onClick={() => setCount2(count2 + 1)}></Image>
                    <View className="times">{count2}</View>
                </View>
            </View>
            <View className="wrapper">
                <View className="number">3</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
                <View className="pic">
                    <Image src={Click} className="click" onClick={() => setCount3(count3 + 1)}></Image>
                    <View className="times">{count3}</View>
                </View>
            </View>
            <View className="wrapper">
                <View className="number">4</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
                <View className="pic">
                    <Image src={Click} className="click" onClick={() => setCount4(count4 + 1)}></Image>
                    <View className="times">{count4}</View>
                </View>
            </View>
            <View className="wrapper">
                <View className="number">5</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
                <View className="pic">
                    <Image src={Click} className="click" onClick={() => setCount5(count5 + 1)}></Image>
                    <View className="times">{count5}</View>
                </View>
            </View>
            <View className="wrapper">
                <View className="number">6</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
                <View className="pic">
                    <Image src={Click} className="click" onClick={() => setCount6(count6 + 1)}></Image>
                    <View className="times">{count6}</View>
                </View>
            </View>
            <View className="wrapper">
                <View className="number">7</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
                <View className="pic">
                    <Image src={Click} className="click" onClick={() => setCount7(count7 + 1)}></Image>
                    <View className="times">{count7}</View>
                </View>
            </View>
            <View className="wrapper">
                <View className="number">8</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
                <View className="pic">
                    <Image src={Click} className="click" onClick={() => setCount8(count8 + 1)}></Image>
                    <View className="times">{count8}</View>
                </View>
            </View>
        </View>
    )
}

export default Question;