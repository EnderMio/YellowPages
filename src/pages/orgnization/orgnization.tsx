
import { View,  Image } from "@tarojs/components";
import './orgnization.scss'
import Photo from "../orgnization/imgs/photo.png";
import Code from "../orgnization/imgs/code.png";

const Lantu=()=>{
    return (
        
        <View className="all">
            <Image src={Photo} className="image"></Image>
            <View className="box">
                <View className="title">蓝图创新工作室</View>
                <View className="content">蓝图创新工作室是一支充满活力和创造力的学生组织，专注于创新科技产品的研发。我们热衷于为乡村发展提供强有力的支持，同时致力于为每位成员的个人发展提供全方位的助力。我们诚挚地邀请更多有能力的同学加入我们，一同开启科技与创新的奇妙之旅。</View>
                <View className="content">我们的工作室具有以下优势：</View> 
                <View className="content">富有激情的团队：我们的工作室由一群激情四溢、充满活力的年轻人组成。我们相信创新的力量，致力于将科技与实践相结合，为乡村发展带来积极而持久的变革。</View>                
                <View className="content">多元化的项目：我们的工作室涉足广泛的科技领域，包括人工智能、物联网、信息技术等等。无论你对哪个领域感兴趣，我们都能为你提供适合的项目，让你发挥才能、实践技能。</View> 
                <View className="content">乡村发展关爱：我们的工作室着眼于乡村的发展，致力于解决现实问题，为乡村地区带来积极的变革。通过科技与创新，我们努力为乡村赋能，为农民提供更好的生活条件和发展机会。</View> 
                <View className="content">个人发展指导：我们注重每位成员的个人发展，并提供个性化的指导和支持。无论是技术能力的培养还是团队合作的锻炼，我们将给予你充分的机会和资源，帮助你成长为全面发展的优秀人才。</View> 
                <View className="content">创业机会与资源：我们工作室与各界合作伙伴紧密合作，积极探寻创业机会。作为一名工作室成员，你将有机会接触到来自企业、投资者和专家的资源和支持，为将来的创业之路积累宝贵经验。</View> 
                <View className="content">如果你渴望在创新科技的领域发挥才能，关心乡村发展，同时希望得到个人成长和创业的机会，蓝图创新工作室正是你实现梦想的理想舞台。加入我们，与志同道合的伙伴一起努力，共同创造未来的科技奇迹！</View>
                <Image src={Code} className="code"></Image>
            </View>
        </View>
    )
} 

export default Lantu;