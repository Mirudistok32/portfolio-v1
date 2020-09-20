import React from 'react'
import { Element } from '../../Element/Element'
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
                        <div className={s['portfolio__element-title']}>ClickMeGame</div>
                        <div className={s['portfolio__element-wrap']}>
                            <div className={s['portfolio__element-info']}>
                                <Element title={'Link'} value={'https://mirudistok32.github.io/ClickMeGame/'} isLink link={'https://mirudistok32.github.io/ClickMeGame/'} />
                                <Element title={'GitHub'} value={'https://github.com/Mirudistok32/ClickMeGame/'} isLink link={'https://github.com/Mirudistok32/ClickMeGame/'} />
                                <Element title={'Description'} value={'ClickMeGame - это мини игра, цель которой узнать, сколько вы успеете кликнуть по кнопке "Click" за 10 секунд'} />
                                <Element title={'Technologies'} value={'#react, #javascript, #html, #css, hooks'} />
                            </div>
                            <div className={s['portfolio__element-canvas']}>
                                <iframe allowFullScreen src={"https://mirudistok32.github.io/ClickMeGame/"} title={"ClickMeGame"}></iframe>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className={s['portfolio__element']}>
                        <div className={s['portfolio__element-title']}>ClickMeGame</div>
                        <div className={s['portfolio__element-wrap']}>
                            <div className={s['portfolio__element-info']}>
                                <Element title={'Link'} value={'https://mirudistok32.github.io/ClickMeGame/'} isLink link={'https://mirudistok32.github.io/ClickMeGame/'} />
                                <Element title={'GitHub'} value={'https://github.com/Mirudistok32/ClickMeGame/'} isLink link={'https://github.com/Mirudistok32/ClickMeGame/'} />
                                <Element title={'Description'} value={'ClickMeGame - это мини игра, цель которой узнать, сколько вы успеете кликнуть по кнопке "Click" за 10 секунд'} />
                                <Element title={'Technologies'} value={'#react, #javascript, #html, #css, hooks'} />
                            </div>
                            <div className={s['portfolio__element-canvas']}>
                                <iframe allowFullScreen src={"https://mirudistok32.github.io/ClickMeGame/"} title={"ClickMeGame"}></iframe>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
})