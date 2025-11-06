import { useState, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider, GlobalStyle } from "@react95/core";

import Wallpaper from "../components/wallpaper";
import DesktopIcons from "../components/desktopIcons";
import LoadingScreen from "../components/LoadingScreen";
import VideoModal from "../components/VideoModal";
import InfoModal from "../components/InfoModal";
import SpotifyModal from "../components/SpotifyModal";
import GalleryModal from "../components/GalleryModal";
import ResearchModal from "../components/ResearchModal";
import MenuTaskBar from "../components/MenuTaskBar";

export default function Home() {
  // Loading state
  const [loading, setLoading] = useState(true);

  // Visibility timing states
  const [div1Visible, setDiv1Visible] = useState(false);
  const [div2Visible, setDiv2Visible] = useState(false);

  // Modal states
  const [showModals, setShowModals] = useState({
    video: true,
    info: true,
    spotify: false,
    gallery: true,
    research: true,
  });

  // Toggle modal visibility
  const toggleModal = (modalName) => {
    setShowModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  };

  // Set timing for divs
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

  // Loading delay
  useEffect(() => {
    const delay = 3000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={"millenium"}>
      <GlobalStyle />
      <Wallpaper />
      <DesktopIcons
        handleOpenGallerytoModal={() => toggleModal("gallery")}
        handleOpenSpotifyModal={() => toggleModal("spotify")}
        handleOpenVideotoModal={() => toggleModal("video")}
      />

      <div>
        <Head>
          <title>Wrap around the World</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#8FB0A9"></meta>

          <meta property="og:title" content="Wrap Around the World" />
          <meta property="og:type" content="website" />
          <meta property="og:image" itemprop="image" content="/image/15.png" />
          <meta
            property="og:image:secure_url"
            itemprop="image"
            content="/image/15.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta
            property="og:url"
            content="https://wraparoundtheworld.online/"
          />
          <meta property="og:description" content="Wrap Around the World" />
          <meta property="og:locale" content="pt_BR" />
          <meta
            property="og:site_name"
            content="https://wraparoundtheworld.online/"
          />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="800" />

          <meta property="twitter:title" content="Wrap Around the World" />
          <meta property="twitter:type" content="website" />
          <meta
            property="twitter:image"
            itemprop="image"
            content="/image/15.png"
          />
          <meta
            property="twitter:image:secure_url"
            itemprop="image"
            content="/image/15.png"
          />
          <meta property="twitter:image:type" content="image/15.png" />
          <meta
            property="twitter:url"
            content="https://wraparoundtheworld.online/"
          />
          <meta
            property="twitter:description"
            content="Wrap Around the World"
          />
          <meta property="twitter:locale" content="pt_BR" />
          <meta
            property="twitter:site_name"
            content="https://wraparoundtheworld.online/"
          />
          <meta property="twitter:image:width" content="800" />
          <meta property="twitter:image:height" content="800" />
        </Head>

        {/* Loading Screen */}
        {loading && <LoadingScreen />}

        {/* All Modals */}
        <VideoModal
          show={showModals.video}
          onClose={() => toggleModal("video")}
          div2Visible={div2Visible}
        />

        <InfoModal show={showModals.info} onClose={() => toggleModal("info")} />

        <SpotifyModal
          show={showModals.spotify}
          onClose={() => toggleModal("spotify")}
        />

        <GalleryModal
          show={showModals.gallery}
          onClose={() => toggleModal("gallery")}
          div1Visible={div1Visible}
        />

        <ResearchModal
          show={showModals.research}
          onClose={() => toggleModal("research")}
        />

        {/* TaskBar Menu */}
        <MenuTaskBar onOpenModal={toggleModal} />
      </div>
    </ThemeProvider>
  );
}
