import React, { MouseEvent, useState } from 'react'
import s from './About.module.scss'
import { TitleHeader } from '../../TitleHeader/TitleHeader'
import myPhoto from '../../../assets/images/photos/photoForAvatar.png'

type PropsType = {

}

export const About: React.FC<PropsType> = React.memo((props) => {

    const [is, setIs] = useState(false)

    const onClickHandler = (e: MouseEvent<HTMLLIElement>) => {
        setIs(!is)
        e.currentTarget.classList.toggle(`${s.active}`)
    }

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
                            <li className={s['about__info-data-element']}>Langages<span>Russion, English</span></li>
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
                        <ul className={s['about__skills-contents-list']}>
                            <li onClick={(e) => onClickHandler(e)} className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'dodgerblue' }} >{`<React />`}</li>
                            <li onClick={(e) => onClickHandler(e)} className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'mediumslateblue' }} >{`createStore(Redux)`}</li>
                            <li onClick={(e) => onClickHandler(e)} className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'gold' }} >{`{ javascript }`}</li>
                            <li onClick={(e) => onClickHandler(e)} className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'deepskyblue' }} >{`type Typescript`}</li>
                            <li onClick={(e) => onClickHandler(e)} className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'moccasin' }} >{`css {}`}</li>
                            <li onClick={(e) => onClickHandler(e)} className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'chocolate' }} >{`<html></html>`}</li>
                            <li onClick={(e) => onClickHandler(e)} className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'deeppink' }} >{`Storybook.stories`}</li>
                            <li onClick={(e) => onClickHandler(e)} className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'coral' }} >{`expect(Jest).toBe('yes')`}</li>
                            <li onClick={(e) => onClickHandler(e)} className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'lightblue' }} >{`.get('https://REST.API')`}</li>
                            <li onClick={(e) => onClickHandler(e)} className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'cornsilk' }} >{`GitHub`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
})