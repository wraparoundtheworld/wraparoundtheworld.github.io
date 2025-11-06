import { TaskBar, List } from "@react95/core";
import {
  Mail,
  MediaVideo,
  FileText,
  Mmsys112,
  Wangimg130,
  User5,
  InfoBubble,
} from "@react95/icons";

export default function MenuTaskBar({ onOpenModal }) {
  return (
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
            onClick={() => onOpenModal("research")}
          >
            Research Material
          </List.Item>

          <List.Item
            icon={<MediaVideo variant="32x32_4" />}
            onClick={() => onOpenModal("video")}
          >
            Video
          </List.Item>

          <List.Item
            icon={<Wangimg130 variant="32x32_4" />}
            onClick={() => onOpenModal("gallery")}
          >
            Gallery
          </List.Item>

          <List.Item
            icon={<Mmsys112 variant="32x32_4" />}
            onClick={() => onOpenModal("spotify")}
          >
            Playlist of Moon
          </List.Item>
          <List.Divider />
          <List.Item
            icon={<User5 variant="32x32_4" />}
            onClick={() => onOpenModal("info")}
          >
            Seungyong Moon
          </List.Item>
        </List>
      }
    />
  );
}
