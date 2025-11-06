import { useState, useEffect } from "react";
import { Modal, List, Frame } from "@react95/core";
import { MediaVideo } from "@react95/icons";
import ReactPlayer from "react-player";
import { isMobileDevice } from "../utils/mobile";
import { TASKBAR_HEIGHT } from "../utils/constants";

export default function VideoModal({ show, onClose, div2Visible }) {
  const [videos] = useState([
    "retro1.mp4",
    "retro2.mp4",
    "retro3.mp4",
    "noise-video.mp4",
    "loading-video.mp4",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLooping, setIsLooping] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * videos.length));
  }, [videos]);

  const handleEnded = () => {
    if (isLooping) {
      setCurrentIndex((prevIndex) => {
        let nextIndex = (prevIndex + 1) % videos.length;
        while (videos[nextIndex] === videos[videos.length - 1]) {
          nextIndex = (nextIndex + 1) % videos.length;
        }
        return nextIndex;
      });
    } else {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === videos.length - 1) {
          return 0;
        }
        let nextIndex = prevIndex + 1;
        while (videos[nextIndex] === videos[videos.length - 1]) {
          nextIndex = nextIndex + 1;
        }
        return nextIndex;
      });
    }
  };

  if (!show || !div2Visible) return null;

  return (
    <Modal
      title="Video.exe"
      className="modal-video"
      icon={<MediaVideo variant="32x32_4" />}
      closeModal={onClose}
      style={{
        ...(isMobile
          ? {
              top: "60%",
              left: "5%",
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
              <List.Item onClick={onClose}>Exit</List.Item>
            </List>
          ),
        },
      ]}
    >
      <Frame boxShadow="none">
        <ReactPlayer
          url={videos[currentIndex]}
          playing
          controls={false}
          muted
          config={{
            file: {
              forceVideo: true,
              attributes: {
                autoPlay: true,
                playsInline: true,
              },
            },
          }}
          onEnded={handleEnded}
          width="100%"
          height="auto"
        />
      </Frame>
    </Modal>
  );
}
