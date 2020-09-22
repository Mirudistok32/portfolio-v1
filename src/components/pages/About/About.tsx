import React, { useMemo } from 'react'
import s from './About.module.scss'
import { TitleHeader } from '../../TitleHeader/TitleHeader'
import myPhoto from '../../../assets/images/photos/photoForAvatar.png'
import { InfoDataType, ListSkillsDataType } from '../../../redux/reducers/about-reducer'
import { Element } from '../../Element/Element'

type PropsType = {
    infoDates: Array<InfoDataType>
    listSkillsDates: Array<ListSkillsDataType>
}

export const About: React.FC<PropsType> = React.memo((props) => {

    const { infoDates, listSkillsDates } = props

    const renderInfoDates = useMemo(() => infoDates.map(i => {
        return <Element key={i.id} value={i.value} title={i.key} />
    }), [infoDates])

    const renderListSkillsDates = useMemo(() => listSkillsDates.map(i => {
        return (
            <li
                key={i.id}
                className={s[`about__skills-contents-element`]}
                style={{ backgroundColor: i.backgroundColor }}
            >
                {`${i.title}`}
            </li>
        )
    }), [listSkillsDates])

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
                            {
                                renderInfoDates
                            }
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
                            {
                                renderListSkillsDates
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
})