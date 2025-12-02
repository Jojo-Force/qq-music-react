import s from './local.module.scss'
const Header = () => {
    return (
        <header className={s.header}>
        <div className={s.firstHeader}>
            <a href="#">
                <img className="logo" alt="logo" src="img/logos/logo.png"/>
            </a>
            <nav className={s.mainNav}>
                <ul className={s.mainNavList}>
                    <li className={s.mainNavLiSelected}>
                        <a href="#" className={s.mainNavLink + " " +s.mainNavLinkSelected}>音乐馆</a>
                    </li>
                    <li>
                        <a href="#" className={s.mainNavLink}>我的音乐</a>
                    </li>
                    <li>
                        <a href="#" className={s.mainNavLink + " " + s.qiangtequan}>客户端</a>
                    </li>
                    <li>
                        <a href="#" className={s.mainNavLink}>开发平台</a>
                    </li>
                    <li>
                        <a href="#" className={s.mainNavLink}>VIP</a>
                    </li>
                    <li>
                        <div className={s.searchBox}>
                        <input className={s.searchInput} placeholder="搜索、MV、歌单、用户"/>
                        <button className={s.searchBtn}>
                            <ion-icon class={s.searchBtnIcon} name="search-outline"></ion-icon>
                        </button>
                        </div>
                    </li>
                    <li>
                        <button className={s.loginBtn}>登录</button>
                    </li>
                    <li>
                        <div className={s.menuVip}>
                            <label className={s.vipLabel}>开通VIP
                            <ion-icon class={s.vipUpIcon} name="caret-up-outline"></ion-icon>
                            <ion-icon class={s.vipDownIcon} name="caret-down-outline"></ion-icon>
                            </label>
                            <button className={s.vipSuperBtn}>开通超级会员</button>
                            <button className={s.vipBestBtn}>开通绿钻豪华版</button>
                        </div>
                    </li>
                    <li>
                        <div className={s.menuCharge}>
                            <label className={s.chargeLabel}>充值
                            <ion-icon class={s.chargeUpIcon} name="caret-up-outline"></ion-icon>
                            <ion-icon class={s.chargeDownIcon} name="caret-down-outline"></ion-icon>
                            </label>
                            <button className={s.chargeBuyBtn}>购买乐币</button>
                            <button className={s.chargeChargeBtn}>充值饭票
                            <button className={s.chargeInvoiceBtn}>开具发票</button>
                            </button>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
            <hr className={s.headerHr}/>
            <div className={s.secondHeader}>
                <ul className={s.secondNavList}>
                    <li>
                        <a href="#" className={s.secondNavLink}>首页</a>
                    </li>
                    <li>
                        <a href="#" className={s.secondNavLink}>歌手</a>
                    </li>
                    <li>
                        <a href="#" className={s.secondNavLink}>新碟</a>
                    </li>
                    <li>
                        <a href="#" className={s.secondNavLink}>排行榜</a>
                    </li>
                    <li>
                        <a href="#" className={s.secondNavLink}>分类歌单</a>
                    </li>
                    <li>
                        <a href="#" className={s.secondNavLink}>雷达</a>
                    </li>
                    <li>
                        <a href="#" className={s.secondNavLink}>MV</a>
                    </li>
                    <li>
                        <a href="#" className={s.secondNavLink}>数字专辑</a>
                    </li>
                </ul>
            </div>
        </header>

    )
}

export default Header;