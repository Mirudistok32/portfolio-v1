import React from 'react'
import { TitleHeader } from '../../TitleHeader/TitleHeader'
import s from './Portfolio.module.scss'


type PropsType = {

}

export const Portfolio: React.FC<PropsType> = React.memo((props) => {

    return (
        <div className={s.portfolio}>
            <div className={s.portfolio__wrap}>
                <TitleHeader
                    title={'My portfolio'}
                    subtitle={'In theory, theory and practice are inseparable. In practice, this is not the case.'}
                />
                <div className={s.portfolio__content}>
                    <div className={s['portfolio__element']}>
                        <div className={s['portfolio__element-title']}></div>
                        <div className={s['portfolio__element-wrap']}>
                            <div className={s['portfolio__element-info']}>
                                <div className={s['portfolio__element-link']}></div>
                                <div className={s['portfolio__element-github']}></div>
                                <div className={s['portfolio__element-description']}></div>
                                <div className={s['portfolio__element-technologies']}></div>
                            </div>
                            <div className={s['portfolio__element-canvas']}>
                                <iframe src={"https://mirudistok32.github.io/ClickMeGame/"} title={"ClickMeGame"}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})