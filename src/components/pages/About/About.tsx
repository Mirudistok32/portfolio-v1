import React from 'react'
import s from './About.module.scss'
import { TitleHeader } from '../../TitleHeader/TitleHeader'
import myPhoto from '../../../assets/images/photos/photoForAvatar.png'

type PropsType = {

}

export const About: React.FC<PropsType> = React.memo((props) => {

    return (
        <div className={s.about}>
            <div className={s.about__wrap}>
                <TitleHeader title={'About Me'} subtitle={'Today you make the code, tomorrow the code makes you money'} />
                <div className={s['about__info-wrap']}>
                    <div className={s['about__info-photo']}>
                        <img src={myPhoto} alt="" />
                    </div>
                    <div className={s['about__info-data']}>
                        <ul className={s['about__info-data-list']}>
                            <li className={s['about__info-data-element']}>First Name<span>Stanislav</span></li>
                            <li className={s['about__info-data-element']}>Last Name<span>Postnikov</span></li>
                            <li className={s['about__info-data-element']}>Birthdate<span>31 may 1996</span></li>
                            <li className={s['about__info-data-element']}>Phone<span>+7 951 659 01 65</span></li>
                            <li className={s['about__info-data-element']}>Nationality<span>Russion</span></li>
                            <li className={s['about__info-data-element']}>Adress<span>Sankt-Petersburg</span></li>
                            <li className={s['about__info-data-element']}>Experience<span>1 year</span></li>
                            <li className={s['about__info-data-element']}>Langages<span>Russion, English:<i>(Pre-Intermediate)</i></span></li>
                            <li className={s['about__info-data-element']}>Email<span>mirudistok32@gmail.com</span></li>
                            <li className={s['about__info-data-element']}>Vk<span>https://vk.com/mirudistok</span></li>
                            <li className={s['about__info-data-element']}>Telegram<span>https://t.me/mirudistok</span></li>
                        </ul>
                    </div>
                </div>
                <div className={s.about__line}></div>
                {/* <div className={s['about__description-wrap']}>
                    <div className={s['about__description-experience']}>
                        <div className={s['about__description-title']}>

                        </div>
                    </div>
                    <div className={s['about__description-education']}>
                        <div className={s['about__description-title']}>

                        </div>
                    </div>
                </div> */}
                <div className={s.about__skills}>
                    <div className={s['about__skills-title']}>
                        Skills
                    </div>
                    <div className={s['about__skills-contents']}>
                        <div className={s['about__skills-content']}>
                            <ul className={s['about__skills-content-list']}>
                                <li className={s['about__skills-content-element']}>{`<React />`}</li>
                                <li className={s['about__skills-content-element']}>{`{ javascript }`}</li>
                                <li className={s['about__skills-content-element']}>{`css {}`}</li>
                                <li className={s['about__skills-content-element']}>{`<html></html>`}</li>
                                <li className={s['about__skills-content-element']}>{`Storybook.stories`}</li>
                                <li className={s['about__skills-content-element']}>{`expect(Jest).toBe('yes')`}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
})