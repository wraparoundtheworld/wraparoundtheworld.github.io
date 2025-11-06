import { Modal, List, Frame } from "@react95/core";
import { Mmsys112 } from "@react95/icons";

export default function SpotifyModal({ show, onClose }) {
  if (!show) return null;

  return (
    <Modal
      style={{
        top: "20%",
      }}
      title="Playlist of Moon"
      className="modal-spotify"
      icon={<Mmsys112 variant="32x32_4" />}
      closeModal={onClose}
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
          title="Playlist of Moon"
        ></iframe>
      </Frame>
    </Modal>
  );
}
