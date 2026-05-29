import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minimize2, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Siddhivinayak Enterprises. 👋\n\nWe're your trusted partner for industrial supplies, cutting tools, and safety equipment. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-responses based on keywords
  const getAutoResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes("price") || message.includes("quote") || message.includes("cost")) {
      return "I'd be happy to help you with pricing! Please share your requirements, and our team will provide a customized quote. You can also fill out our contact form or call us at +91 9970500500.";
    }
    if (message.includes("product") || message.includes("catalog")) {
      return "We offer 7+ product categories including Abrasives, Cutting Tools, Safety Equipment, and more. Would you like to know about a specific product category?";
    }
    if (message.includes("delivery") || message.includes("shipping")) {
      return "We provide fast delivery across Pune & Maharashtra. Delivery time depends on your location and order size. For urgent requirements, please contact us directly at +91 9970500500.";
    }
    if (message.includes("brand")) {
      return "We deal with premium brands like Bosch, 3M, Makita, Dewalt, Stanley, Sandvik, Mitsubishi, and Taegutec. Which brand are you interested in?";
    }
    if (message.includes("contact") || message.includes("phone") || message.includes("call") || message.includes("location") || message.includes("address")) {
      return "📞 Phone: +91 9970500500\n\n📧 Email: siddhivinayakenterprises0104@gmail.com\n\n📍 Address:\nB-11, Ganraj Mauli Housing Society,\nShahunagar, Chinchwad,\nPune - 411019, Maharashtra, India\n\nFeel free to visit us or call for directions!";
    }
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! How can I assist you with your industrial supply needs today?";
    }
    if (message.includes("thank")) {
      return "You're welcome! Feel free to reach out anytime. Have a great day! 😊";
    }

    return "Thank you for your message! For detailed information, please contact our team at +91 9970500500 or fill out the contact form. We'll get back to you within 24 hours.";
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getAutoResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const quickReplies = [
    "Request Quote",
    "Product Catalog",
    "Contact & Location",
    "Delivery Info",
  ];

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center justify-center h-16 w-16 bg-[#F97316] hover:bg-[#F97316]/90 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-fade-in"
        aria-label="Open live chat"
      >
        {/* Pulse Animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75 animate-ping"></span>
        
        {/* Chat Icon */}
        <MessageCircle className="relative h-8 w-8" />
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${
        isMinimized ? "w-80 h-16" : "w-96 h-[600px]"
      } flex flex-col animate-fade-in`}
    >
      {/* Header */}
      <div className="bg-[#F97316] text-white rounded-t-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm">Live Support</h3>
            <p className="text-xs text-white/80">We're online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <Minimize2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex items-start gap-2 max-w-[80%] ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === "user"
                        ? "bg-[#F97316] text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {message.sender === "user" ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-[#F97316] text-white"
                        : "bg-white text-gray-800 border border-gray-200"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user" ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start gap-2">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-gray-600" />
                </div>
                <div className="bg-white rounded-2xl px-4 py-3 border border-gray-200">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-white border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-[#F97316] hover:bg-[#F97316]/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LiveChat;
