import { TbMessageChatbot } from "react-icons/tb";
import "./styles/Chatbot.css";

const Chatbot = () => {
  return (
    <div className="chatbot-container">
      <div 
        className="chatbot-icon-wrapper" 
        data-cursor="disable"
        onClick={() => {
          // You can add logic here to open a chat window or redirect
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <TbMessageChatbot />
      </div>
    </div>
  );
};

export default Chatbot;
