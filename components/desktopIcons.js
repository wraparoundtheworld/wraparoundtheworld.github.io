import { Wangimg130, MediaCd, MediaVideo } from "@react95/icons";
import { styled } from "@xstyled/styled-components";

const DesktopIcon = styled.div({
  marginTop: "20px",
  marginLeft: "19px",
  height: "70px",
  width: "70px",
});

const DesktopIconText = styled.p({
  marginTop: "4px",
  textAlign: "center",
  // color: "#fff",
});

const DesktopIconVideo = styled(MediaVideo)`
  display: block;
  margin: auto;
`;

const DesktopIconImage = styled(Wangimg130)`
  display: block;
  margin: auto;
`;
const DesktopIconImageMedia = styled(MediaCd)`
  display: block;
  margin: auto;
`;

export default function DesktopIcons({ handleOpenSpotifyModal, handleOpenGallerytoModal, handleOpenVideotoModal }) {
  return (
    <div>
        <DesktopIcon className="pointer" onClick={handleOpenVideotoModal}>
        <DesktopIconVideo className="pointer" variant="32x32_4" />
        <DesktopIconText className="pointer">Video</DesktopIconText>
      </DesktopIcon>
      <DesktopIcon className="pointer" onClick={handleOpenGallerytoModal}>
        <DesktopIconImage className="pointer" variant="32x32_4" />
        <DesktopIconText className="pointer">Gallery</DesktopIconText>
      </DesktopIcon>
      <DesktopIcon className="pointer" onClick={handleOpenSpotifyModal}>
        <DesktopIconImageMedia className="pointer" variant="32x32_4" />
        <DesktopIconText className="pointer">Playlist</DesktopIconText>
      </DesktopIcon>
    </div>
  );
}
