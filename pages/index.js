import { useState, useCallback, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import ReactPlayer from "react-player";
import Head from "next/head";
import {
  Modal,
  List,
  Tabs,
  Tab,
  Fieldset,
  Checkbox,
  Input,
  Dropdown,
  Frame,
  TaskBar,
  Button,
  ThemeProvider,
  GlobalStyle,
} from "@react95/core";
import {
  Mail,
  MediaVideo,
  Drvspace7,
  User7,
  Wangimg130,
  Issue,
  FileText,
  Mmsys112,
  Winpopup1,
  Wab321019,
  User5,
  InfoBubble,
} from "@react95/icons";
import {} from "../utils/image";
import { TASKBAR_HEIGHT } from "../utils/constants";
import { isMobileDevice } from "../utils/mobile";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import DesktopIcons from "../components/desktopIcons";
import Wallpaper from "../components/wallpaper";
import { InsideModal } from "../components/insideModal";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
// import { AGENTS, ClippyProvider, useClippy } from "@react95/clippy";

export default function Home() {
  /* Video */
  const [videos, setVideos] = useState([
    "retro1.mp4",
    "retro2.mp4",
    "retro3.mp4",
    // "video4.mp4",
    // "video5.mp4",
    // "video6.mp4",
    // "video7.mp4",
    // "video8.mp4",
    "loading-video.mp4", // Add the loading video URL
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLooping, setIsLooping] = useState(true);

  useEffect(() => {
    // Randomly choose the first video to play
    setCurrentIndex(Math.floor(Math.random() * videos.length));
  }, [videos]);

  const handleEnded = () => {
    if (isLooping) {
      setCurrentIndex((prevIndex) => {
        let nextIndex = (prevIndex + 1) % videos.length;
        while (videos[nextIndex] === videos[videos.length - 1]) {
          // Skip the loading video
          nextIndex = (nextIndex + 1) % videos.length;
        }
        return nextIndex;
      });
    } else {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === videos.length - 1) {
          return 0; // Loop back to the first video
        }
        let nextIndex = prevIndex + 1;
        while (videos[nextIndex] === videos[videos.length - 1]) {
          // Skip the loading video
          nextIndex = nextIndex + 1;
        }
        return nextIndex;
      });
    }
  };
  /* Loading */
  const [loading, setLoading] = useState(true);

  /* Set Time DIV */
  const [div1Visible, setDiv1Visible] = useState(false);
  const [div2Visible, setDiv2Visible] = useState(false);

  /* Picture State */

  const [showGallerytoModal, setShowGallerytoModal] = useState(true);

  const handleOpenGallerytoModal = useCallback(() => {
    setShowGallerytoModal(true);
  }, []);

  const handleCloseGallerytoModal = useCallback(() => {
    setShowGallerytoModal(false);
  }, []);

  //   useEffect(() => {
  //   if (ref.current != null) ref.current.parentElement.style.overflow = "auto";
  // }, [ref.current, showGallerytoModal]);
  /* Picture Data */
  const data = {
    pictures: Object.freeze([
      {
        id: "1",
        name: "Apocalypse-1.png",
        url: "/image/1.png",
      },
      {
        id: "2",
        name: "Brutalist Architecture-1.png",
        url: "/image/2.png",
      },
      {
        id: "3",
        name: "Lost.png",
        url: "/image/3.png",
      },
      {
        id: "4",
        name: "Nomad-1.png",
        url: "/image/4.png",
      },
      {
        id: "5",
        name: "Brutalist Architecture-2.png",
        url: "/image/5.png",
      },
      {
        id: "6",
        name: "Apocalypse-2.png",
        url: "/image/6.png",
      },
      {
        id: "7",
        name: "Nomad-2.png",
        url: "/image/7.png",
      },
      {
        id: "8",
        name: "Nomad-3.png",
        url: "/image/8.png",
      },
    ]),
  };

  const [selectedPicture, setSelectedPicture] = useState(
    data.pictures[Math.floor(Math.random() * data.pictures.length)].url
  );

  const handlePictureClick = (pictureUrl) => {
    setSelectedPicture(pictureUrl);
  };

  /* Set Time DIV */
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setDiv1Visible(true);
    }, 700);

    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setDiv2Visible(true);
    }, 1200);

    return () => clearTimeout(timer2);
  }, []);

  useEffect(() => {
    // Simulate loading delay
    const delay = 3000; // 2000 milliseconds = 2 seconds

    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  /* Spotify Modal */
  const [showSpotifyModal, setShowSpotifyModal] = useState(false);

  const [isMobile, setIsMobile] = useState();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useRef(null);
  const overflowRef = useRef(null);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, [setIsMobile]);

  const handleOpenSpotifyModal = useCallback(() => {
    setShowSpotifyModal(true);
  }, []);
  const handleCloseSpotifyModal = useCallback(() => {
    setShowSpotifyModal(false);
  }, []);

  /* SeungyongMoon */
  const [showSeungyongMoonModal, setShowSeungyongMoonModal] = useState(true);

  useEffect(() => {
    if (ref.current != null) ref.current.parentElement.style.overflow = "auto";
  }, [ref.current, showSeungyongMoonModal]);

  const handleOpenSeungyongMoonModal = useCallback(() => {
    setShowSeungyongMoonModal(true);
  }, []);

  const handleCloseSeungyongMoonModal = useCallback(() => {
    setShowSeungyongMoonModal(false);
  }, []);

  /* Video State */
  const [showVideotoModal, setShowVideotoModal] = useState(true);

  useEffect(() => {
    if (ref.current != null) ref.current.parentElement.style.overflow = "auto";
  }, [ref.current, showVideotoModal]);

  const handleOpenVideotoModal = useCallback(() => {
    setShowVideotoModal(true);
  }, []);

  const handleCloseVideotoModal = useCallback(() => {
    setShowVideotoModal(false);
  }, []);

  /* Info */
  const [showInfotoModal, setShowInfotoModal] = useState(true);

  useEffect(() => {
    if (ref.current != null) ref.current.parentElement.style.overflow = "auto";
  }, [ref.current, showInfotoModal]);

  const handleOpenInfotoModal = useCallback(() => {
    setShowInfotoModal(true);
  }, []);

  const handleCloseInfotoModal = useCallback(() => {
    setShowInfotoModal(false);
  }, []);

 
  const [showAlertYes, toggleShowAlertYes] = useState(false);
  const [showAlertNo, toggleShowAlertNo] = useState(false);

  const handleOpenAlert = () => toggleShowAlertYes(true);
  const handleCloseAlert = () => toggleShowAlertYes(false);

  const handleOpenAlertNo = () => toggleShowAlertNo(true);
  const handleCloseAlertNo = () => toggleShowAlertNo(false);

  /* SeungyongMoon */
  // const [showConfirmacaoModal, setShowConfirmacaoModal] = useState(false);

  // const handleOpenConfirmacaoModal = useCallback(() => {
  //   setShowConfirmacaoModal(true);
  // }, []);

  // const handleCloseConfirmacaoModal = useCallback(() => {
  //   setShowConfirmacaoModal(false);
  // }, []);

  /* Github */
  // const openGithub = function () {
  //   window.open("https://github.com/wraparoundtheworld/wraparoundtheworld.github.io");
  // };

  // const share = async function () {
  //   const url = "https://wraparoundtheworld.github.io";
  //   if (navigator.canShare && navigator.canShare({ url })) {
  //     await navigator.share({ url });
  //   }
  // };

  // const can = function () {
  //   const url = "https://wraparoundtheworld.github.io";
  //   return navigator.canShare && navigator.canShare({ url });
  // };

  // const [canShare, setcanShare] = useState();

  // useEffect(() => {
  //   setcanShare(can());
  // }, [setcanShare]);

  return (
    <ThemeProvider theme={"millenium"}>
      <GlobalStyle />
      <Wallpaper />
      <DesktopIcons
        handleOpenGallerytoModal={handleOpenGallerytoModal}
        handleOpenSpotifyModal={handleOpenSpotifyModal}
        handleOpenVideotoModal={handleOpenVideotoModal}
      />
      {/* <ClippyProvider agentName={AGENTS.CLIPPY}></ClippyProvider> */}
      <div>
        <Head>
          <title>Wrap around the World</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#8FB0A9"></meta>

          <meta property="og:title" content="Wrap Around the World" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            itemprop="image"
            content="/image/4.png"
          />
          <meta
            property="og:image:secure_url"
            itemprop="image"
            content="/image/4.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:url" content="https://wraparoundtheworld.github.io/" />
          <meta property="og:description" content="Wrap Around the World" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="wraparoundtheworld.github.io" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="800" />

          <meta property="twitter:title" content="Wrap Around the World" />
          <meta property="twitter:type" content="website" />
          <meta
            property="twitter:image"
            itemprop="image"
            content="/image/4.png"
          />
          <meta
            property="twitter:image:secure_url"
            itemprop="image"
            content="/image/4.png"
          />
          <meta property="twitter:image:type" content="image/png" />
          <meta property="twitter:url" content="https://wraparoundtheworld.github.io/" />
          <meta property="twitter:description" content="Wrap Around the World" />
          <meta property="twitter:locale" content="pt_BR" />
          <meta property="twitter:site_name" content="wraparoundtheworld.github.io" />
          <meta property="twitter:image:width" content="800" />
          <meta property="twitter:image:height" content="800" />
        </Head>

        {/* Loading Text */}
        {loading && (
          <div className="typewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(15) // text speed change
                  .typeString(
                    "seungyongmoon@seungyongs- LOADING..... <BR/>seungyongmoon@seungyongs- WELCOME TO WRAP AROUND THE WORLD<br/>STARTED SERVER ON URL: HTTPS://WRAPAROUNDTHEWORLD.GITHUB.IO"
                  )
                  .callFunction(() => {
                    console.log("String typed out!");
                  })

                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </div>
        )}

        {/* Modal Video Test  */}
        {showVideotoModal && div2Visible && (
          <Modal
            title="Video.exe A Defense of Noise"
            className="modal-video"
            icon={<MediaVideo variant="32x32_4" />}
            closeModal={handleCloseVideotoModal}
            style={{
              ...(isMobile
                ? {
                    top: "66%",
                    left: "5%",
                    // height: "auto",
                    // height: `calc(33% - ${TASKBAR_HEIGHT}px)`,
                    width: "90%",
                    margin: 0,
                  }
                : {
                    top: "25%",
                    left: "55%",
                    width: "33%",
                  }),
            }}
            menu={[
              {
                name: "File",
                list: (
                  <List>
                    <List.Item onClick={handleCloseVideotoModal}>
                      Exit
                    </List.Item>
                  </List>
                ),
              },
            ]}
          >
            <Frame boxShadow="none">
<ReactPlayer
  // light={
  //   <img src='/image/blue.webp' width="100%" height="100%" />
  // } 
  url={videos[currentIndex]}
  playing
  controls={false}
  muted // Add `muted` here
  config={{ 
    file: { 
      attributes: { 
        autoPlay: true 
      } 
    } 
  }}
  onEnded={handleEnded}
  width="100%"
  height="auto"
/>
            </Frame>
          </Modal>
        )}

        {/* Modal info  */}
        {showInfotoModal && (
          <Modal
            title="Seungyong Moon"
            className="modal-info"
            icon={<InfoBubble variant="32x32_4" />}
            closeModal={handleCloseInfotoModal}
            style={{
              ...(isMobile
                ? {
                    top: "66%",
                    left: "5%",
                    // height: "auto",
                    // height: `calc(33% - ${TASKBAR_HEIGHT}px)`,
                    width: "90%",
                    margin: 0,
                  }
                : {
                    top: "50%",
                    left: "10%",
                    width: "25%",
                  }),
            }}
            menu={[
              {
                name: "File",
                list: (
                  <List>
                    <List.Item onClick={handleCloseInfotoModal}>Exit</List.Item>
                  </List>
                ),
              },
            ]}
          >
            <Tabs height="auto" defaultActiveTab="General">
              <Tab title="General">
                <p
                  style={{
                    marginTop: 0,
                    marginBottom: "1.6em",
                  }}
                >
                  Seungyong's studio practice examines the unseen influence of
                  design and visual media, as well as the social dynamics of
                  standardization and normalization.{" "}
                </p>

                <Fieldset legend="Interests">
                  <Checkbox readOnly checked>
                    The Commons
                  </Checkbox>
                  <Checkbox readOnly checked>
                    Noise
                  </Checkbox>
                  <Checkbox readOnly checked>
                    Decolonising Design
                  </Checkbox>
                  <Checkbox readOnly checked>
                    Popular Modernism
                  </Checkbox>
                </Fieldset>

                <p>
                  Learn more about{" "}
                  <a href="https://moonseungyong.github.io/" target="_blank">
                    Seungyong Moon.
                  </a>
                </p>
              </Tab>
              <Tab title="Profile">
                <div className="profile">
                  <div className="portrait">
                    <img src="/image/portrait.png"></img>
                  </div>
                  <div className="wrapintro">
                    <div className="introduction">
                      Seungyong Moon
                      <ul>
                        <li>Creative / Art Director</li>
                        <li>Graphic Designer</li>
                        {/* <li>3D Artist</li>   */}
                        <li>Web Programmer</li>
                      </ul>
                    </div>
                    <div className="introduction">
                      Links
                      <ul>
                        <li>
                          <a
                            href="https://moonseungyong.github.io/"
                            target="_blank"
                          >
                            Homepage
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://instagram.com/wraparoundtheworld"
                            target="_blank"
                          >
                            Instagram
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Modal>
        )}

        {/* Modal do spotify  */}
        {showSpotifyModal && (
          <Modal
          style={{
            top: "20%",
          }}
            title="Playlist of Moon"
            className="modal-spotify"
            icon={<Mmsys112 variant="32x32_4" />}
            closeModal={handleCloseSpotifyModal}
            menu={[
              {
                name: "File",
                list: (
                  <List>
                    <List.Item onClick={handleCloseSpotifyModal}>
                      Exit
                    </List.Item>
                  </List>
                ),
              },
            ]}
          >
            <Frame
              boxShadow="none"
              style={{
                height: "352px",
              }}
            >
              <iframe
                src="https://open.spotify.com/embed/playlist/65lqAmjjSph2eEt60n8LP0?utm_source=generator"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="404 not found"
              ></iframe>
            </Frame>
          </Modal>
        )}

        {/* Modal Gallery  */}
        {showGallerytoModal && div1Visible && (
          <Modal
            title="Gallery.exe"
            className="modal-gallery"
            icon={<Wangimg130 variant="32x32_4" />}
            closeModal={handleCloseGallerytoModal}
            style={{
              ...(isMobile
                ? {
                    top: "33%",
                    left: "5%",
                    // height: "auto",
                    maxheight: `calc(33% - ${TASKBAR_HEIGHT}px)`,
                    width: "90%",
                    margin: 0,
                  }
                : {
                    top: "35%",
                    left: "27%",
                    width: "33%",
                  }),
            }}
            menu={[
              {
                name: "File",
                list: (
                  <List>
                    <List.Item onClick={handleCloseGallerytoModal}>
                      Exit
                    </List.Item>
                  </List>
                ),
              },
            ]}
          >
            <div className="pictures">
              <Frame
                boxShadow="none"
                style={
                  {
                    // height: "352px",
                  }
                }
              >
                <InsideModal
                  bg="white"
                  boxShadow="out"
                  ref={overflowRef}
                  style={{
                    padding: "10px",
                  }}
                >
                  <div className="picname">
                    {data.pictures.map((picture) => (
                      <span
                        key={picture.id}
                        name={picture.name}
                        onClick={() => handlePictureClick(picture.url)}
                        className={
                          selectedPicture === picture.url ? "active" : ""
                        }
                      >
                        {picture.name}
                      </span>
                    ))}
                  </div>
                </InsideModal>
              </Frame>
              <Frame
                boxShadow="none"
                style={
                  {
                    // height: "352px",
                  }
                }
              >
                <InsideModal
                  boxShadow="out"
                  ref={ref}
                  style={{
                    padding: "10px",
                  }}
                >
                  <Zoom>
                    <img src={selectedPicture} alt="Selected Picture" />
                  </Zoom>
                </InsideModal>
              </Frame>
            </div>
          </Modal>
        )}
        {/* Research Material */}
        {showSeungyongMoonModal && (
          <Modal
            className={!isMobile ? "modal" : ""}
            title="Research Material"
            closeModal={handleCloseSeungyongMoonModal}
            icon={<FileText variant="32x32_4" />}
            style={{
              ...(isMobile
                ? {
                    top: "2%",
                    left: "5%",
                    height: `calc(40% - ${TASKBAR_HEIGHT}px)`,
                    width: "90%",
                    margin: 0,
                  }
                : {
                    top: "3%",
                    left: "5%",
                    width: "45%",
                    height: "50vh",
                  }),
            }}
            menu={[
              {
                name: "File",
                list: (
                  <List>
                    <List.Item onClick={handleCloseSeungyongMoonModal}>
                      Exit
                    </List.Item>
                  </List>
                ),
              },
            ]}
          >
            <InsideModal bg="white" boxShadow="out" ref={ref}>
              <div>
                <img
                  className="image-hero"
                  src={"/image/hero.webp"}
                  alt="Noise"
                />
                <div className="hero"></div>
                <br />
                <h2>A Defense of Noise</h2>
        
                <p>
                In Korea, particularly, the style known as "Newtro" has gained popularity alongside the retro trend. This style consists of low-quality videos resembling VHS tapes and images with glitch effects, all based on noise. Such videos and images are widely shared on the internet. Even in the field of design, graphic designers often apply noise effects such as textures to posters, giving them a vintage feel.
                </p>
                <br/>
                <img
                      className="image-center"
                      src={"/image/vhs.jpg"}
                      alt="New Jeans"
                    />
                        <br/>
                <p>
                Hito Steyerl, in her work "In Defense of the Poor Image," presents the potential of low-resolution and compressed images. She emphasizes that the imperfections and distortions of these images can challenge conventional visual representations and authority. Although these images lose their original aura as they lose their source and become distorted, they can be perceived more democratically.
                </p>
                <br/>
                <img
                      className="icons"
                      src={"/image/poorimage.jpg"}
                      alt="Thomas Ruff, jpeg rl104, 2007"
                    />
                        <br/>
                <p>
                Another work, "Proxy Politics: Signal and Noise," addresses the interest in noise reduction in smartphone photography due to the low-quality lenses. The algorithm used in this context analyzes the user-captured image, removes noise, and smoothes the photo. However, there is a drawback in that developers of such algorithms can manipulate the user's perception by distorting the intended reality of the image or creating unwanted results.
             
                </p>
                <br/>
                <img
                      className="icons"
                      src={"/image/cp.png"}
                      alt="Computational Photography"
                    />
                        <br/>
                <p>
                Even with the advancements of AI and smartphones providing smoother images, why do we still have an obsession with noisy images? Mark Fisher, in "Ghost of My Life," suggests that our current anxieties reveal a desire to linger in the past. Consequently, instead of creating something new, we reinterpret the guaranteed elements and remain in the past.
                </p>
                <br/>
                <img
                      className="image-center"
                      src={"/image/mark.jpeg"}
                      alt="Mark Fisher, 1968 – 2017"
                    />
                        <br/>
                <p>
                Noisy, low-quality images possess a visual neutrality. They can be seen as an alternative language that breaks away from traditional patterns or as a reflection of our desire to dwell in an uneasy past. Researching noise allows for a deeper understanding of the meaning behind such images and our visual experiences.
                </p>
                <br />
                <br />
           
              </div>
            </InsideModal>
          </Modal>
        )}

        {/* Menu */}
        <TaskBar
          list={
            <List>
              <List.Item
                as="a"
                href="mailto:seungyongmoon@gmail.com"
                icon={<Mail variant="32x32_4" />}
                target="_blank"
              >
                Email me
              </List.Item>
              <List.Divider />
              <List.Item
                icon={<FileText variant="32x32_4" />}
                onClick={handleOpenSeungyongMoonModal}
              >
                Research Material
              </List.Item>

              <List.Item
                icon={<MediaVideo variant="32x32_4" />}
                onClick={handleOpenVideotoModal}
              >
                Video
              </List.Item>

              <List.Item
                icon={<Wangimg130 variant="32x32_4" />}
                onClick={handleOpenGallerytoModal}
              >
                Gallery
              </List.Item>

              <List.Item
                icon={<Mmsys112 variant="32x32_4" />}
                onClick={handleOpenSpotifyModal}
              >
                Playlist of Moon
              </List.Item>
              {/*<List.Item
                icon={<Winpopup1 variant="32x32_4" />}
                onClick={handleOpenPadrinhosModal}
              >
                Marcela & GG
              </List.Item>*/}
              <List.Divider />
              <List.Item
                icon={<User5 variant="32x32_4" />}
                onClick={handleOpenInfotoModal}
              >
                Seungyong Moon
              </List.Item>
            </List>
          }
        />
      </div>
    </ThemeProvider>
  );
}
