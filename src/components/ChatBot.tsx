"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import chatbotData from "@/data/chatbotConfig.json";
import { X, RotateCcw, Send, Calendar, Phone, MapPin, Stethoscope, ChevronRight } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  time?: string;
  options?: typeof chatbotData.initialOptions;
  action?: {
    type: string;
    label: string;
    value?: string;
  };
  secondaryAction?: {
    type: string;
    label: string;
    value?: string;
  };
}

interface ChatBotProps {
  onOpenBookingModal: () => void;
}

export default function ChatBot({ onOpenBookingModal }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with JSON data
  const resetConversation = () => {
    setMessages([
      {
        id: "initial-welcome",
        sender: "bot",
        text: chatbotData.welcomeTitle,
        time: "Just now",
        options: chatbotData.initialOptions,
      },
    ]);
  };

  useEffect(() => {
    resetConversation();
  }, []);

  // Scroll to bottom of message list on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Handle Option Click
  const handleSelectOption = (option: (typeof chatbotData.initialOptions)[0]) => {
    setHasInteracted(true);
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // 1. Add user message
    const userMsg: ChatMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: option.text,
      time: now,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Simulate bot thinking/typing
    setTimeout(() => {
      setIsTyping(false);
      const botReply: ChatMessage = {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: option.response,
        time: "Just now",
        action: {
          type: option.actionType,
          label: option.actionLabel,
          value: option.actionValue,
        },
        secondaryAction: option.secondaryType
          ? {
              type: option.secondaryType,
              label: option.secondaryLabel,
              value: option.secondaryValue,
            }
          : undefined,
      };

      setMessages((prev) => [...prev, botReply]);
    }, 450);
  };

  // Handle Free-text User Input
  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = inputText.trim();
    if (!query) return;

    setHasInteracted(true);
    setInputText("");
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // 1. Add user message
    const userMsg: ChatMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: query,
      time: now,
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Search matching answer in chatbotConfig.json FAQ knowledge base
    const lowerQuery = query.toLowerCase();
    const matchedFaq = chatbotData.faqKnowledgeBase.find((faq) =>
      faq.keywords.some((k) => lowerQuery.includes(k.toLowerCase()))
    );

    setTimeout(() => {
      setIsTyping(false);
      let botMsg: ChatMessage;

      if (matchedFaq) {
        botMsg = {
          id: "bot-" + Date.now(),
          sender: "bot",
          text: matchedFaq.response,
          time: "Just now",
          action: {
            type: matchedFaq.actionType,
            label: matchedFaq.actionLabel,
            value: matchedFaq.actionValue,
          },
        };
      } else {
        botMsg = {
          id: "bot-" + Date.now(),
          sender: "bot",
          text: chatbotData.defaultResponse,
          time: "Just now",
          options: chatbotData.initialOptions.slice(0, 3),
        };
      }

      setMessages((prev) => [...prev, botMsg]);
    }, 450);
  };

  // Execute Action from Bot
  const handleExecuteAction = (action?: { type: string; label: string; value?: string }) => {
    if (!action) return;

    if (action.type === "modal") {
      onOpenBookingModal();
    } else if (action.type === "tel") {
      window.location.href = `tel:${action.value || "9550401487"}`;
    } else if (action.type === "email") {
      window.location.href = `mailto:${action.value || "sashreek12@gmail.com"}`;
    } else if (action.type === "scroll" && action.value) {
      const el = document.querySelector(action.value);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {/* 1. FLOATING BOT TRIGGER BUTTON (Bottom-Right with Sashreek Logo & Online Indicator) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-3">
        {/* Subtle greeting bubble if not interacted yet */}
        {!isOpen && !hasInteracted && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden md:flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200 text-xs font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 transition-all animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            <span>Need assistance? Chat with us!</span>
            <span className="text-teal-600 font-bold">👋</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Medical Chatbot" : "Open Medical Chatbot"}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-xl hover:shadow-2xl border-2 border-slate-100 flex items-center justify-center p-2 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500 group"
        >
          {/* Sashreek Circular SVG Logo */}
          <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/sashreek_logo.svg"
              alt="Sashreek Gastro & Liver Center"
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Active Online Indicator (Green Dot) */}
          <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" />
          </span>
        </button>
      </div>

      {/* 2. CHATBOT WINDOW (Styled to match uploaded Reference Design) */}
      {isOpen && (
        <div
          role="region"
          aria-label="Sashreek Care Assistant Chat Window"
          className="fixed bottom-20 sm:bottom-24 right-2.5 sm:right-6 z-50 w-[calc(100vw-1.25rem)] xs:w-[360px] sm:w-[390px] h-[min(550px,80dvh)] bg-white rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.25)] border border-slate-200/80 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          {/* Header */}
          <div className="bg-white px-4 py-3 border-b border-slate-100 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-slate-50 border border-slate-200 p-0.5 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/sashreek_logo.svg"
                  alt="Sashreek Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="leading-tight">
                <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                  {chatbotData.clinicName}
                </h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] text-emerald-700 font-semibold">
                    Online Assistant
                  </span>
                </div>
              </div>
            </div>

            {/* Header Actions: Reset & Close */}
            <div className="flex items-center gap-1">
              <button
                onClick={resetConversation}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                title="Restart conversation"
                aria-label="Restart conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                title="Close chat"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/70 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"} space-y-2 animate-in fade-in duration-200`}
              >
                {/* Bot Message Box */}
                {msg.sender === "bot" ? (
                  <div className="w-full max-w-[94%] bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border border-slate-200/70">
                    {/* Waving Hand & Welcome (First message styling like screenshot) */}
                    {msg.id === "initial-welcome" && (
                      <div className="mb-3 text-center sm:text-left">
                        <span className="text-4xl animate-wave inline-block" role="img" aria-label="Waving hand">
                          👋
                        </span>
                      </div>
                    )}

                    <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal whitespace-pre-line">
                      {msg.text}
                    </p>

                    {/* Quick Options Pill Buttons (matching reference UI) */}
                    {msg.options && msg.options.length > 0 && (
                      <div className="mt-3.5 space-y-2">
                        {msg.options.map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => handleSelectOption(opt)}
                            className="w-full text-left flex items-center gap-2.5 px-3.5 py-2.5 rounded-full border border-sky-200 bg-white hover:bg-sky-50/70 hover:border-sky-400 text-sky-900 text-xs font-semibold shadow-xs transition-all active:scale-98 group"
                          >
                            <span className="w-2 h-2 rounded-full bg-sky-400 group-hover:bg-sky-600 transition-colors flex-shrink-0" />
                            <span className="flex-1 truncate">{opt.text}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons for Responses */}
                    {(msg.action || msg.secondaryAction) && (
                      <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
                        {msg.action && (
                          <button
                            onClick={() => handleExecuteAction(msg.action)}
                            className="w-full py-2 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-xs shadow-sm transition-all text-center flex items-center justify-center gap-1.5"
                          >
                            {msg.action.label}
                          </button>
                        )}
                        {msg.secondaryAction && (
                          <button
                            onClick={() => handleExecuteAction(msg.secondaryAction)}
                            className="w-full py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-all text-center"
                          >
                            {msg.secondaryAction.label}
                          </button>
                        )}
                      </div>
                    )}

                    {msg.time && (
                      <span className="block mt-2.5 text-[10px] text-slate-400 font-medium">
                        {msg.time}
                      </span>
                    )}
                  </div>
                ) : (
                  /* User Bubble */
                  <div className="max-w-[85%] bg-teal-700 text-white rounded-2xl rounded-br-sm px-3.5 py-2.5 text-xs shadow-sm">
                    <p className="leading-relaxed font-medium">{msg.text}</p>
                    {msg.time && (
                      <span className="block text-right mt-1 text-[9px] text-teal-200">
                        {msg.time}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white border border-slate-200/80 rounded-2xl rounded-tl-sm px-3 py-2.5 w-fit shadow-xs">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* User Input Bar */}
          <form
            onSubmit={handleSendMessage}
            className="p-2.5 bg-white border-t border-slate-100 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 py-2 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-500 text-slate-800"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              aria-label="Send message"
              className="p-2 rounded-xl bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-40 disabled:hover:bg-teal-600 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Footer Branding (matching image 2 "Chat ⚡ by Collectchat") */}
          <div className="py-1.5 bg-slate-50 border-t border-slate-100 text-center">
            <span className="text-[10px] text-slate-400 font-medium">
              {chatbotData.brandingFooter}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
