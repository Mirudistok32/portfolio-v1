import React from 'react'
import s from './About.module.scss'


type PropsType = {

}

export const About: React.FC<PropsType> = React.memo((props) => {

    return (
        <div className={s.about}>
            <div className={s.about__wrap}>
                <div className={s.about__title}></div>
                <div className={s.about__subtitle}></div>
                <div className={s['about__info-wrap']}>
                    <div className={s['about__info-photo']}></div>
                    <div className={s['about__info-data']}>
                        <ul className={s['about__info-data-list']}>
                            <li className={s['about__info-data-element']}></li>
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
                <div className={s.skills}>
                    <div className={s.skills__title}>

                    </div>
                    <div className={s.skills__contents}>
                        <div className={s.skills__content}>
                            <ul className={s['skills__content-list']}>
                                <li className={s['skills__content-element']}>JS</li>
                                <li className={s['skills__content-element']}>TS</li>
                                <li className={s['skills__content-element']}>Яблоки</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})