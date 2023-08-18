const enum FileType {FONT, IMG};
const fileUrl = (name : string, type: number) : string => {
    const fileAPI : string = 'https://files.enderr.tech:38324/';
    if(type === FileType.FONT) return `url("${fileAPI}fonts/${name}")`;
    else if(type === FileType.IMG) return `${fileAPI}YellowPagesFiles/imgs/${name}`;
    else return '';
};

const fontGJG_L = {
    family: 'Gen Jyuu Gothic Light',
    source: fileUrl('GJG-L.ttf', FileType.FONT)
}
const campusLifeBgImg : string = fileUrl('campusLifeBgImg.png', FileType.IMG);
const aboutIcon : string = fileUrl('aboutIcon.png', FileType.IMG);

export { fontGJG_L, campusLifeBgImg, aboutIcon };