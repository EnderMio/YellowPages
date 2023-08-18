// import React, { useCallback } from 'react';
import { View, Text, Button, Image } from '@tarojs/components';
// import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks';

import {Link,BrowserRouter} from 'react-router-dom'

import './campusLife.scss'


const Website = () => {
    return (
        <View className='box'>
            <View className='top'>
                <View className='title'>必备网站</View>
            </View>
            <View className='wrapper'>
                <View className="item">
                    <View >北邮服务门户</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="item">
                    <View >北邮服务门户</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="item">
                    <View >北邮服务门户</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="item">
                    <View >北邮服务门户</View>
                    <View className='explain'>蓝图</View>
                </View>
            </View>
        </View>
    );
};

const Tools = () => {
    return (
        <View className='box'>
            <BrowserRouter>
            <View className='top'>
                <View className='title'>实用工具</View>
            </View>
            <View className='wrapper'>
                <View className="item">
                    {/* <Button onClick={()=>{window.location.href="https://baidu.com"}} >校园地图</Button> */}
                    {/* <Link to='https://www.baidu.com'><View className='item'>校园地图</View></Link> */}
                    <View>校园地图</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="item">
                    <View >校园地图</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="item">
                    <View >校园地图</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="item">
                    <View >校园地图</View>
                    <View className='explain'>蓝图</View>
                </View>
            </View>
            </BrowserRouter>
        </View>
    );
};

const Plan=()=>{
    return (
        <View className='box'>
            <BrowserRouter>
            <View className='top'>
                <View className='title'>培养方案</View>
            </View>
            <View className='wrapper'>
                <View className="item">
                    <View className='content'>计算机学院2023</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="item">
                    <View className='content'>计算机学院2023</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="item">
                    <View className='content'>计算机学院2023</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="item">
                    <View className='content'>计算机学院2023</View>
                    <View className='explain'>蓝图</View>
                </View>
            </View>
            </BrowserRouter>
        </View>
    );
}
const campusLife=()=>{
    return (
        <View className='all'>
            <Website/>
            <Tools/>
            <Plan/>
        </View>
    )
}
export default campusLife;
