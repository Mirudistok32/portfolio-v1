import React, { useMemo } from 'react'
import s from './About.module.scss'
import { TitleHeader } from '../../TitleHeader/TitleHeader'
import myPhoto from '../../../assets/images/photos/photoForAvatar.png'
import { InfoDataType } from '../../../redux/reducers/about-reducer'

type PropsType = {
    infoDates: Array<InfoDataType>
}

export const About: React.FC<PropsType> = React.memo((props) => {

    const { infoDates } = props

    const renderInfoDates = useMemo(() => infoDates.map(i => {
        return (
            <li
                key={i.id}
                className={s['about__info-data-element']}
            >
                {i.key}
                <span>{i.value}</span>
            </li>
        )
    }), [infoDates])

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
                            <li className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'dodgerblue' }} >{`<React />`}</li>
                            <li className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'mediumslateblue' }} >{`createStore(Redux)`}</li>
                            <li className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'gold' }} >{`{ javascript }`}</li>
                            <li className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'deepskyblue' }} >{`type Typescript`}</li>
                            <li className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'moccasin' }} >{`css {}`}</li>
                            <li className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'chocolate' }} >{`<html></html>`}</li>
                            <li className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'deeppink' }} >{`Storybook.stories`}</li>
                            <li className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'coral' }} >{`expect(Jest).toBe('yes')`}</li>
                            <li className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'lightblue' }} >{`.get('https://REST.API')`}</li>
                            <li className={s[`about__skills-contents-element`]} style={{ backgroundColor: 'cornsilk' }} >{`GitHub`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
})