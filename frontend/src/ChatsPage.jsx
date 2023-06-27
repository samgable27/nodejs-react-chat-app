import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = ({ user }) => {
  const chatProps = useMultiChatLogic(
    "0cee4fb6-f190-4eed-9516-2158254adb26",
    user.username,
    user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatsPage;
