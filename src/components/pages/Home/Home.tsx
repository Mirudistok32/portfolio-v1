import React from 'react'
import s from './Home.module.scss'
import myPhoto from '../../../assets/images/photos/photoForAvatar.png'
import { PATH } from '../../../Route'
import { Images } from '../../Images/Images'


type PropsType = {

}

export const Home: React.FC<PropsType> = React.memo((props) => {

    return (
        <div className={s.home}>
            <div className={s.home__wrap}>
                <div className={s.home__photo}>
                    <Images src={myPhoto} alt={'my photo'} title={'about me'} link={PATH.about} />
                </div>
                <div className={s.home__content}>
                    <div className={s['home__content-hi']}>Hi `<span>everybody</span>`!</div>
                    <div className={s['home__content-name']}>I'm <span>Postnikov Stanislav</span></div>
                    <div className={s['home__content-about']}>
                        I'm Frontend Developer!
                        I live in the Sankt-Petersburg.
                        I like to write code and create understandably web-applications.
                    </div>
                </div>
            </div>
        </div>
    )
})