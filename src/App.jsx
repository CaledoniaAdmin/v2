import {useRef, useState} from 'react'
import './App.css'
import {
    HouseIcon,
    ScrollIcon,
    CloudIcon,
    ComputerTowerIcon,
    CodesandboxLogoIcon,
    PlugsIcon,
    LightbulbIcon,
    AirplaneTakeoffIcon
} from '@phosphor-icons/react'
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValueEvent } from 'motion/react'

function App() {
    //   Website
    // • Capabilities Statement on your website
    // • Display the CBE Logo (requires DSLBD approval) • Include Capabilities, Differentiators and Past Performance • Keep Contact Information up to date
    // • Is your website link active on the CBE Search Portal?


    const sectionsData = [
        {
            layout: "",
            content: [
                {
                    el: "div"
                }
            ]
        }
    ]

    const SECTION_HEIGHT = 1500

    const ParallaxSection = (start, end, className) => {
        console.log('start, end, className: ', start, end, className)
        const ref = useRef(null)

        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start end", "end start"]
        })

        useMotionValueEvent(scrollYProgress, "change", (latest) => console.log(latest))

        return <motion.div className={className} ref={ref}>
            <div className={`container__app-content-base`}>
                <div className={`container__app-content-base-title`}>CALEDONIA CONSULTING LLC</div>
                <div className={`container__app--content-base-slogan`}>Innovating for a Smarter Future</div>
            </div>
        </motion.div>
    }

    const ParallaxHome = ({sm, md, lg, xl}) => {
        return (
            <div className={`container__app-content`}>
                <div className={`container__app-content-base`}>
                    {/*<motion.div style={{y: sm}} className={`container__app-content-base-title`}>CALEDONIA</motion.div>*/}
                    {/*<motion.div style={{y: md}} className={`container__app-content-base-title`}>CONSULTING</motion.div>*/}
                    {/*<motion.div style={{y: lg}} className={`container__app-content-base-title`}>LLC</motion.div>*/}
                    <motion.div style={{y: lg}} className={`container__app-content-base-title`}>CALEDONIA CONSULTING LLC</motion.div>
                    <motion.div style={{y: xl}} className={`container__app--content-base-slogan`}>Innovating for a
                        Smarter Future
                    </motion.div>
                </div>
            </div>
        )
    }

    const ParallaxServices = ({sm, md, lg, xl}) => {
        return (
            <div className={`container__app-content`}>
                <div className={`container__app-content-base`}>
                    <div className={`container__app-content-base-title`}>OUR PRODUCTS & SERVICES</div>
                    <div className={`container__app--content-base-slideshow`}>
                        <div className={`container__app-content-base-slide`}>
                            <motion.div style={{y:sm}}>
                                <CloudIcon size={56} color="#ffffff"/>
                            </motion.div>
                            <motion.div style={{y:md}} className={`container__app-content-base-title`}>Cloud Services</motion.div>
                            <motion.div style={{y:lg}} className={`container__app-content-base-description`}>Scalable solutions for modern
                                business needs
                            </motion.div>
                        </div>
                        <div className={`container__app-content-base-slide`}>
                            <motion.div style={{y:sm}}>
                                <CodesandboxLogoIcon size={56} color="#ffffff"/>
                            </motion.div>
                            <motion.div style={{y: md}} className={`container__app-content-base-title`}>Software
                                Solutions
                            </motion.div>
                            <motion.div style={{y: lg}}
                                        className={`container__app-content-base-description`}>Custom-developed for
                                diverse
                                business needs
                            </motion.div>
                        </div>
                        <div className={`container__app-content-base-slide`}>
                            <motion.div style={{y:sm}}>
                                <ComputerTowerIcon size={56} color="#ffffff"/>
                            </motion.div>
                            <motion.div style={{y: md}} className={`container__app-content-base-title`}>Enterprise Hardware</motion.div>
                            <motion.div style={{y: lg}} className={`container__app-content-base-description`}>High-performance devices for industrial applications</motion.div>
                        </div>
                        <div className={`container__app-content-base-slide`}>
                            <motion.div style={{y:sm}}>
                                <PlugsIcon size={56} color="#ffffff"/>
                            </motion.div>
                            <motion.div style={{y: md}} className={`container__app-content-base-title`}>Integration Support</motion.div>
                            <motion.div style={{y: lg}} className={`container__app-content-base-description`}>Seamless integration with existing systems</motion.div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const ParallaxMission = () => {
        return (
            <div className={`container__app-content`}>
                <div className={`container__app-content-base`}>
                    <div className={`container__app-content-base-title`}>OUR VISION AND MISSION</div>
                    <div className={`container__app--content-base-layout`}>
                        <div className={`container__app-content-base-layout-pane`}>
                            <div>Our Mission is Technology that works for you</div>
                            <div>Technology is at the core of everything we do to be successful</div>
                        </div>
                        <div className={`container__app-content-base-layout-pane`}>
                            <div className={`container__app-content-base-layout-card`}>
                                <div className={`container__app-content-base-layout-card-icon`}>
                                    <LightbulbIcon size={32} color="#ffffff"/>
                                </div>
                                <div className={`container__app-content-base-layout-card-content`}>
                                    <div className={`container__app-content-base-layout-card-title`}>Vision</div>
                                    <div className={`container__app-content-base-layout-card-description`}>A global
                                        future driven by digital transformation
                                    </div>
                                </div>
                            </div>
                            <div className={`container__app-content-base-layout-card`}>
                                <div className={`container__app-content-base-layout-card-icon`}>
                                    <AirplaneTakeoffIcon size={32} color="#fff"/>
                                </div>
                                <div className={`container__app-content-base-layout-card-content`}>
                                    <div className={`container__app-content-base-layout-card-title`}>Mission</div>
                                    <div className={`container__app-content-base-layout-card-description`}>Empower
                                        business by delivering innovative technology solutions
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const CenterImage = () => {
        const {scrollY, scrollYProgress} = useScroll()

        const opacityValue = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 35], [1, 0])

        const bgSizeValue = useTransform(scrollY, [0, SECTION_HEIGHT + 35], ["100%", "0%"])

        const clip0 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0])

        const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100])

        const cpValue = useMotionTemplate`polygon(${clip0} ${clip0}, ${clip1} ${clip0}, ${clip1} ${clip1}, ${clip0} ${clip1})`

        return <motion.div
            style={{
                backgroundImage: "url(https://lh5.googleusercontent.com/proxy/WbSfLJKxt90JLGau36zBrCFrM--jJ-2r82KyJIIZhXhH0gMAykAriy18P7SpMOpEPYkbS66_f889Gc5xQ9uHkzrsRi1byxN_M0q9dv3lAykb5A)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100%",
                width: "100%",
                position: "sticky",
                top: 0,
                opacity: opacityValue,
                backgroundSize: bgSizeValue,
                clipPath: cpValue
            }}
        />
    }

    const container = useRef(null)

    const {scrollYProgress} = useScroll({
        target: container.current,
        offset: ["start end", "end start"]
    })

    const sm = useTransform(scrollYProgress, [0, 1], [0, 50])
    const md = useTransform(scrollYProgress, [0, 1], [0, 130])
    const lg = useTransform(scrollYProgress, [0, 1], [0, 230])
    const xl = useTransform(scrollYProgress, [0, 1], [0, 330])

    return (
        <div ref={container} className={`container__app--main`}>
            <div className={`container__app-content-header`}>
                <div><HouseIcon size={32} color="#38b5f9"/></div>
                <div></div>
                <div><ScrollIcon size={32} color="#38b5f9"/></div>
            </div>
            <div className={`container__app-content-container`}>
                {/*<CenterImage />*/}
                <ParallaxHome sm={sm} lg={lg} xl={xl} md={md}/>
                <ParallaxServices sm={sm} lg={lg} xl={xl} md={md}/>
                <ParallaxMission />
            </div>
        </div>
    )
}

export default App
