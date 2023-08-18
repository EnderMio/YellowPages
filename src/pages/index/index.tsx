import Taro, { useDidShow } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { fontGJG_L, campusLifeBgImg, aboutIcon } from "../pages.sources";

import './index.scss'

const CampusLife = () => {
    let handleClick1 = () => {
        Taro.navigateTo({
            url: '/pages/campusLife/campusLife'
        });
    };
    return (
        <View className='campusLifeBox'>
            <Text className='title'>校园生活</Text>
            <View className='campusLifeWrapper' onClick={handleClick1}>
                {/* TODO */}
                <Image className='campusLifeWrapperBg' src={campusLifeBgImg} mode='widthFix' />
            </View>
        </View>
    );
}

const Orgnization = () => {
    let handleClick2 = () => {
        Taro.navigateTo({
            url: '/pages/orgnization/orgnization?item=',
        });
    };
    return (
        <View className='orgnizationBox'>
            <View className='orgnizationTopWrapper'>
                <Text className='title'>社团组织</Text>
                <Text className='viewMore'>View More</Text>
            </View>
            <View className='orgnizationWrapper' onClick={handleClick2}>
                <View className="orgnizationItem">
                    <View >蓝图创新工作室</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="orgnizationItem">
                    <View >学生会</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="orgnizationItem">
                    <View >团委</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="orgnizationItem">
                    <View >青年志愿者协会</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="orgnizationItem">
                    <View >社团联合会</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="orgnizationItem">
                    <View >青年文明号</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="orgnizationItem">
                    <View >青年之声</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="orgnizationItem">
                    <View >青年创新创业协会</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="orgnizationItem">
                    <View >青年就业创业协会</View>
                    <View className='explain'>蓝图</View>
                </View>
                <View className="orgnizationItem">
                    <View >青年科技协会</View>
                    <View className='explain'>蓝图</View>
                </View>
            </View>
        </View>
    );
}

const Question = () => {
    let handleClick3=()=>{
        Taro.navigateTo({
            url:'/pages/question/question'
        });
    }
    return (
        <View className='questionBox'>
            <View className='questionTopWrapper'>
                <Text className='title'>自由问答</Text>
                <Text className='viewMore'>View More</Text>
            </View>
            <View className="questionWrapper" onClick={handleClick3}>
                <View className="number">1</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
            </View>
            <View className="questionWrapper" onClick={handleClick3}>
                <View className="number">2</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
            </View>
            <View className="questionWrapper" onClick={handleClick3}>
                <View className="number">3</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
            </View>
            <View className="questionWrapper" onClick={handleClick3}>
                <View className="number">4</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
            </View>
            <View className="questionWrapper" onClick={handleClick3}>
                <View className="number">5</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
            </View>
            <View className="questionWrapper" onClick={handleClick3}>
                <View className="number">6</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
            </View>
            <View className="questionWrapper" onClick={handleClick3}>
                <View className="number">7</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
            </View>
            <View className="questionWrapper" onClick={handleClick3}>
                <View className="number">8</View>
                <View className="text">
                    <View className="question">校园卡丢失在哪里办理</View>
                    <View className="answer">写了一些回答</View>
                </View>
            </View>
        </View>
    )
}

const Index = () => {
    useDidShow(() => {
        Taro.loadFontFace(fontGJG_L);
    });
    return (
        <View className='index'>
            <Text className='slogan'>Everything you want to know in BUPT</Text>
            <Image className='aboutIcon' src={aboutIcon} />
            <View className='indexWrapper'> 
                <CampusLife />
                <Orgnization />
                <Question />
            </View> 
        </View>
    );
};

export default Index;
