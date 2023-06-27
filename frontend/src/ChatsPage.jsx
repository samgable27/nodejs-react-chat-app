import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = ({ user }) => {
  //   const chatProps = useMultiChatLogic(
  //   "0cee4fb6-f190-4eed-9516-2158254adb26",
  //     user.username,
  //     user.secret
  //   );
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="0cee4fb6-f190-4eed-9516-2158254adb26"
        userName={user.username}
        secret={user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
