import {useEffect, useRef, useState} from 'react'
import './App.css'
import {
    HouseIcon,
    ScrollIcon,
    CloudIcon,
    ComputerTowerIcon,
    CodesandboxLogoIcon,
    PlugsIcon,
    LightbulbIcon,
    AirplaneTakeoffIcon,
    AtIcon
} from '@phosphor-icons/react'
import { ReactLenis, useLenis } from "lenis/react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValueEvent } from 'motion/react'

function App() {
    //   Website
    // • Capabilities Statement on your website
    // • Display the CBE Logo (requires DSLBD approval) • Include Capabilities, Differentiators and Past Performance • Keep Contact Information up to date
    // • Is your website link active on the CBE Search Portal?

    const lenis = useLenis((lenis) => {
        // console.log(lenis)
    })

    // Dots
    const [dots, setDots] = useState([])

    // useEffect(() => {
    //     const generateDots = (numDots) => {
    //         const newDots = []
    //         for (let i = 0; i < numDots.length; i++) {
    //             const x = Math.random() * (window.innerWidth - 20)
    //             const y = Math.random() * (window.innerHeight - 20)
    //             const size = Math.random() * 10 + 5
    //             const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    //             newDots.push({id: i, x, y, size, color})
    //         }
    //         setDots(newDots)
    //     }
    //     // generateDots(50)
    // }, []);

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

        return <motion.div className={className}>
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
                    <motion.div style={{y: sm}} className={`container__app-content-base-title`}>CALEDONIA</motion.div>
                    <motion.div style={{y: md}} className={`container__app-content-base-title`}>CONSULTING</motion.div>
                    <motion.div style={{y: lg}} className={`container__app-content-base-title`}>LLC</motion.div>
                    {/*<motion.div style={{y: lg}} className={`container__app-content-base-title`}>CALEDONIA CONSULTING LLC</motion.div>*/}
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
                    <div className={`container__app-content-base-title`}>PRODUCTS & SERVICES</div>
                    <div className={`container__app--content-base-slideshow`}>
                        <div className={`container__app-content-base-slide`}>
                            <motion.div style={{y:sm}}>
                                <CloudIcon size={56} color="#ffffff"/>
                            </motion.div>
                            <motion.div style={{y:md}} className={`container__app-content-base-subtitle`}>Cloud</motion.div>
                            <motion.div style={{y:md}} className={`container__app-content-base-description`}>Scalable solutions for modern
                                business needs; AWS, Azure, Google, doesn't matter.
                            </motion.div>
                        </div>
                        <div className={`container__app-content-base-slide`}>
                            <motion.div style={{y:sm}}>
                                <CodesandboxLogoIcon size={56} color="#ffffff"/>
                            </motion.div>
                            <motion.div style={{y: md}} className={`container__app-content-base-subtitle`}>Software
                            </motion.div>
                            <motion.div style={{y: md}} className={`container__app-content-base-description`}>Full stack means just that: Front end, Back end, API, Database, Tested and Continuously Deployed to your environment
                            </motion.div>
                        </div>
                        <div className={`container__app-content-base-slide`}>
                            <motion.div style={{y:sm}}>
                                <ComputerTowerIcon size={56} color="#ffffff"/>
                            </motion.div>
                            <motion.div style={{y: md}} className={`container__app-content-base-subtitle`}>Hardware</motion.div>
                            <motion.div style={{y: md}} className={`container__app-content-base-description`}>High-performance devices for industrial applications; We'll review your systems and recommend scalable solutions</motion.div>
                        </div>
                        <div className={`container__app-content-base-slide`}>
                            <motion.div style={{y:sm}}>
                                <PlugsIcon size={56} color="#ffffff"/>
                            </motion.div>
                            <motion.div style={{y: md}} className={`container__app-content-base-subtitle`}>Support</motion.div>
                            <motion.div style={{y: md}} className={`container__app-content-base-description`}>Seamless integration with existing systems; Green field to legacy systems, we can manage</motion.div>
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
                    <div className={`container__app-content-base-mission`}>
                        <p><span>Caledonia Consulting</span> provides strategic consulting technology
                            services and managed services to commercial, not for profit and
                            government organizations. Our Consulting can <span>mobilize</span> the right <span>people</span>, <span>skills</span> and <span>technologies</span> to help organizations improve their
                            performance. As a Minority Owned Small Business with HUBZone (Federal)
                            and CBE (DC) certification, <span>Caledonia Consulting</span> is committed to excellence and
                            creating innovative and
                            flexible solutions for our State and Federal clients.</p>
                    </div>

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

    // DOTS
    // top
    const Dot = ({x, y, size, color}) => {
        const dotStyle = {
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            backgroundColor: color
        }

        return <div style={dotStyle}></div>
    }

    // IMPROVEMENT ON DOT FOR POSITIONING
    const BuildDot = ({top, bottom, left, right, size, color, className}) => {
        const dotStyle = {
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            backgroundColor: color
        }

        top ? dotStyle.top = top : dotStyle
        bottom ? dotStyle.bottom = bottom : dotStyle
        left ? dotStyle.left = left : dotStyle
        right ? dotStyle.right = right : dotStyle

        return <div className={className} style={dotStyle}></div>
    }

    const dynamicBuildDot = () => {
        let newDots = []
        for (let i = 0; i < 100; i++) {
            const top = Math.random() * (650 - 10) + 10 //Math.random() * (max - min) + min;
            const bottom = Math.random() * (150 - 10) + 10
            const left = Math.random() * (600 - 10) + 10
            const right = Math.random() * (600 - 10) + 10
            const size = Math.floor(5 * Math.random()) + 7
            const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`

            newDots.push({id: i, top, bottom, left, right, size, color})
        }

        return newDots
    }

    const Dots = [
        {
            "id": 0,
            "x": 748.7115029739399,
            "y": 180.82173791486508,
            "size": 8.070686207822606,
            "color": "rgb(198, 64, 33)"
        },
        {
            "id": 1,
            "x": 1111.9954123968414,
            "y": 57.03662363899012,
            "size": 12.30622910776912,
            "color": "rgb(28, 251, 181)"
        },
        {
            "id": 2,
            "x": 1552.1165050274794,
            "y": 305.75482291853984,
            "size": 7.422914007114123,
            "color": "rgb(25, 10, 253)"
        },
        {
            "id": 3,
            "x": 1501.8169597616172,
            "y": 412.9401185032034,
            "size": 5.808953334249699,
            "color": "rgb(187, 143, 63)"
        },
        {
            "id": 4,
            "x": 73.97609154093658,
            "y": 270.29279299463957,
            "size": 14.76582098389901,
            "color": "rgb(120, 48, 249)"
        },
        {
            "id": 5,
            "x": 1448.6427394058942,
            "y": 345.73706100199917,
            "size": 9.834146530955898,
            "color": "rgb(77, 125, 162)"
        },
        {
            "id": 6,
            "x": 290.78107394875497,
            "y": 148.06204448697926,
            "size": 10.555846656584357,
            "color": "rgb(218, 111, 38)"
        },
        {
            "id": 7,
            "x": 1477.7478063971123,
            "y": 438.0092312240121,
            "size": 7.621300765940388,
            "color": "rgb(226, 201, 32)"
        },
        {
            "id": 8,
            "x": 497.02342139719815,
            "y": 246.2413337865299,
            "size": 14.261125514510294,
            "color": "rgb(219, 120, 99)"
        },
        {
            "id": 9,
            "x": 1547.5936207068542,
            "y": 139.24814717153149,
            "size": 8.946952787940717,
            "color": "rgb(229, 144, 224)"
        },
        {
            "id": 10,
            "x": 1815.6043747548017,
            "y": 333.6492735906535,
            "size": 8.684095281049895,
            "color": "rgb(177, 105, 84)"
        },
        {
            "id": 11,
            "x": 888.1786637057814,
            "y": 369.6221478838066,
            "size": 14.301696209185176,
            "color": "rgb(147, 126, 149)"
        },
        {
            "id": 12,
            "x": 1576.3439733178654,
            "y": 191.95232010612472,
            "size": 12.264380474781039,
            "color": "rgb(96, 101, 193)"
        },
        {
            "id": 13,
            "x": 1347.8469021943172,
            "y": 431.1324937693855,
            "size": 10.463478356202646,
            "color": "rgb(103, 34, 96)"
        },
        {
            "id": 14,
            "x": 1197.3030190332881,
            "y": 78.50413353058404,
            "size": 12.052693659911945,
            "color": "rgb(53, 153, 18)"
        },
        {
            "id": 15,
            "x": 1042.62803270639,
            "y": 128.922762117861,
            "size": 14.16411057160777,
            "color": "rgb(4, 194, 25)"
        },
        {
            "id": 16,
            "x": 957.1173154293903,
            "y": 295.9814379240876,
            "size": 14.76994853517385,
            "color": "rgb(195, 167, 175)"
        },
        {
            "id": 17,
            "x": 100.62159030918879,
            "y": 147.78965668951247,
            "size": 10.72067476169693,
            "color": "rgb(167, 109, 110)"
        },
        {
            "id": 18,
            "x": 1497.49777431806,
            "y": 191.42691340072153,
            "size": 5.154107377571152,
            "color": "rgb(119, 14, 154)"
        },
        {
            "id": 19,
            "x": 554.1119759505423,
            "y": 35.704165446490535,
            "size": 10.618603037855156,
            "color": "rgb(6, 182, 162)"
        },
        {
            "id": 20,
            "x": 722.2938623421516,
            "y": 194.74319889621364,
            "size": 6.818943195827448,
            "color": "rgb(232, 224, 203)"
        },
        {
            "id": 21,
            "x": 1060.445155692018,
            "y": 164.90566842679561,
            "size": 11.844155169625417,
            "color": "rgb(60, 143, 1)"
        },
        {
            "id": 22,
            "x": 560.9197931221236,
            "y": 226.99009465967217,
            "size": 8.989886423822703,
            "color": "rgb(121, 97, 180)"
        },
        {
            "id": 23,
            "x": 1287.9563441161831,
            "y": 434.3113908052688,
            "size": 5.128009625861759,
            "color": "rgb(116, 29, 248)"
        },
        {
            "id": 24,
            "x": 621.5468597009454,
            "y": 247.0145192666172,
            "size": 6.889297832362117,
            "color": "rgb(171, 211, 219)"
        },
        {
            "id": 25,
            "x": 1530.3745793335831,
            "y": 210.4916173653976,
            "size": 11.535713796051791,
            "color": "rgb(73, 253, 148)"
        },
        {
            "id": 26,
            "x": 1795.9543642897618,
            "y": 157.82957209059956,
            "size": 9.29875467472949,
            "color": "rgb(221, 75, 254)"
        },
        {
            "id": 27,
            "x": 1815.1329734140566,
            "y": 399.40581721903686,
            "size": 10.848501598435679,
            "color": "rgb(36, 123, 104)"
        },
        {
            "id": 28,
            "x": 438.4150079977477,
            "y": 265.4661963914577,
            "size": 8.637006227783425,
            "color": "rgb(165, 133, 90)"
        },
        {
            "id": 29,
            "x": 1838.0293752264151,
            "y": 17.930118318378415,
            "size": 5.824412011495351,
            "color": "rgb(243, 203, 122)"
        },
        {
            "id": 30,
            "x": 1628.3888711476886,
            "y": 442.756247578436,
            "size": 13.202328651036472,
            "color": "rgb(96, 195, 115)"
        },
        {
            "id": 31,
            "x": 496.75690182076767,
            "y": 463.5852445896935,
            "size": 5.343595394469941,
            "color": "rgb(29, 74, 176)"
        },
        {
            "id": 32,
            "x": 639.7250994207282,
            "y": 87.38094991930303,
            "size": 11.21446963977349,
            "color": "rgb(228, 253, 69)"
        },
        {
            "id": 33,
            "x": 1717.847273698628,
            "y": 196.48760678820386,
            "size": 7.500462286883406,
            "color": "rgb(42, 250, 150)"
        },
        {
            "id": 34,
            "x": 1481.1122262893166,
            "y": 416.6230878485059,
            "size": 13.250238045761915,
            "color": "rgb(4, 13, 179)"
        },
        {
            "id": 35,
            "x": 1530.4456275061366,
            "y": 116.03759767076002,
            "size": 13.253046435135813,
            "color": "rgb(121, 89, 175)"
        },
        {
            "id": 36,
            "x": 1285.0763805024537,
            "y": 383.682051320879,
            "size": 9.762741364314858,
            "color": "rgb(254, 50, 135)"
        },
        {
            "id": 37,
            "x": 424.63021782281464,
            "y": 49.466729237899926,
            "size": 10.64887129965912,
            "color": "rgb(151, 174, 159)"
        },
        {
            "id": 38,
            "x": 1704.6989851451876,
            "y": 413.76277884030486,
            "size": 14.001819938846602,
            "color": "rgb(167, 1, 63)"
        },
        {
            "id": 39,
            "x": 439.88652738606936,
            "y": 434.624470244952,
            "size": 12.53629574988038,
            "color": "rgb(6, 207, 108)"
        },
        {
            "id": 40,
            "x": 1286.0876480280756,
            "y": 216.63824764061044,
            "size": 5.57995299263652,
            "color": "rgb(170, 144, 142)"
        },
        {
            "id": 41,
            "x": 432.02663280739637,
            "y": 221.1694009920422,
            "size": 10.849971576623545,
            "color": "rgb(199, 10, 0)"
        },
        {
            "id": 42,
            "x": 324.81328790641584,
            "y": 268.2974559619251,
            "size": 9.971744749638036,
            "color": "rgb(117, 79, 7)"
        },
        {
            "id": 43,
            "x": 1536.4091041763124,
            "y": 414.54822845196776,
            "size": 8.235151143349952,
            "color": "rgb(156, 0, 250)"
        },
        {
            "id": 44,
            "x": 659.9479331374306,
            "y": 93.6786559911963,
            "size": 10.02066960556121,
            "color": "rgb(93, 117, 60)"
        },
        {
            "id": 45,
            "x": 1191.3234737950986,
            "y": 350.2624356214281,
            "size": 5.483670738598349,
            "color": "rgb(247, 152, 204)"
        },
        {
            "id": 46,
            "x": 818.8454561110202,
            "y": 106.06861275181414,
            "size": 6.285167284504476,
            "color": "rgb(157, 250, 171)"
        },
        {
            "id": 47,
            "x": 409.83196133606344,
            "y": 380.4312504705423,
            "size": 11.071695672112565,
            "color": "rgb(149, 205, 170)"
        },
        {
            "id": 48,
            "x": 771.9180456862103,
            "y": 272.90252975134536,
            "size": 12.02010190830713,
            "color": "rgb(146, 117, 85)"
        },
        {
            "id": 49,
            "x": 1557.6173069001961,
            "y": 24.723121681094494,
            "size": 10.705162651412245,
            "color": "rgb(130, 111, 193)"
        }
    ]

    return (
        <>
            <ReactLenis root/>
            <div style={{
                position: "relative",
                backgroundColor: "black",
                backgroundImage: "linear-gradient(#0f0f0f, #031b3c)",
                height: "100%"
            }}>
                <div className={`container__app-dots`}>
                    <BuildDot className={`dot desktop`} left={"5%"} top={600} size={200} color={'#429fd2'}/>
                    <BuildDot className={`dot desktop`} right={"25%"} top={600} size={135} color={'#38b5f9'}/>
                    <BuildDot className={`dot desktop`} left={"17.5%"} top={510} size={105} color={'#38b5f9'}/>
                    <BuildDot className={`dot desktop`} left={"34%"} top={620} size={95} color={'white'}/>
                    <BuildDot className={`dot desktop`} right={"12%"} top={675} size={100} color={'grey'}/>
                    <BuildDot className={`dot desktop`} right={"45%"} top={700} size={100} color={'grey'}/>
                    <BuildDot className={`dot desktop`} left={"25%"} top={700} size={100} color={'grey'}/>
                    <BuildDot className={`dot desktop`} left={"2%"} top={600} size={50} color={'grey'}/>
                    <BuildDot className={`dot desktop`} right={"5%"} top={500} size={150} color={'white'}/>
                    <BuildDot className={`dot desktop`} left={"8%"} top={100} size={150} color={'grey'}/>
                    <BuildDot className={`dot desktop`} right={"11%"} top={100} size={150} color={'#429fd2'}/>

                </div>
                <div className={`container__app-overlay`}></div>
                <div className={`container__app--main`}>
                    <div className={`container__app-content-header`}>

                        <div className={`container__app-content-tab`}>
                            <HouseIcon size={32} color="#38b5f9"/><span>HOME</span>
                        </div>
                        <div></div>

                        <a className={`container__app-content-tab`} href={`mailto:hello@caledoniallc.io?subject=Contact%20%Us%20%Request`} rel={`noopener`} target={`_blank`}><AtIcon size={32} color="#38b5f9"/><span>CONTACT US</span></a>

                        <div></div>
                        {/*<div>*/}
                        {/*    <img src={`./CBE.png`}/>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src={`./HUBZone.png`} height={120} width={100}/>*/}
                        {/*</div>*/}
                        {/*<div style={{backgroundColor: "white"}}>*/}
                        {/*    <img src={`./PMI.svg`} width={100}/>*/}
                        {/*</div>*/}

                        <a className={`container__app-content-tab`} href={`./CaledoniaConsultingCapStatement.pdf`}
                           download><ScrollIcon
                            size={32} color="#38b5f9"/><span>CAPABILITY STATEMENT</span></a>
                    </div>
                    <div className={`container__app-content-container`}>
                        {/*<CenterImage />*/}
                        <ParallaxHome sm={sm} lg={lg} xl={xl} md={md}/>
                        <ParallaxServices sm={sm} lg={lg} xl={xl} md={md}/>
                        <ParallaxMission/>
                    </div>
                </div>
            </div>
        </>

    )
}

export default App
