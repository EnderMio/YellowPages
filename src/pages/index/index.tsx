import Taro, { useDidShow } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { fontGJG_L, campusLifeBgImg, aboutIcon } from "../pages.sources";
import './index.scss'

const getOrg = () => {
    return ["学生会", "团委", "社团联合会", "青年志愿者协会", "青年文明号", "青年之声", "青年创新创业协会", "青年就业创业协会", "青年科技协会", "青年科普协会", "青年志愿者协会", "青年文明号", "青年之声", "青年创新创业协会", "青年就业创业协会", "青年科技协会", "青年科普协会"];
};

const CampusLife = () => {
    let handleClick = () => {
        Taro.navigateTo({
            url: '/pages/campusLife/campusLife'
        });
    };
    return (
        <View className='campusLifeBox'>
            <Text className='title'>校园生活</Text>
            <View className='campusLifeWrapper' onClick={handleClick}>
                {/* TODO */}
                <Image className='campusLifeWrapperBg' src={campusLifeBgImg} mode='widthFix' />
            </View>
        </View>
    );
}

const Orgnization = () => {
    return (
        <View className='orgnizationBox'>
            <View className='orgnizationTopWrapper'>
                <Text className='title'>社团组织</Text>
                <Text className='viewMore'>View More</Text>
            </View>
            <View className='orgnizationWrapper'>
                {getOrg().map((item, index) => {
                    return (
                        <View className='orgnizationItem' key={index}>
                            {/* <Text className='orgnizationItemText'>{item}</Text> */}
                        </View>
                    )}
                )}
            </View>
        </View>
    );
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
            </View>
        </View>
    );
};

export default Index;
