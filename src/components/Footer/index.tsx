import s from './local.module.scss'
const Footer = () => {
    return (

        <footer className={s.footer}>
            <div className={s.containerFooter}>
                <div className={s.logoCol}>
                    <p className={s.footerHeading}>下载QQ音乐客户端</p>
                    <ul className={s.socialLinks}>
                        <li>
                            <a className={s.footerLinkIcon} href="#"
                            >
                                <ion-icon class={s.footerIcon} name="logo-windows"></ion-icon>
                                PC版
                            </a>
                        </li>
                        <li>
                            <a className={s.footerLinkIcon} href="#"
                            >
                                <ion-icon class={s.footerIcon} name="laptop-outline"></ion-icon>
                                Max版
                            </a>
                        </li>
                        <li>
                            <a className={s.footerLinkIcon} href="#"
                            >
                                <ion-icon class={s.footerIcon} name="logo-android"></ion-icon>
                                Android版
                            </a>
                        </li>
                        <li>
                            <a className={s.footerLinkIcon} href="#"
                            >
                                <ion-icon class={s.footerIcon} name="logo-apple"></ion-icon>
                                iPhone版
                            </a>
                        </li>
                    </ul>

                </div>
                <div className={s.addressCol}>
                    <p className={s.footerHeading}>特色产品</p>
                    <ul className={s.socialLinks2}>
                        <li>
                            <a className={s.footerLinkIcon} href="#"
                            >
                                <ion-icon class={s.footerIcon} name="logo-windows"></ion-icon>
                                全民K歌
                            </a>
                        </li>
                        <li>
                            <a className={s.footerLinkIcon} href="#"
                            >
                                <ion-icon class={s.footerIcon} name="laptop-outline"></ion-icon>
                                银河音效
                            </a>
                        </li>
                        <li>
                            <a className={s.footerLinkIcon} href="#"
                            >
                                <ion-icon class={s.footerIcon} name="logo-android"></ion-icon>
                                QPlay
                            </a>
                        </li>
                        <li>
                            <a className={s.footerLinkIcon} href="#"
                            >
                                <ion-icon class={s.footerIcon} name="logo-apple"></ion-icon>
                                Fan直播
                            </a>
                        </li>
                        <li>
                            <a className={s.footerLinkIcon} href="#"
                            >
                                车载互联
                            </a>
                        </li>
                        <li>
                            <a className={s.footerLinkIcon} href="#"
                            >
                                QQ演出
                            </a>
                        </li>
                    </ul>
                </div>
                <nav className={s.navCol}>
                    <p className={s.footerHeading}>合作链接</p>
                    <ul className={s.relateLink}>
                        <li><a className={s.footerLink} href="#">CJ ENM</a></li>
                        <li><a className={s.footerLink} href="#">腾讯视频</a></li>
                        <li><a className={s.footerLink} href="#">手机QQ空间</a></li>
                        <li><a className={s.footerLink} href="#">最新版QQ</a></li>
                        <li><a className={s.footerLink} href="#">腾讯社交广告</a></li>
                        <li><a className={s.footerLink} href="#">电脑管家</a></li>
                        <li><a className={s.footerLink} href="#">QQ浏览器</a></li>
                        <li><a className={s.footerLink} href="#">腾讯微云</a></li>
                        <li><a className={s.footerLink} href="#">腾讯云</a></li>
                        <li><a className={s.footerLink} href="#">企鹅FM</a></li>
                        <li><a className={s.footerLink} href="#">智能电视网</a></li>
                        <li><a className={s.footerLink} href="#">当贝市场</a></li>
                        <li><a className={s.footerLink} href="#">酷我音乐</a></li>
                        <li><a className={s.footerLink} href="#">酷狗听书</a></li>
                    </ul>
                </nav>
                <nav className={s.navCol}>
                <p className={s.footerHeading}>Company</p>
                    <ul className={s.relateLink}>
                        <li><a className={s.footerLink} href="#">
                            QQ音乐开放平台</a></li>
                        <li><a className={s.footerLink} href="#">腾讯音乐人</a></li>
                        <li><a className={s.footerLink} href="#">音乐推-歌曲推广</a></li>
                        <li className={s.liTwoCol}><a className={s.footerLink} href="#">启明星Venus-词曲交易/歌曲推广</a></li>
                        <li><a className={s.footerLink} href="#">TME Studio</a></li>
                        <li><a className={s.footerLink} href="#">臻品音质认证</a></li>
                    </ul>
                </nav>

                <nav className={s.rightNav}>
                    <p className={s.footerHeading}>TME集团官网</p>
                    <ul className={s.footerNav}>
                        <li><a className={s.footerLink} href="#">腾讯音乐</a></li>
                    </ul>
                </nav>
            </div>
            <div >
                <ul className={s.footerUl2}>
                    <li><a className={s.footerLink2} href="#">关于腾讯 | </a></li>
                    <li><a className={s.footerLink2} href="#">About Tencent | </a></li>
                    <li><a className={s.footerLink2} href="#">服务条款 | </a></li>
                    <li><a className={s.footerLink2} href="#">用户服务协议 | </a></li>
                    <li><a className={s.footerLink2} href="#">隐私政策 | </a></li>
                    <li><a className={s.footerLink2} href="#">权利声明 | </a></li>
                    <li><a className={s.footerLink2} href="#">广告服务 | </a></li>
                    <li><a className={s.footerLink2} href="#">腾讯招聘 | </a></li>
                    <li><a className={s.footerLink2} href="#">客户中心 | </a></li>
                    <li><a className={s.footerLink2} href="#">网站导航 | </a></li>
                    <li><a className={s.footerLink2} href="#">举报中心</a></li>
                </ul>
            </div>
            <p className={s.copyright}>
                Copyright &copy; <span className="year">1998 - 2025</span> Tencent <a className={s.footerLink2} href="#">All rights reserved</a>
            </p>
            <div >
                <ul className={s.footerUl3}>
                    <li><span>腾讯公司</span><a className={s.footerLink2} href="#"> 版权所有 | </a></li>
                    <li><a className={s.footerLink2} href="#"> 营业执照 | </a></li>
                    <li><span>网络文化经营许可证：</span><a className={s.footerLink2} href="#"> 粤网文[2023]2882-203号 | </a></li>
                    <li><a className={s.footerLink2} href="#"> 网络视听许可证1904073号 | </a></li>
                    <li><span>客服电话：</span><a className={s.footerLink2} href="#">4006016666 | </a></li>
                    <li><span>违法与不良信息举报邮箱：</span><a className={s.footerLink2} href="#">tme_musicjubao@tencentmusic.com</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;